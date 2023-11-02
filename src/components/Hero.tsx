import Image from 'next/image';

const Hero = () => {
	return (
		<section className="min-h-[calc(100vh-7rem)] pt-12 lg:pt-0 flex flex-col w-full mt-[4.5rem] relative px-4 z-0 mb-10">
			<Image
				src="/img/bg-pattern.svg"
				alt="illustration"
				width={1920}
				height={1080}
				className="absolute inset-0 w-full h-full object-cover  opacity-80"
				priority
			/>

			<div className="my-auto z-10 max-w-screen-xl w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-20">
				<div>
					<span className="text-slate-400 text-3xl font-semibold block mb-4">Olá! 👋</span>
					<h1 className="text-slate-50 text-6xl font-bold mb-4">
						Sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-500">Eliseu</span>
					</h1>
					<h2 className="text-slate-300 font-semibold text-3xl max-w-lg">Desenvolvedor Web C#/.NET entre outras tecnologias</h2>
				</div>
				<div className="w-[min(100%_,360px)] lg:w-[600px] animate-hero">
					<Image src="/img/hero.png" alt="hero" width={650} height={848} className="h-auto lg:translate-x-[86px] lg:translate-y-[50px]" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
