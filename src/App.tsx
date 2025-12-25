import { Badge } from './components/Badge'
import { Dock } from './components/Dock'
import { ListCard } from './components/ListCard'
import { Markdown } from './components/Markdown'
import { ProjectCard } from './components/ProjectCard'
import { TimelineItem } from './components/TimelineItem'
import { site } from './content/site'
import { useGsapReveal } from './lib/useGsapReveal'

export default function App() {
  useGsapReveal()

  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <div className="flex">
                  <span
                    data-reveal-hero
                    className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  >
                    {site.hero.heading}
                  </span>
                </div>
                <div className="flex">
                  <span
                    data-reveal-hero
                    className="inline-block max-w-[600px] md:text-xl"
                  >
                    {site.hero.subheading}
                  </span>
                </div>
              </div>

              <div data-reveal className="shrink-0">
                <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
                  {site.hero.avatarSrc ? (
                    <img
                      className="h-full w-full object-cover"
                      src={site.hero.avatarSrc}
                      alt=""
                      decoding="async"
                      loading="lazy"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      {site.hero.avatarFallback}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div data-reveal>
            <h2 className="text-xl font-bold">{site.about.title}</h2>
          </div>
          <div data-reveal>
            <Markdown>{site.about.body}</Markdown>
          </div>
        </section>

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <div data-reveal>
              <h2 className="text-xl font-bold">{site.work.title}</h2>
            </div>
            <div className="space-y-3">
              {site.work.items.map((item) => (
                <div key={item.title} data-reveal className="cursor-pointer">
                  <ListCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="volunteering">
          <div className="flex min-h-0 flex-col gap-y-3">
            <div data-reveal>
              <h2 className="text-xl font-bold">{site.volunteering.title}</h2>
            </div>
            <div className="space-y-3">
              {site.volunteering.items.map((item) => (
                <div key={item.title} data-reveal className="cursor-pointer">
                  <ListCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <div data-reveal>
              <h2 className="text-xl font-bold">{site.education.title}</h2>
            </div>
            <div className="space-y-3">
              {site.education.items.map((item) => (
                <div key={item.title} data-reveal className="cursor-pointer">
                  <ListCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-4">
          <div data-reveal className="flex flex-col items-center text-center">
            <Badge>{site.projects.badge}</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-5xl">
              {site.projects.title}
            </h2>
            <p className="mt-3 max-w-[700px] text-muted-foreground md:text-xl">
              {site.projects.subtitle}
            </p>
          </div>

          <div
            data-reveal
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {site.projects.items.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                date={p.date}
                body={p.body}
                imageSrc={p.imageSrc}
                links={p.links}
              />
            ))}
          </div>
        </section>

        <section id="experiences" className="space-y-4">
          <div data-reveal className="flex flex-col items-center text-center">
            <Badge>{site.stories.badge}</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-5xl">
              {site.stories.title}
            </h2>
            <p className="mt-3 max-w-[700px] text-muted-foreground md:text-xl">
              {site.stories.subtitle}
            </p>
          </div>

          <div className="space-y-10">
            {site.stories.items.map((t) => (
              <div key={t.title} data-reveal>
                <TimelineItem {...t} />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-3">
          <div data-reveal>
            <h2 className="text-xl font-bold">{site.contact.title}</h2>
          </div>
          <div data-reveal>
            <Markdown>{site.contact.body}</Markdown>
          </div>
          <div data-reveal className="flex gap-3">
            {site.contact.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium underline underline-offset-4"
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <Dock github={site.dock.github} linkedin={site.dock.linkedin} />
    </>
  )
}
