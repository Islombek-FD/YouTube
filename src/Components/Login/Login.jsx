import './Login.scss';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';

import LogoIcon from '../../Components/Lib/LogoIcon.jsx';

import useToken from '../../Hooks/useToken.js';

const useStyles = makeStyles({
	loginButton: {
		padding: '18px !important',
		textAlign: 'center',
		borderRadius: '76px !important',
	},
});

function Login() {
	const classes = useStyles();
	const [setToken] = useToken(true);

	return (
		<>
			<div className='login'>
				<div className='login__inner'>
					<LogoIcon />

					<h2 className='login__heading'>Log in to YouTube</h2>

					<form
						className='login__form'
						onSubmit={(evt) => {
							evt.preventDefault();
							const { email, password } = evt.target.elements;

							setToken({
								email: email.value,
								password: password.value,
							});
						}}>
						<TextField
							type='text'
							fullWidth
							label='Phone number, email address'
							name='email'
							autoComplete='off'
						/>

						<TextField
							type='password'
							fullWidth
							label='Password'
							name='password'
							autoComplete='off'
						/>

						<Button
							className={classes.loginButton}
							type='submit'
							variant='contained'>
							Log In
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
