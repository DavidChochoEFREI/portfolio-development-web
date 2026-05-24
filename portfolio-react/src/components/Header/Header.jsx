import React from 'react';
import './Header.css';
import Button from '../Button/Button';

export default function Header() {
	return (
		<header className="header">
            <Button text="Home" onClick={() => alert('Home clicked!')} type="header" />
				
			<div className="header-sections">
				<Button text="About" onClick={() => alert('About clicked!')} type="header" />
				<Button text="Projects" onClick={() => alert('Projects clicked!')} type="header" />
				<Button text="Contact" onClick={() => alert('Contact clicked!')} type="header" />
			</div>
		</header>
	);
}
