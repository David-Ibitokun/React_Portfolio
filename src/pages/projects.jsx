import { div } from 'framer-motion/client'
import React from 'react'

export default function projects() {
    const projects = [
        {
            name: 'Sumia E-Commerce Website',
            description:
                'A live e-commerce website for browsing products and exploring a modern shopping experience.',
            url: 'https://davidibitokun.pythonanywhere.com/',
        },
        {
            name: 'AI Crop-Climate Prediction and Evaluation',
            description:
                'An AI-powered crop and climate prediction app built with TCN-MLP for data-driven agricultural insights.',
            url: 'https://nig-climate-with-dl.streamlit.app/',
        },
    ]

    return (
        <div>
            <section id="projects" className="min-h-screen px-6 py-16">
                <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-10">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Projects</h1>
                        <p className="mx-auto mt-4 max-w-2xl text-base opacity-80">
                            Selected live projects showcasing web development and applied AI work.
                        </p>
                    </div>

                    <div className="grid w-full gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <article
                                key={project.name}
                                className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
                            >
                                <h2 className="text-2xl font-semibold">{project.name}</h2>
                                <p className="mt-3 leading-7 opacity-80">{project.description}</p>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary mt-6"
                                >
                                    Visit Project
                                </a>
                            </article>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="max-w-2xl leading-7 opacity-80">
                            Open to collaboration, product ideas, and new opportunities in web and AI development.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
