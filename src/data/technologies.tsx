import CSS3Icon from '@/assets/svgr/CSS3Icon';
import CSharpIcon from '@/assets/svgr/CSharpIcon';
import DockerIcon from '@/assets/svgr/DockerIcon';
import HTML5Icon from '@/assets/svgr/HTML5Icon';
import JavaScriptIcon from '@/assets/svgr/JavaScriptIcon';
import SQLIcon from '@/assets/svgr/SQLIcon';
import TypeScriptIcon from '@/assets/svgr/TypeScriptIcon';
import { TechnologyData } from '@/types';

export const technologiesList = [
	'JavaScript',
	'TypeScript',
	'C#',
	'HTML',
	'CSS',
	'Docker',
	'SQL',
] as const;

export const technologies: { [key in (typeof technologiesList)[number]]: TechnologyData } = {
	'JavaScript': {
		icon: <JavaScriptIcon />,
		bgColor: 'bg-yellow-400/20',
		color: 'text-yellow-100',
	},
	'TypeScript': {
		icon: <TypeScriptIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'C#': {
		icon: <CSharpIcon />,
		bgColor: 'bg-purple-500/20',
		color: 'text-purple-100',
	},
	'HTML': {
		icon: <HTML5Icon />,
		bgColor: 'bg-orange-500/20',
		color: 'text-orange-100',
	},
	'CSS': {
		icon: <CSS3Icon />,
		bgColor: 'bg-cyan-500/20',
		color: 'text-cyan-100',
	},
	'Docker': {
		icon: <DockerIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'SQL': {
		icon: <SQLIcon />,
		bgColor: 'bg-green-500/20',
		color: 'text-green-100',
	},
};

export const mainTechnologies: { [key: string]: (typeof technologiesList)[number][] } = {
	'Front-end': ['HTML', 'CSS'],
	'Back-end': ['SQL'],
	'Languages': ['JavaScript', 'TypeScript', 'C#'],
	'Other': ['Docker'],
};
