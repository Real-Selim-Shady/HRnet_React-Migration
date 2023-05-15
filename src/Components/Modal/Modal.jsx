import React from "react";
import { selectIsModalOpened } from "../../Utils/selectors";
import { useDispatch, useSelector } from "react-redux";
import { modalIsFalseAction } from "./Action";
import "./Modal.css";

function Modal(){

	const isModalOpened = useSelector(selectIsModalOpened);
	const dispatch = useDispatch();

	const closingModal = () => {
		dispatch(modalIsFalseAction());
	};

	if (isModalOpened) {
		document.body.classList.add("active-modal");
	}else{
		document.body.classList.remove("active-modal");
	}

	return (
		<>
			{isModalOpened && (
				<section className="modal">
					<div className="overlay">
						<div className="content">
							<h1>Employee Created!</h1>
							<button className="closing-modal" onClick={closingModal}>
                                x
							</button>
						</div>
					</div>
				</section>
			)}
		</>
	);
}

export default Modal;