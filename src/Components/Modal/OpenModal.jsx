import { useDispatch } from "react-redux";

import { modalIsTrueAction } from "./Action";

function OpenModal(){

	const dispatch = useDispatch();
	dispatch(modalIsTrueAction());
}

export default OpenModal;