import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import { Container, GlobalStyle } from './styles/global';
import Header from './components/Header';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Container>
				<Header />
				<Routes />
			</Container>
		</BrowserRouter>
	);
}

export default App;
