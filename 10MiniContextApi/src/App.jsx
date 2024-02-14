import UserContextProvider from './context/userContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
	return (
		<UserContextProvider>
			<h1>Context Api Understanding Project with Chai aur REact</h1>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<Login />
				<Profile />
			</div>
		</UserContextProvider>
	);
}

export default App;
