import React from 'react';

import { Context } from '../Context/Menu.jsx';

function useAside(setterOnly) {
	const ctx = React.useContext(Context);

	return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState];
}

export default useAside;
