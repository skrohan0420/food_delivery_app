import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp.js';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
	return(
		<Router>
			<div>
				<Routes>
					<Route exact path='/' element={<Home/>}/>
					<Route exact path='/login' element={<Login/>}/>
					<Route exact path='/sign-up' element={<SignUp/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
