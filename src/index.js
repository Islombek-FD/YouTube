import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as TokenProvider } from './Context/Authentication.jsx';
import { Provider as ThemeProvider } from './Context/Theme.jsx';
import { Provider as LanguageProvider } from './Context/Language.jsx';
import { Provider as MenuProvider } from './Context/Menu.jsx';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<TokenProvider>
				<ThemeProvider>
					<LanguageProvider>
						<MenuProvider>
							<App />
						</MenuProvider>
					</LanguageProvider>
				</ThemeProvider>
			</TokenProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
