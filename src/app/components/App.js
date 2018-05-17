import React from 'react';
import Footer from './layout/Footer';
import PageHeader from './sections/Header';
import { Container, Responsive } from 'semantic-ui-react';

// css style
// import style from '../css/style.css';

class App extends React.Component {
	render() {
		return (
			<Container fluid>
				<PageHeader />
				<Footer />
			</Container>
		);
	}
}
export default App;