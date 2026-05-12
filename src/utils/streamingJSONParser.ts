/**
 * Streaming JSON Parser
 * Parses partial JSON chunks from LLM output into complete objects
 */

export interface StreamingJSONResult {
  complete: boolean
  data?: any
  error?: string
  partial?: string
}

export class StreamingJSONParser {
  private buffer: string = ''
  private braceCount: number = 0
  private bracketCount: number = 0
  private inString: boolean = false
  private escapeNext: boolean = false

  /**
   * Add a chunk of text to the parser
   */
  addChunk(chunk: string): StreamingJSONResult {
    this.buffer += chunk

    // Count braces and brackets while respecting strings
    for (let i = 0; i < chunk.length; i++) {
      const char = chunk[i]

      if (this.escapeNext) {
        this.escapeNext = false
        continue
      }

      if (char === '\\' && this.inString) {
        this.escapeNext = true
        continue
      }

      if (char === '"' && !this.escapeNext) {
        this.inString = !this.inString
        continue
      }

      if (!this.inString) {
        if (char === '{') this.braceCount++
        else if (char === '}') this.braceCount--
        else if (char === '[') this.bracketCount++
        else if (char === ']') this.bracketCount--
      }
    }

    // Check if JSON is complete (balanced braces/brackets and not in string)
    const isComplete = this.braceCount === 0 && this.bracketCount === 0 && !this.inString

    if (isComplete) {
      try {
        const data = JSON.parse(this.buffer.trim())
        return { complete: true, data }
      } catch (error) {
        return {
          complete: false,
          error: `JSON parse error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          partial: this.buffer
        }
      }
    }

    return { complete: false, partial: this.buffer }
  }

  /**
   * Reset the parser state
   */
  reset(): void {
    this.buffer = ''
    this.braceCount = 0
    this.bracketCount = 0
    this.inString = false
    this.escapeNext = false
  }

  /**
   * Get current buffer content
   */
  getBuffer(): string {
    return this.buffer
  }
}

/**
 * Utility function for one-off streaming JSON parsing
 */
export function parseStreamingJSON(chunks: string[]): StreamingJSONResult {
  const parser = new StreamingJSONParser()
  let result: StreamingJSONResult = { complete: false }

  for (const chunk of chunks) {
    result = parser.addChunk(chunk)
    if (result.complete) break
  }

  return result
}