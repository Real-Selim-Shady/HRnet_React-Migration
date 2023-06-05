import React from "react";
import { selectDepartmentCreation } from "../../Utils/selectors";
import { onChangeDepartment } from "./Actions";
import { useDispatch, useSelector } from "react-redux";
import { onToggleDActionToTrue } from "./Actions";
import { onToggleDActionToFalse } from "./Actions";
import { selectIsToggleDVisible } from "../../Utils/selectors";
import "./SelectMenuDepartment.css";

/**
 * @description function rendering select feature for department info
 */
function SelectMenuDepartment(){

	/**
	 * @description const adding select's options
	 */
	const data = ["Engineering","Human Ressources","Legal","Marketing","Sales"];

	/**
	 * @description const in order to use useDispatch hook
	 */
	const dispatch = useDispatch();

	/**
	 * @description const in order to get states
	 */
	const department = useSelector(selectDepartmentCreation);
	const isToggleDVisible = useSelector(selectIsToggleDVisible);

	/**
	 * @description actions in order to change state value and make toggle 
	 * visible or hidden
	 */
	const onChangeToggleDToVisible = () => {
		if (isToggleDVisible === true){dispatch(onToggleDActionToFalse());}else{
			dispatch(onToggleDActionToTrue());}
	};
	const onChangeDepartmentField = (opt2) => {
		dispatch(onChangeDepartment(opt2));
		dispatch(onToggleDActionToFalse());
	};

	return(
		<div className="select-menu">
			<div className="selected-option" onClick={onChangeToggleDToVisible}>
				<p className="text-selected">{department}</p>
			</div>
			{isToggleDVisible && (
				<ul className="options">
					{data.map((opt2, index) => (
						<li key={index + "State"} onClick={() => onChangeDepartmentField(opt2)}>
							{opt2}
						</li>
					))}
				</ul>
			)}
		</div>
	);

}

export default SelectMenuDepartment;