import React from 'react';
import { Container, Header, Segment, Visibility, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Navbar from '../layout/Navbar';

// css styles
import style from '../../css/style.css';

export default class PageHeader extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fixed: false
		};
		this.hideFixedMenu = this.hideFixedMenu.bind(this);
		this.showFixedMenu = this.showFixedMenu.bind(this);
	}

	static get propTypes() {
		return {
			mobile: PropTypes.bool,
		};
	}

	hideFixedMenu() {
		this.setState({ fixed: false });
	}
	showFixedMenu() {
		this.setState({ fixed: true });
	}
	render() {
		const { fixed } = this.state;
		return (
			<Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
				<Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
					<Navbar fixed={fixed} />
					<Container text className={style.heroHeader}>
						<Header as='h1'
							inverted
							content={'Magna Aliquam'} />
						<Header as='h2'
							content='Do whatever you want when you want to.'
							inverted />
						<Button inverted basic size='huge'>LEARN MORE</Button>
					</Container>
				</Segment>
			</Visibility>
		);
	}
}
