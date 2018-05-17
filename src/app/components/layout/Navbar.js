import React from 'react';
import { Container, Header, Menu, SidebarPushable, Sidebar, Icon, Button, Responsive } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// css styles
import style from '../../css/style.css';

export default class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 1,
			sidebarOpened: false
		};
		this._handleMenuItemClick = this._handleMenuItemClick.bind(this);
		this._togleSideBar = this._togleSideBar.bind(this);
	}

	static get propTypes() {
		return {
			fixed: PropTypes.bool,
		};
	}

	_handleMenuItemClick(e, obj) {
		this.setState({ index: obj.index });
	}

	_togleSideBar() {
		const open = !this.state.sidebarOpened;
		this.setState({ sidebarOpened: open });
	}

	render() {
		const { index, sidebarOpened } = this.state;
		const { fixed } = this.props;
		const menuItems = [
			<Menu.Item key={0} className={style.navItem} index={1} onClick={this._handleMenuItemClick} as='a' active={index == 1} position='right'>Home</Menu.Item>,
			<Menu.Item key={1} className={style.navItem} index={2} onClick={this._handleMenuItemClick} as='a' active={index == 2} >Layouts</Menu.Item>,
			<Menu.Item key={2} className={style.navItem} index={3} onClick={this._handleMenuItemClick} as='a' active={index == 3} >Elements</Menu.Item>
		];
		const itemOnMobile =
			<Responsive maxWidth={767}>
				<SidebarPushable>
					<Sidebar as={Menu} secondary animation='push' direction='top' visible={sidebarOpened} inverted size={'large'}>
						{menuItems}
					</Sidebar>
					<Sidebar.Pusher style={{ minHeight: '40vh', padding: '20px 0' }}>
						<Menu inverted size={'large'} secondary>
							<Container>
								<Menu.Item header><Header inverted={!fixed} size='large' className={style.logo}>Magna</Header></Menu.Item>
								<Menu.Item position='right' onClick={this._togleSideBar}>
									<Button icon basic inverted>
										<Icon name='sidebar' />
									</Button>
								</Menu.Item>
							</Container>
						</Menu>
					</Sidebar.Pusher>
				</SidebarPushable>
			</Responsive>;
		const itemOnComputer =
			<Responsive minWidth={768}>
				<Menu secondary
					pointing={!fixed}
					inverted={!fixed}
					fixed={fixed ? 'top' : null}
					size={'large'}
					className={fixed ? style.fixedMenu : null}>
					<Container>
						<Menu.Item header><Header inverted={!fixed} size='large' className={style.logo}>Magna</Header></Menu.Item>
						{menuItems}
					</Container>
				</Menu>
			</Responsive>;

		return (
			<Container>
				{itemOnComputer}
				{itemOnMobile}
			</Container>
		);
	}
}
