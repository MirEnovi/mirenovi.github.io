import React from 'react';

import '../projects/projects.css';
import infoProjects from '../../../data/infoProjects';
import CardPjc from '../cardProject/cardProject';

// import Cipher from '../../assets/cipher.png';

const Projects = () => {

	const projectsCard = infoProjects.map((project,index) => {
		return (
			<div key={`card-${index}`} className='col s10 m6 l3 offset-s1'>
				<CardPjc
					title={project.title}
					link={project.link}
					code={project.code}
					info={project.info}
					tec={project.tec}
					image={project.image}
				/>
			</div>
		)
	})
	return (
		<section className='containter-fluid projects'>
			<div className='row'>
				<h4 className = 'title-project'>Mis Proyectos</h4>
			</div>
			<div className='row'>
				{ projectsCard }
			</div>
		</section>
	);
};

export default Projects;