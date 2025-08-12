import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectionSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle : Toggle to dark mode */}
            <ThemeToggle />
            {/* Background Effects : Background animations */}
            <StarBackground />
            {/* Navbar : Navigate around the page */}
            <Navbar />
            {/* Main Content */}
            <main>
              <HomeSection />
              <AboutSection /> 
              <SkillSection />
              <ProjectionSection />
              <ContactSection />
            </main>
            {/* Footer */}
        </div>
    );
}