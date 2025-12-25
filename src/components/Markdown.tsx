import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { cn } from '../lib/cn'

export function Markdown({
  className,
  children,
}: {
  className?: string
  children: string
}) {
  return (
    <div
      className={cn(
        'prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert',
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ ...props }) => (
            <a {...props} target="_blank" rel="noreferrer" />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
