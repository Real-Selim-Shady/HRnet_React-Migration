import { useDispatch } from "react-redux";

import { modalIsTrueAction } from "./Action";

function OpenModal(){

	const dispatch = useDispatch();
	//const isModalOpened = useSelector(selectIsModalOpened);
	dispatch(modalIsTrueAction());
}

export default OpenModal;