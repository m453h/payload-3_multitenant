import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { LexicalRichTextAdapterProvider } from 'node_modules/@payloadcms/richtext-lexical/dist/types'

interface RichTextInput {
  name: string
  required?: boolean
  label?: string
  defaultValue?: any
  localized?: boolean
}

interface RichTextOutput {
  name: string
  type: 'richText'
  required: boolean
  label: string
  editor: LexicalRichTextAdapterProvider
}

function capitalizeFirstLetter(text: String) {
  return text[0].toUpperCase() + text.slice(1)
}

export default function richText(input: RichTextInput): RichTextOutput {
  return {
    name: input.name,
    type: 'richText',
    required: input.required ?? false,
    label: capitalizeFirstLetter(input.name) ?? 'Content',
    editor: lexicalEditor({}),
  }
}
