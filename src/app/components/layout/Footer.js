import React from 'react';

// css styles
import style from '../../css/style.css';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className={style.container}>
					<div className={style.iconGroup}>
						{/* <span className={style.icon}>
							<Icons.FaTwitter size={24} color={'#636e72'} />
						</span>
						<span className={style.icon}>
							<Icons.FaFacebook size={24} color={'#636e72'} />
						</span>
						<span className={style.icon}>
							<Icons.FaGithub size={24} color={'#636e72'} />
						</span>
						<span className={style.icon}>
							<Icons.FaBitbucket size={24} color={'#636e72'} />
						</span>
						<span className={style.icon}>
							<Icons.FaTumblr size={24} color={'#636e72'} />
						</span> */}
					</div>
					<div className={style.links}>
						<a href={'#'}>FAQ</a>
						<a href={'#'}>Terms of Use</a>
						<a href={'#'}>Privacy</a>
						<a href={'#'}>Contact</a>
					</div>
					<p>&copy Copyright. All rights reserved. <span>Musta_Mohamed Development</span></p>
				</div>
			</footer>
		);
	}
}

