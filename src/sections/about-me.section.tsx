import { useEffect } from 'react';
import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Software Engineer (Full-Stack Developer)',
				place: 'Blue Ray',
				timePeriod: 'Oct 2025 – Present',
				description: (
					<ul>
						<li>
							Developed and maintained <strong>full-stack web applications</strong> using
							<strong> Laravel</strong>, <strong>React</strong>, and <strong>MySQL</strong>.
						</li>
						<li>
							Built scalable backend systems and optimized complex database queries,
							improving API performance by <strong>up to 40%</strong>.
						</li>
						<li>
							Designed secure REST APIs using <strong>Laravel Sanctum</strong> and
							implemented modern frontend interfaces.
						</li>
						<li>
							Developed internal <strong>admin dashboards</strong> and automated
							reporting systems that reduced manual work by <strong>20+ hours monthly</strong>.
						</li>
						<li>
							Collaborated in Agile teams using <strong>Git, GitHub, and Jira</strong>.
						</li>
					</ul>
				),
			},
			{
				title: 'Data Analyst',
				place: 'Orange Jordan',
				timePeriod: 'May 2025 – Sep 2025',
				description: (
					<ul>
						<li>
							Analyzed large-scale <strong>CRM datasets</strong> using advanced SQL queries.
						</li>
						<li>
							Built automated dashboards and reports to monitor business KPIs.
						</li>
						<li>
							Improved data accessibility and reporting efficiency for internal teams.
						</li>
					</ul>
				),
			},
			{
				title: 'Full-Stack Web Developer Trainee',
				place: 'Orange Coding Academy',
				timePeriod: 'Jan 2025 – May 2025',
				description: (
					<ul>
						<li>
							Intensive full-stack training program focusing on
							<strong> Laravel, React, MySQL, and REST APIs</strong>.
						</li>
						<li>
							Built responsive web applications with authentication systems
							and real-world project workflows.
						</li>
						<li>
							Worked with <strong>Git, Figma, Trello</strong>, and Agile development practices.
						</li>
					</ul>
				),
			},
			{
				title: 'IT Assistant & Data Entry',
				place: 'Zepter International Jordan',
				timePeriod: 'Feb 2024 – Dec 2024',
				description: (
					<ul>
						<li>
							Provided technical support for hardware and software issues.
						</li>
						<li>
							Maintained internal systems and assisted with company IT operations.
						</li>
						<li>
							Managed accurate data entry and digital records organization.
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
				title: 'Bachelor of Science in Computer Science',
				place: 'Hashemite University – Jordan',
				timePeriod: '2020 – 2024',
				description: (
					<ul>
						<li>
							Strong academic foundation in <strong>software engineering</strong>,
							<strong> algorithms</strong>, and <strong>database systems</strong>.
						</li>
						<li>
							Graduation project: <strong>Tasha Mobile Application</strong> for
							connecting volunteers with opportunities.
						</li>
					</ul>
				),
			},
		],
	},
];

export const AboutMe = () => {
	useEffect(() => {
		const items = document.querySelectorAll('.timeline-list');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{
				threshold: 0.15,
				rootMargin: '0px 0px -50px 0px',
			}
		);

		items.forEach((item) => observer.observe(item));

		return () => observer.disconnect();
	}, []);

	return (
		<section className='about-me container' id='about-me'>
			<div>
				<SectionTitle title='About' subTitle='ME' />
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hi, I'm <strong>Abdallah Syaj</strong>, a Software Engineer and Full-Stack Developer based in Amman, Jordan.
					</p>

					<p>
						I specialize in building scalable web applications and backend systems using
						<strong> Laravel</strong>, <strong>MySQL</strong>, and modern frontend technologies
						like <strong>React</strong> and <strong>JavaScript</strong>.
					</p>

					<p>
						In my professional experience, I've contributed to production systems used by
						hundreds of users, developed secure <strong>REST APIs</strong>, and built internal <strong>dashboards </strong>
						 that helped automate reporting and administrative workflows.
					</p>

					<p>
						My work focuses on writing <strong>clean</strong>, <strong>maintainable code</strong> and <strong>optimizing system
						performance</strong> — including improving database queries and backend logic to
						significantly reduce response times and manual processing tasks.
					</p>

					<p>
						I enjoy solving complex technical problems, designing efficient system
						architectures, and continuously improving my skills as a full-stack engineer.
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