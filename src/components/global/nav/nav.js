/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { SideNav, SideNavItem } from 'react-materialize';

import './nav.css';

import logo from '../../assets/logoMir.png';
import mirS from '../../assets/PhotoMirSmall.png';

const Nav = () => {
	return (
		<header className= 'navbar-fixed'>
			<nav className = 'color-nav row'>
				<div className= 'col s2  offset-m0 hide-on-large-only left valign-wrapper'>
					<SideNav
						trigger={
							<a><i class="material-icons">menu</i></a>}
						options={{ closeOnClick: true }}
						>
						<div className=' color-nav height-nav-side'>
							<img src={mirS} alt='Mirian' className='photo-mir-small'/>
							<SideNavItem divider />
							<p className='text-nav-side' >Mirian Ivonne García</p>
							<SideNavItem divider />
							<SideNavItem href='#' icon='home' className='color-nav-link'>
								<p className='text-nav-side'>Inicio</p>
							</SideNavItem>
							<SideNavItem href='#aboutme' icon='person' className='color-nav-link' > 
								<p className='text-nav-side'>Acerca de Mí</p>
							</SideNavItem>
							<SideNavItem href='#skills' icon='person' className='color-nav-link' > 
								<p className='text-nav-side'>Habilidades</p>
							</SideNavItem>
							<SideNavItem href='#projects' icon='work' className='color-nav-link'>
								<p className='text-nav-side'>Proyectos</p>
							</SideNavItem>
							<SideNavItem href='#contact' icon='contact_mail' className='color-nav-link'>
								<p className='text-nav-side'>Contacto</p>
							</SideNavItem>
						</div>						
					</SideNav>
				</div>

				<ul className='col s8 m5 l4 nav-movil'>
					<li><a href='#' > 
						<img src={logo} alt='Logo' className =' size'/>
					</a></li>
					<li><a href='#' className = 'mir'>Mir García
					</a></li>
				</ul>

				<ul className='col m7 l6 right hide-on-med-and-down'>
					<li><a href='#aboutme' className='text-nav truncate'>Acerca de Mí</a></li>
					<li><a href='#skills' className='text-nav truncate'>Habilidades</a></li>
					<li><a href='#projects' className='text-nav'>Proyectos</a></li>
					<li><a href='#contact' className='text-nav'>Contacto</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;