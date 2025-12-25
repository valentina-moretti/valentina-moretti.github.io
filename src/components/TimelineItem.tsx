import { Markdown } from './Markdown'

export function TimelineItem({
  date,
  title,
  location,
  body,
  logoSrc,
  imageSrc,
}: {
  date: string
  title: string
  location: string
  body: string
  logoSrc?: string
  imageSrc?: string
}) {
  return (
    <div className="flex gap-x-3">
      <div className="flex-none">
        <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto bg-muted">
          {logoSrc ? (
            <img
              className="h-full w-full object-cover"
              src={logoSrc}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium">
              {title.slice(0, 1)}
            </span>
          )}
        </span>
      </div>

      <div className="flex-1">
        <div className="text-xs text-muted-foreground">{date}</div>
        <h3 className="mt-1 text-base font-semibold leading-tight">{title}</h3>
        <div className="text-xs text-muted-foreground">{location}</div>
        <div className="mt-3">
          <Markdown>{body}</Markdown>
        </div>
        {imageSrc ? (
          <div className="mt-4 overflow-hidden rounded-lg border bg-muted">
            <img
              src={imageSrc}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}
