import { mainTechnologies, technologies } from '@/data/technologies';
import Subtitle from './Subtitle';

const Technologies = () => {
	return (
		<section className="w-full px-4 mb-16">
			<div className="mx-auto max-w-screen-xl w-full ">
				<Subtitle text="Tecnologias" />
				<div className="flex flex-col">
					{Object.keys(mainTechnologies).map(k => (
						<>
							<h6 className="text-md text-slate-500 mt-4 mb-2">{k}</h6>
							<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
								{mainTechnologies[k].map(
									x =>
										Boolean(technologies[x]) && (
											<li key={x} className="flex items-center gap-4 p-3 rounded-md bg-gradient-to-r from-slate-800 to-purple-900/10 ">
												<span className={`[&>svg]:w-5 [&>svg]:aspect-square p-2 rounded-lg ${technologies[x].bgColor}`}>
													{technologies[x].icon}
												</span>
												<span className="text-slate-200 text-sm">{x}</span>
											</li>
										)
								)}
							</ul>
						</>
					))}
				</div>
			</div>
		</section>
	);
};

export default Technologies;
