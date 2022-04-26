import React, { useState } from 'react';
import LogIn from './components/LogIn';

const style = {
	wrapper: `bg-[#18191a] min-h-screen duration-[0.5s]`,
	homeWrapper: `flex`,
	center: `flex-1`,
	main: `flex-1 flex justify-center`,
	signupContainer: `flex items-center justify-center w-screen h-[70vh]`,
}


function App() {

	const [name, setName] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [url, setUrl] = useState('');

	return (
		<div className={style.wrapper}>

			{loggedIn ? (
				<div className={style.homeWrapper}>

				</div>
			) : (
				<div className={style.signupContainer}>
					<LogIn
						setLoggedIn={setLoggedIn}
						name={name}
						setName={setName}
						url={url}
						setUrl={setUrl}
					/>
				</div>
			)}
		</div>
	);
}

export default App;
