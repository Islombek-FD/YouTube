import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
	const [state, setState] = React.useState(
		window.localStorage.getItem('theme') || 'light',
	);

	React.useEffect(() => {
		window.localStorage.setItem('theme', state);
	}, [state]);

	return (
		<Context.Provider value={{ state, setState }}>
			{children}
		</Context.Provider>
	);
}

export { Context, Provider };
