import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeesTable from "../EmployeesTable/EmployeesTable";
import "./EmployeesList.css";

/**
 * @description function rendering Employees List component
 */
function EmployeesList(){

	/**
	 * @description const in order to use UseNavigate hook
	 */
	const navigate = useNavigate();

	return (
		<section className="list-page-background">
			<div className="employees-list-page">
				<h1 className="title-list-page">
					Employees List
				</h1>
				<EmployeesTable />
				<button className="change-page-button" onClick= {()=> navigate("/")}>
					back to new employee
				</button>
			</div>
		</section>
	);

}

export default EmployeesList;