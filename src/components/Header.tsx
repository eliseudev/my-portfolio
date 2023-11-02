import { Camera, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import Tooltip from './ui/custom-tooltip';

const Header = () => {
	return (
		<header className="bg-slate-900/80 backdrop-blur-md flex fixed left-0 top-0 right-0 z-10 px-4 py-4 ">
			<div className="flex items-center mx-auto max-w-screen-xl w-full gap-4">
				<span className="text-base text-slate-200 font-black">eliseu.dev</span>
				<nav className="ml-auto flex gap-2">
					<Tooltip title="LinkedIn">
						<a href="https://www.linkedin.com/in/eliseudev" target="_blank">
							<Button variant="ghost" size="icon" className="hover:bg-black/30" tabIndex={-1}>
								<Linkedin className="text-slate-300" />
							</Button>
						</a>
					</Tooltip>

					<Tooltip title="Github">
						<a href="https://github.com/eliseudev" target="_blank">
							<Button variant="ghost" size="icon" className="hover:bg-black/30" tabIndex={-1}>
								<Github className="text-slate-300" />
							</Button>
						</a>
					</Tooltip>
				</nav>
			</div>
		</header>
	);
};

export default Header;
