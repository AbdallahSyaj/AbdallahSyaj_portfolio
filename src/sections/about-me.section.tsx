import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full-Stack Developer',
				place: 'Blue Ray Web Solutions',
				timePeriod: '2025 - Present',
				description: (
					<ul>
						<li>
							Contributed to enterprise-level systems for the <strong>Jordan Labor Observatory</strong>, focusing on data-driven dashboards and reporting tools that improved decision-making speed and data accuracy.
						</li>
						<li>
							Worked on internal systems for the <strong>Aqaba Special Economic Zone Authority</strong>, helping automate administrative workflows and reduce manual processing time.
						</li>
						<li>
							Built and maintained full-stack web applications using <strong>Laravel</strong>, <strong>Blade</strong>, and <strong>MySQL</strong>, with a strong focus on clean architecture and performance.
						</li>
						<li>
							Enhanced system performance and usability, resulting in faster page load times and improved overall productivity for end users.
						</li>
					</ul>
				),
			},
			{
				title: 'Software Developer Intern',
				place: 'Optimum Partners',
				timePeriod: '3 Months - 2025',
				description: (
					<ul>
						<li>
							Gained hands-on experience with <strong>Python (FastAPI)</strong> for building RESTful APIs and backend services.
						</li>
						<li>
							Worked with <strong>React</strong> and <strong>TypeScript</strong> to build small frontend projects, focusing on component-based architecture and type safety.
						</li>
						<li>
							Developed several small practice projects to understand full-stack integration between frontend and backend systems.
						</li>
						<li>
							Improved problem-solving skills and understanding of real-world development workflows, version control, and teamwork.
						</li>
					</ul>
				),
			},
			{
				title: 'IT Support',
				place: 'Zepter International Jordan',
				timePeriod: '2024 - 2025',
				description: (
					<ul>
						<li>
							Provided day-to-day <strong>IT support</strong> for employees, including hardware, software, and operating system issues.
						</li>
						<li>
							Assisted in setting up workstations, printers, and basic network configurations.
						</li>
						<li>
							Handled user support requests, troubleshooting common technical problems to ensure minimal downtime.
						</li>
						<li>
							Gained solid foundational knowledge in IT infrastructure and corporate technical support environments.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Full-Stack Development Program',
				place: 'Orange Coding Academy',
				timePeriod: '2025/1 - 2025/6',
				description: (
					<ul>
						<li>
							Completed an intensive full-stack development program with a strong focus on real-world projects.
						</li>
						<li>
							Worked with <strong>Laravel</strong>, <strong>JavaScript</strong>, <strong>React</strong>, databases, and applied <strong>OOP principles</strong> in practical scenarios.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Science in Computer Science (BSCS)',
				place: 'The Hashmate University in Jordan',
				timePeriod: '2020 - 2024',
				description: (
					<ul>
						<li>
							Built a strong foundation in software engineering, algorithms, databases, and problem-solving.
						</li>
						<li>
							Continuously expanding knowledge in advanced topics such as <strong>Docker</strong> and <strong>Domain-Driven Design (DDD)</strong>.
						</li>
					</ul>
				),
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section className='about-me container' id='about-me'>
			<div>
				<SectionTitle title='About' subTitle='ME' />
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hi, I'm <strong>Abdallah Syaj</strong>, a Full-Stack Developer based in Amman, Jordan.
					</p>
					<p>
						I build scalable and efficient web applications using <strong>Laravel</strong>, <strong>Blade</strong>, and modern frontend technologies. I have experience working on government and enterprise-level systems as well as internal dashboards.
					</p>
					<p>
						I’m passionate about clean code, performance optimization, and continuous learning. Currently, I’m expanding my skill set in <strong>Python</strong>, <strong>FastAPI</strong>, and modern development practices.
					</p>
				</div>

				<div>
					{timeline.map(({ items, title }, idx) => (
						<div className='timeline' key={idx}>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div className='timeline-list' key={idx}>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
