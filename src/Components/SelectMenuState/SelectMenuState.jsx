import React from "react";
import { selectStateCreation } from "../../Utils/selectors";
import { onChangeState } from "./Actions";
import { useDispatch, useSelector } from "react-redux";
import { onToggleSActionToTrue } from "./Actions";
import { onToggleSActionToFalse } from "./Actions";
import { selectIsToggleSVisible } from "../../Utils/selectors";
import "./SelectMenuState.css";


/**
 * @description function rendering select feature for State (address) info
 */
function SelectMenuState(){

	/**
	 * @description const adding select's options
	 */
	const data = [
		"Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado",
		"Connecticut","Delaware","District Of Columbia","Federated States Of Micronesia",
		"Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa",
		"Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts",
		"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
		"New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota",
		"Northern Marana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico",
		"Rhode Islande","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
		"Virgin Islands","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
	];

	/**
	 * @description const in order to use useDispatch hook
	 */
	const dispatch = useDispatch();

	/**
	 * @description const in order to get states
	 */
	const state = useSelector(selectStateCreation);
	const isToggleSVisible = useSelector(selectIsToggleSVisible);


	/**
	 * @description actions in order to change state value and make toggle 
	 * visible or hidden
	 */
	const onChangeSToggleToVisible = () => {
		if (isToggleSVisible === true){dispatch(onToggleSActionToFalse());}else{
			dispatch(onToggleSActionToTrue());}
	};
	const onChangeStateField = (opt) => {
		dispatch(onChangeState(opt));
		dispatch(onToggleSActionToFalse());
	};

	return(
		<div className="select-menu">
			<div className="selected-option" onClick={onChangeSToggleToVisible}>
				<p className="text-selected">{state}</p>
			</div>
			{isToggleSVisible && (
				<ul className="options">
					{data.map((opt, index) => (
						<li key={index + "State"} onClick={() => onChangeStateField(opt)}>
							{opt}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default SelectMenuState;

