import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

/**
 * @description function rendering error component
 */
function Error(){


	/**
	 * @description const for using hooks
	 */
	const navigate = useNavigate();

	return (
		<div className="error-page">
			<section className="error-content">
				<h1 className="title">
						Error 404, page not found 
					<br/>chose an existing page to be redirected to
				</h1>
				<button className="redirect-button" onClick= {()=> navigate("/EmployeesList")}>
						Redirection to employee list
				</button>
				<button className="redirect-button" onClick= {()=> navigate("/")}>
						Redirection to new employee creation
				</button>
			</section>
		</div>
	);

}

export default Error;