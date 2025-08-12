import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";

const projects = [
    {
        id: 1, 
        title:"project1", 
        description: "Projects1", 
        image: "", 
        tags:["tag1", "tag2"],
        demoUrl: "#",
        githubUrl:"#",
    },
    {
        id: 1, 
        title:"project2", 
        description: "Projects2", 
        image: "", 
        tags:["tag1", "tag2"],
        demoUrl: "#",
        githubUrl:"#",
    },
    {
        id: 1, 
        title:"project3", 
        description: "Projects3", 
        image: "", 
        tags:["tag1", "tag2"],
        demoUrl: "#",
        githubUrl:"#",
    },
];

export const ProjectionSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured 
                    <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2x1 mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transistion-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                            
                                <h3 className="text-xl font-semifold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transistion-colors duration-300" target="_blank">
                                        <ExternalLink /> 
                                        </a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transistion-colors duration-300" target="_blank">
                                        <GitBranch /> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https//:github.com/albinbecevic" target="_blank">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );

};