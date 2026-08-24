import React from 'react'
import SumiaPreview from '../assets/images/Sumia_Preview.webp'
import TcnMlpPreview from '../assets/images/TCN_MLP_Preview.webp'

export default function projects() {
    const projects = [
        {
            name: 'Sumia E-Commerce Website',
            description:
                'A live e-commerce website for browsing products and exploring a modern shopping experience.',
            url: 'https://davidibitokun.pythonanywhere.com/',
            image: SumiaPreview,
        },
        {
            name: 'AI Crop-Climate Prediction and Evaluation',
            description:
                'An AI-powered crop and climate prediction app built with TCN-MLP for data-driven agricultural insights.',
            url: 'https://nig-climate-with-dl.streamlit.app/',
            image: TcnMlpPreview,
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
                                className="group relative min-h-[380px] overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-xl transition-transform duration-300 hover:-translate-y-1"
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
                                <div className="relative flex h-full min-h-[380px] flex-col justify-end p-6 text-white">
                                    <h2 className="text-2xl font-semibold drop-shadow-lg">{project.name}</h2>
                                    <p className="mt-3 leading-7 text-white/90 drop-shadow-md">{project.description}</p>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-primary mt-6 w-fit"
                                    >
                                        Visit Project
                                    </a>
                                </div>
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
