import { ReactNode } from 'react';
import { technologiesList } from './data/technologies';

export type TechnologyData = {
	color: string;
	bgColor: string;
	icon?: ReactNode;
};

export type Technology = (typeof technologiesList)[number]

export type PersonalProject = {
	name: string;
	description: string;
	stack: Technology[];
	images: string[];
	githubLink?: string;
	previewLink?: string;
};
