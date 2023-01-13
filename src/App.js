import {
	ColorModeContext,
	useMode,
} from './theme';
import {
	CssBaseline,
	ThemeProvider,
} from '@mui/material';
import {
	Route,
	Routes,
} from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
// import Bar from './scenes/Bar';
// import Form from './scenes/Form';
// import Line from './scenes/Line';
// import Pie from './scenes/Pie';
// import FAQ from './scenes/FAQ';
// import Geography from './scenes/Geography';
// import Calendar from './scenes/Calendar';

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider
			value={colorMode}
		>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<Sidebar />
					<main className='content'>
						<Topbar />
						<Routes>
							<Route
								path='/'
								element={<Dashboard />}
							/>
							<Route
								path='/team'
								element={<Team />}
							/>
							<Route
								path='/contacts'
								element={<Contacts />}
							/>
							<Route
								path='/invoices'
								element={<Invoices />}
							/>
							{/* <Route
								path='/Form'
								element={<Form />}
							/> */}
							{/* <Route
								path='/Bar'
								element={<Bar />}
							/> */}
							{/* <Route
								path='/Pie'
								element={<Pie />}
							/> */}
							{/* <Route
								path='/Line'
								element={<Line />}
							/> */}
							{/* <Route
								path='/FAQ'
								element={<FAQ />}
							/> */}
							{/* <Route
								path='/Geography'
								element={<Geography />}
							/> */}
							{/* <Route
								path='/Calendar'
								element={<Calendar />}
							/> */}
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
