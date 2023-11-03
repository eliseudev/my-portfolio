import AWSIcon from '@/assets/svgr/AWSIcon';
import CSS3Icon from '@/assets/svgr/CSS3Icon';
import CSharpIcon from '@/assets/svgr/CSharpIcon';
import ChakraUIIcon from '@/assets/svgr/ChakraUIIcon';
import CypressIcon from '@/assets/svgr/CypressIcon';
import DockerIcon from '@/assets/svgr/DockerIcon';
import ElectronIcon from '@/assets/svgr/ElectronIcon';
import ExpressIcon from '@/assets/svgr/ExpressIcon';
import FigmaIcon from '@/assets/svgr/FigmaIcon';
import FirebaseIcon from '@/assets/svgr/FirebaseIcon';
import HTML5Icon from '@/assets/svgr/HTML5Icon';
import JavaScriptIcon from '@/assets/svgr/JavaScriptIcon';
import MUIIcon from '@/assets/svgr/MUIIcon';
import NextjsIcon from '@/assets/svgr/NextjsIcon';
import PrismaIcon from '@/assets/svgr/PrismaIcon';
import PythonIcon from '@/assets/svgr/PythonIcon';
import ReactIcon from '@/assets/svgr/ReactIcon';
import ReduxIcon from '@/assets/svgr/ReduxIcon';
import SQLIcon from '@/assets/svgr/SQLIcon';
import SupabaseIcon from '@/assets/svgr/SupabaseIcon';
import TailwindIcon from '@/assets/svgr/TailwindIcon';
import TypeScriptIcon from '@/assets/svgr/TypeScriptIcon';
import ViteIcon from '@/assets/svgr/ViteIcon';
import { TechnologyData } from '@/types';

export const technologiesList = [
	'JavaScript',
	'TypeScript',
	'C#',
	'Python',
	'HTML',
	'CSS',
	'Vite',
	'React',
	'Redux Toolkit',
	'MUI',
	'Chakra UI',
	'Tailwind CSS',
	'Next.js',
	'Firebase',
	'Supabase',
	'Cypress',
	'Prisma',
	'Docker',
	'Figma',
	'Netlify',
	'Recoil',
	'Zustand',
	'NextAuth.js',
	'React Email',
	'React Hook Form',
	'SQL',
	'Electron',
	'AWS',
	'Express',
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
	'Python': {
		icon: <PythonIcon />,
		bgColor: 'bg-yellow-500/20',
		color: 'text-yellow-100',
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
	'Vite': {
		icon: <ViteIcon />,
		bgColor: 'bg-purple-500/20',
		color: 'text-purple-100',
	},
	'React': {
		icon: <ReactIcon />,
		bgColor: 'bg-cyan-500/20',
		color: 'text-cyan-100',
	},
	'Redux Toolkit': {
		icon: <ReduxIcon />,
		bgColor: 'bg-purple-500/20',
		color: 'text-purple-100',
	},
	'MUI': {
		icon: <MUIIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'Chakra UI': {
		icon: <ChakraUIIcon />,
		bgColor: 'bg-teal-500/20',
		color: 'text-teal-100',
	},
	'Tailwind CSS': {
		icon: <TailwindIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'Next.js': {
		icon: <NextjsIcon />,
		bgColor: 'bg-gray-400/20',
		color: 'text-gray-100',
	},
	'Firebase': {
		icon: <FirebaseIcon />,
		bgColor: 'bg-amber-500/20',
		color: 'text-amber-100',
	},
	'Supabase': {
		icon: <SupabaseIcon />,
		bgColor: 'bg-emerald-500/20',
		color: 'text-emerald-100',
	},
	'Cypress': {
		icon: <CypressIcon />,
		bgColor: 'bg-green-500/20',
		color: 'text-green-100',
	},
	'Prisma': {
		icon: <PrismaIcon />,
		bgColor: 'bg-gray-400/20',
		color: 'text-gray-100',
	},
	'Docker': {
		icon: <DockerIcon />,
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'Figma': {
		icon: <FigmaIcon />,
		bgColor: 'bg-pink-500/20',
		color: 'text-pink-100',
	},
	'Netlify': {
		bgColor: 'bg-teal-500/20',
		color: 'text-teal-100',
	},
	'Recoil': {
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'Zustand': {
		bgColor: 'bg-gray-500/20',
		color: 'text-gray-100',
	},
	'NextAuth.js': {
		bgColor: 'bg-cyan-500/20',
		color: 'text-cyan-100',
	},
	'React Email': {
		bgColor: 'bg-sky-500/20',
		color: 'text-sky-100',
	},
	'React Hook Form': {
		bgColor: 'bg-pink-500/20',
		color: 'text-pink-100',
	},
	'SQL': {
		icon: <SQLIcon />,
		bgColor: 'bg-green-500/20',
		color: 'text-green-100',
	},
	'Electron': {
		icon: <ElectronIcon />,
		bgColor: 'bg-cyan-500/20',
		color: 'text-cyan-100',
	},
	'AWS': {
		icon: <AWSIcon />,
		bgColor: 'bg-orange-500/20',
		color: 'text-orange-200',
	},
	'Express': {
		icon: <ExpressIcon />,
		bgColor: 'bg-green-500/20',
		color: 'text-green-100',
	},
};

export const mainTechnologies: { [key: string]: (typeof technologiesList)[number][] } = {
	'Front-end': ['HTML', 'CSS', 'React', 'Next.js', 'JavaScript'],
	'Back-end': ['TypeScript', 'C#', 'SQL', 'Docker' ],
};
