import React from 'react';
import { useParams } from 'react-router-dom';

const Context = React.createContext();

function Provider({ children }) {
	const { id } = useParams();
	const [state, setState] = React.useState(id);

	// React.useEffect(() => {
	// 	fetch(process.env.REACT_APP_PLACEHOLDER_API + '/photos')
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setState(data.splice(0, 20));
	// 		});
	// }, []);

	return (
		<Context.Provider value={{ state, setState }}>
			{children}
		</Context.Provider>
	);
}

export { Context, Provider };
