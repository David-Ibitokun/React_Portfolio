import React from 'react'

export default function skills() {
  const skillGroups = [
    {
      title: 'Backend Development',
      tag: 'Primary',
      items: ['Django / Django REST', 'Python', 'PostgreSQL / MySQL', 'API Design (REST)'],
    },
    {
      title: 'Frontend Integration',
      items: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Architecture',
      items: ['Git & GitHub', 'Docker (Basic)', 'Postman', 'System Design'],
    },
  ]

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-16 text-white"
      style={{
        backgroundColor: '#0b0f10',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-sky-400/80">Core Capabilities</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Skills</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            A focused mix of backend engineering, frontend delivery, and practical tooling for building
            reliable products from idea to deployment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-[#181c1d]/95 p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-sky-400">
                  <span className="text-lg font-bold">◉</span>
                </div>
                {group.tag ? (
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                    {group.tag}
                  </span>
                ) : null}
              </div>

              <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/85">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-sky-400">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-black/30 p-6 text-center text-white/75 shadow-xl backdrop-blur-sm">
          <p className="leading-7">
            I also work comfortably across responsive UI implementation, API integration, debugging,
            and turning product requirements into clean, maintainable interfaces.
          </p>
        </div>
      </div>
    </section>
  )
}
