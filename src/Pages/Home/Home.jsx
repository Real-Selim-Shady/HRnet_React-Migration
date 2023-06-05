/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
//import Header from "../../Components/Header/Header";
//import Footer from "../../Components/Footer/Footer";
import Error from "../Error/Error";
import NewEmployee from "../../Components/NewEmployee/NewEmployee";
import EmployeesList from "../../Components/EmployeesList/EmployeesList";


/**
 * @description Function rendering all routes 
 */
function App() { 

	return (
		<Routes>
			<Route path="/" element={
				<div>
					<NewEmployee />
				</div>
			}
			/>
			<Route path="/EmployeesList" element={
				<div>
					<EmployeesList />
				</div>
			}
			/>
			<Route path="/*" element={
				<div>
					<Error />
				</div>
			}
			/>
		</Routes>
	);
}

export default App;
