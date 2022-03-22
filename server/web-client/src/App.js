/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Header from './components/Header.jsx';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
	const [socket, setSocket] = useState(null);
	// eslint-disable-next-line no-lone-blocks
	{
		// useEffect(() => {
		// 	const newSocket = io('http://localhost:5500');
		// 	setSocket(newSocket);
		// 	return () => {
		// 		newSocket.close();
		// 	};
		// }, [setSocket]);
		// if (socket) {
		// 	socket.on('new user', data => {
		// 		console.log(
		// 			`A new user has joined the chat.\nThere are now ${data.usersInRoom} users in the chat.`,
		// 		);
		// 	});
		// 	socket.on('new message', data => {
		// 		console.log(`${data.timeStamp} ${data.username}: ${data.message}`);
		// 	});
		// 	socket.on('disconnected', data => {
		// 		console.log(
		// 			`A user has left the chat.\nThere are now ${data.usersInRoom} users in the chat.`,
		// 		);
		// 	});
		// }
	}

	return (
		<div className='bg-[#282c34] min-h-screen font-mono flex flex-col items-center text-white p-8'>
			<Header />
			<WelcomeScreen />
		</div>
	);
}

export default App;
