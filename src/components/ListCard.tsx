import { ChevronRight } from 'lucide-react'

import { cn } from '../lib/cn'
import { Markdown } from './Markdown'

type Props = {
  title: string
  href?: string
  date: string
  subtitle: string
  body: string
  avatarTextFallback: string
  avatarSrc?: string
}

export function ListCard({
  title,
  href,
  date,
  subtitle,
  body,
  avatarTextFallback,
  avatarSrc,
}: Props) {
  const Wrapper = href ? 'a' : 'div'

  return (
    <div className="rounded-lg bg-card/70 backdrop-blur text-card-foreground flex p-4">
      <div className="flex-none">
        <Wrapper
          {...(href
            ? {
                href,
                target: '_blank',
                rel: 'noreferrer',
              }
            : {})}
        >
          <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted">
            {avatarSrc ? (
              <img
                className="h-full w-full object-cover"
                src={avatarSrc}
                alt=""
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium">
                {avatarTextFallback}
              </span>
            )}
          </span>
        </Wrapper>
      </div>

      <div className="flex-grow ml-4 items-center flex-col group">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {href ? (
                <ChevronRight
                  className={cn(
                    'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                  )}
                />
              ) : null}
            </h3>

            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">
              {date}
            </div>
          </div>

          <div className="font-sans text-xs text-muted-foreground">
            <span>{subtitle}</span>
          </div>
        </div>

        {body ? (
          <div className="mt-2">
            <Markdown>{body}</Markdown>
          </div>
        ) : null}
      </div>
    </div>
  )
}
