import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react"

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);


        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            })
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in 
                    <span className="text-primary">
                        Touch
                    </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident.
                </p>

                <div className="grid grid-cols-s md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6 justify-center">

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail  className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a href="mailto:hello@gmail.com" className="text-muted-foreground hover:text-primary transistion-colors">
                                        hello@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone  className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a href="tel:+46706125011" className="text-muted-foreground hover:text-primary transistion-colors">
                                       +46 70 612 50 11 
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin  className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transistion-colors">
                                        Falkenberg, Halland, Sweden
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> 
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#linktolinkedin" target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block-text-sm font-medium mb-2"> Your Name</label>
                                <input type="text" 
                                        id="name"
                                        name="name" 
                                        required 
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="Albin Becevic..."/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block-text-sm font-medium mb-2"> Your Email</label>
                                <input type="email" 
                                        id="email"
                                        name="email"
                                        required 
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                        placeholder="john@gmail.com"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block-text-sm font-medium mb-2"> Your Message</label>
                                <textarea id="message"
                                        name="message" 
                                        required 
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Hello, I'd like to talk about..."/>
                            </div>

                            <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};