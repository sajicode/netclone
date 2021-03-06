import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header className="header">
		<nav className="header__nav">
			<div className="header__brand">
				<NavLink to="/" exact={true} className="header__title">
					<h1>NetClone</h1>
				</NavLink>
			</div>

			<div className="header__site-nav">
				<NavLink to="/" activeClassName="is-active" className="header__link" exact={true}>
					Home
				</NavLink>
				<NavLink to="/popular" activeClassName="is-active" className="header__link">
					Popular
				</NavLink>
				<NavLink to="/playing" activeClassName="is-active" className="header__link">
					Now Playing
				</NavLink>
				<NavLink to="/top" activeClassName="is-active" className="header__link">
					Top Rated
				</NavLink>
			</div>
			<div className="dropdown">
				<div className="dropdown-label">Menu</div>
				<div className="dropdown-menu">
					<ul className="submenu">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/popular">Popular</a>
						</li>
						<li>
							<a href="/playing">Now Playing</a>
						</li>
						<li>
							<a href="/top">Top Rated</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
