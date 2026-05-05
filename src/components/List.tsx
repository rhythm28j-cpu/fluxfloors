import { ReactNode } from 'react';

export interface ListProps<Item extends ReactNode = ReactNode> {
  items: Item[]
  ordered?: boolean
  className?: string
}

export function List<Item extends ReactNode = ReactNode>({
  items,
  ordered = false,
  className = '',
}: ListProps<Item>) {
  const ListElement = ordered ? 'ol' : 'ul'

  return (
    <ListElement className={className}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListElement>
  )
}
