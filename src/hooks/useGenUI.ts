import { useCallback, useMemo, useRef, useState } from 'react'
import { StreamingJSONParser } from '../utils'
import type { GenUIItem } from '../components'

export interface UseGenUIOptions {
  initialItems?: GenUIItem[]
  onItemComplete?: (item: GenUIItem) => void
  onError?: (message: string) => void
}

export interface UseGenUIState {
  items: GenUIItem[]
  currentItem: GenUIItem | null
  rawBuffer: string
  error: string | null
  isStreaming: boolean
}

export function useGenUI(options: UseGenUIOptions = {}) {
  const { initialItems = [], onItemComplete, onError } = options

  const parserRef = useRef(new StreamingJSONParser())
  const [items, setItems] = useState<GenUIItem[]>(initialItems)
  const [currentItem, setCurrentItem] = useState<GenUIItem | null>(null)
  const [rawBuffer, setRawBuffer] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isStreaming, setIsStreaming] = useState(false)

  const reset = useCallback(() => {
    parserRef.current.reset()
    setRawBuffer('')
    setError(null)
    setCurrentItem(null)
    setIsStreaming(false)
  }, [])

  const appendChunk = useCallback(
    (chunk: string) => {
      setIsStreaming(true)
      const result = parserRef.current.addChunk(chunk)
      setRawBuffer(result.partial ?? parserRef.current.getBuffer())

      if (result.error) {
        setError(result.error)
        onError?.(result.error)
        return result
      }

      setError(null)

      if (result.complete && result.data) {
        const incoming = result.data as GenUIItem
        setCurrentItem(incoming)
        setItems((prevItems) => {
          const lastItem = prevItems[prevItems.length - 1]
          if (lastItem?.componentId === incoming.componentId && lastItem !== incoming) {
            return [...prevItems.slice(0, -1), incoming]
          }
          return [...prevItems, incoming]
        })
        onItemComplete?.(incoming)
        parserRef.current.reset()
        setRawBuffer('')
        setIsStreaming(false)
      }

      return result
    },
    [onError, onItemComplete],
  )

  const updateCurrentItem = useCallback((update: Partial<GenUIItem>) => {
    setCurrentItem((current) => {
      if (!current) return null
      return {
        ...current,
        ...update,
        props: {
          ...current.props,
          ...(update.props ?? {}),
        },
      }
    })
  }, [])

  const state = useMemo<UseGenUIState>(
    () => ({ items, currentItem, rawBuffer, error, isStreaming }),
    [items, currentItem, rawBuffer, error, isStreaming],
  )

  return {
    ...state,
    appendChunk,
    reset,
    setItems,
    updateCurrentItem,
  }
}
