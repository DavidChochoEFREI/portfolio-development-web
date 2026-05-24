import React from 'react';
import './Header.css';
import HeaderButton from '../HeaderButton/HeaderButton';

export default function Header() {
	return (
		<header className="header">
            <HeaderButton text="Home" onClick={() => alert('Home clicked!')} />
				
			<div className="header-sections">
				<HeaderButton text="About" onClick={() => alert('About clicked!')} />
				<HeaderButton text="Projects" onClick={() => alert('Projects clicked!')} />
				<HeaderButton text="Contact" onClick={() => alert('Contact clicked!')} />
			</div>
		</header>
	);
}
