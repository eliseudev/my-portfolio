import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';

export default function Home() {
	return (
		<main className="min-h-screen min-w-screen flex flex-col pb-20">
			<Hero />
			<Projects/>
			<Technologies />
		</main>
	);
}

