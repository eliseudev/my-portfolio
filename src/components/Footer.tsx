import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
	return (
		<footer className="flex px-5 pt-16 pb-32 bg-slate-950">
			<div className="max-w-screen-xl mx-auto w-full text-slate-500 text-sm text-center">
				<div className="mb-4  gap-4">
					<a href="https://www.linkedin.com/in/eliseudev" target="_blank" className="mr-4">
						<Button size="icon" tabIndex={-1}>
							<Linkedin />
						</Button>
					</a>
					<a href="https://github.com/eliseudev" target="_blank">
						<Button size="icon" tabIndex={-1}>
							<Github />
						</Button>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
