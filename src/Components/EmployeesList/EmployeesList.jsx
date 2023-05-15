import React from "react";
import { useNavigate } from "react-router-dom";
import EmployeesTable from "../EmployeesTable/EmployeesTable";

function EmployeesList(){

	const navigate = useNavigate();

	return (
		<section>
			<h1>
                Employees List
			</h1>
			<EmployeesTable />
			<button onClick= {()=> navigate("/")}>
				back to new employee
			</button>
		</section>
	);

}

export default EmployeesList;