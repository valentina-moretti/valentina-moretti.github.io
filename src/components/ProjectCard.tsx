import { Markdown } from './Markdown'

export function ProjectCard({
  title,
  date,
  body,
  imageSrc,
  links,
}: {
  title: string
  date: string
  body: string
  imageSrc?: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground overflow-hidden">
      {imageSrc ? (
        <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}

      <div className="p-4">
        <div className="text-xs text-muted-foreground">{date}</div>
        <h3 className="mt-1 text-sm font-semibold leading-tight">{title}</h3>
        <div className="mt-2">
          <Markdown>{body}</Markdown>
        </div>

        {links.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
