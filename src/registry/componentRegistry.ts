import type { ComponentType } from 'react'
import { Button, Card, ImageContainer, List, Table, Text } from '../components'
import buttonSchema from '../schema/Button.schema.json'
import cardSchema from '../schema/Card.schema.json'
import imageContainerSchema from '../schema/ImageContainer.schema.json'
import listSchema from '../schema/List.schema.json'
import tableSchema from '../schema/Table.schema.json'
import textSchema from '../schema/Text.schema.json'

export interface ComponentRegistryEntry {
  id: string
  name: string
  description: string
  component: ComponentType<any>
  schema: Record<string, unknown>
  examples?: Array<{
    title: string
    props: Record<string, unknown>
  }>
}

export const componentRegistry: ComponentRegistryEntry[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'A reusable button component for primary, secondary, and ghost actions.',
    component: Button,
    schema: buttonSchema,
    examples: [
      { title: 'Primary action', props: { children: 'Click me', variant: 'primary' } },
      { title: 'Secondary action', props: { children: 'Cancel', variant: 'secondary' } },
    ],
  },
  {
    id: 'card',
    name: 'Card',
    description: 'A simple card container that supports a title, subtitle, body content, and footer.',
    component: Card,
    schema: cardSchema,
    examples: [
      { title: 'Card with title', props: { title: 'Card title', children: 'Card content' } },
    ],
  },
  {
    id: 'imageContainer',
    name: 'ImageContainer',
    description: 'A wrapper for images with optional caption and nested children.',
    component: ImageContainer,
    schema: imageContainerSchema,
    examples: [
      { title: 'Image with caption', props: { src: '/example.jpg', alt: 'Example', caption: 'Example caption' } },
    ],
  },
  {
    id: 'list',
    name: 'List',
    description: 'A flexible list component that can render ordered or unordered items.',
    component: List,
    schema: listSchema,
    examples: [
      { title: 'Unordered list', props: { items: ['Item one', 'Item two'] } },
    ],
  },
  {
    id: 'table',
    name: 'Table',
    description: 'A table component that renders rows based on column keys and row objects.',
    component: Table,
    schema: tableSchema,
    examples: [
      {
        title: 'Simple table',
        props: {
          columns: ['Name', 'Value'],
          data: [{ Name: 'Height', Value: '180cm' }, { Name: 'Weight', Value: '75kg' }],
        },
      },
    ],
  },
  {
    id: 'text',
    name: 'Text',
    description: 'A text component that supports semantic elements, sizing, weight, and color.',
    component: Text,
    schema: textSchema,
    examples: [
      { title: 'Bold heading', props: { as: 'h2', size: 'large', weight: 'bold', children: 'Heading text' } },
    ],
  },
]
