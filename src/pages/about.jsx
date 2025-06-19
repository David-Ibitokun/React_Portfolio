import React from 'react'
import Profile from '../assets/images/profile1.jpg'

export default function about() {
return (
    <div>
        <section id="about">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={Profile}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-lg shadow-2xl h-auto"
                        alt="Profile"
                        style={{ objectFit: 'cover' }}
                    />
                    <div>
                        <h1 className="text-5xl font-bold">About</h1>
                        <p className="py-6">
                            Hi, I’m David, a passionate and motivated web developer with a growing skill set in React and Django. I enjoy turning ideas into real, functional web applications, combining creativity with clean, efficient code. <br />
                            I started my journey in web development with a curiosity for how websites work, and now I’m focused on building responsive, user-friendly websites and web applications. Currently, I’m developing projects that use React for modern frontend interfaces and Django for robust, secure backend systems. <br />
                            As I learn and grow, I’m always excited to explore new tools, frameworks, and challenges in web development. My goal is to keep improving, collaborate with great teams, and build solutions that make a difference.
                            <br />
                            Right now, I’m building my portfolio with practical projects to showcase my skills, and I’m open to opportunities for learning, internships, and collaborations.
                        </p>
                        </div>
                    </div>
                </div>
        </section>
    </div>
)
};
