import { useState } from "react";
import { cn } from "../lib/utils"

const skills = [
    // Frontend
    {name: "HTML/CSS", level: 95, category: "Frontend"},
    {name: "JavaScript", level: 95, category: "Frontend"},
    {name: "TypeScript", level: 95, category: "Frontend"},
    {name: "Angular", level: 95, category: "Frontend"},
    {name: "React", level: 95, category: "Frontend"},

    // Backend
    {name: "C#", level: 95, category: "Backend"},
    {name: "Java", level: 95, category: "Backend"},
    {name: ".NET", level: 95, category: "Backend"},
    {name: "Java EE", level: 95, category: "Backend"},

    // Machine Learning
    {name: "Python", level: 95, category: "Machine Learning"},
    {name: "Pytorch", level: 95, category: "Machine Learning"},
    {name: "Pandas", level: 95, category: "Machine Learning"},
]

const categories = ["All", "Frontend", "Backend", "Machine Learning"];

export const SkillSection = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory);

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} className={cn("px-5 py-2 rounded-full transistion-colors duration-300 capitalize",
                                                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )} 
                        onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 round-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}/>   
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground"> {skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};