import { BiLogoTypescript, BiLogoPhp } from 'react-icons/bi';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { FaBootstrap, FaNodeJs, FaReact, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiFastify, SiMui } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Backend & Core',
		items: [
			{
				title: 'PHP',
				icon: <BiLogoPhp color='rgb(79, 93, 149)' />,
				color: 'rgba(79, 93, 149, 0.6)',
			},
			{
				title: 'Laravel',
				icon: <FaLaravel color='rgb(255, 74, 73)' />,
				color: 'rgba(255, 74, 73, 0.6)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgba(104, 160, 99, 0.6)',
			},
			{
				title: 'Python (FastAPI)',
				icon: <SiFastify color='rgb(0, 180, 140)' />,
				color: 'rgba(0, 180, 140, 0.6)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
		],
	},
	{
		heading: 'Frontend & UI',
		items: [
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgba(97, 219, 251, 0.6)',
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgba(125, 17, 248, 0.75)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgba(6, 182, 212, 0.7)',
			},
			{
				title: 'Material UI',
				icon: <SiMui color='rgb(0, 127, 255)' />,
				color: 'rgba(0, 127, 255, 0.6)',
			},
		],
	},
	{
		heading: 'Databases',
		items: [
			{
				title: 'MySQL',
				icon: <DiMysql color='rgb(0, 122, 158)' />,
				color: 'rgba(0, 122, 158, 0.75)',
			},
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgba(0, 237, 100, 0.7)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
