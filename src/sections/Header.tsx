interface HeaderProps {
	refs: {
		contactRef: React.RefObject<HTMLElement>;
		projectsRef: React.RefObject<HTMLElement>;
		aboutRef: React.RefObject<HTMLElement>;
		homeRef: React.RefObject<HTMLElement>;
	};
}

export const Header: React.FC<HeaderProps> = ({ refs }) => {
	const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
		sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="flex justify-center items-center fixed top-3 w-full z-10">
			<nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
				<button
					onClick={() => scrollToSection(refs.homeRef)}
					className="nav-item"
				>
					Home
				</button>
				<button
					onClick={() => scrollToSection(refs.projectsRef)}
					className="nav-item"
				>
					Projects
				</button>
				<button
					onClick={() => scrollToSection(refs.aboutRef)}
					className="nav-item"
				>
					About
				</button>
				<button
					onClick={() => scrollToSection(refs.contactRef)}
					className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
				>
					Contact
				</button>
			</nav>
		</div>
	);
};
