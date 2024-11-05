import { useEffect, useRef } from "react";
import { EDUCATION } from "../constants/index.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const educationRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".education-item", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                stagger: 0.3,
                scrollTrigger: {
                    trigger: educationRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        }, educationRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-16" id="education" ref={educationRef}>
            <div className="mx-auto max-w-full px-4">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                    Education
                </h2>
                <div className="flex flex-col space-y-8">
                    {EDUCATION.map((edu) => (
                        <div
                            key={edu.id}
                            className="education-item rounded-xl border border-purple-300/20 p-6"
                        >
                            <h3 className="mb-2 text-lg lg:text-2xl">
                                {edu.degree}
                            </h3>
                            <h4 className="text-lg font-medium lg:text-xl">
                                {edu.institution}
                            </h4>
                            <p className="text-sm lg:text-base">
                                {edu.duration}
                            </p>
                            <p className="mt-4">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
