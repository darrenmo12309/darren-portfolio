'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import AboutMe from './components/AboutMe';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<AboutMe />
			<ProjectsSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
