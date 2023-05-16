import React from "react";
import { selectIsModalOpened } from "../../Utils/selectors";
import { useDispatch, useSelector } from "react-redux";
import { modalIsFalseAction } from "./Action";
import "./Modal.css";
import { selectBackgroundColorValue,selectBorderRadius, selectBorderColor, 
	selectClosingIconBackgroundColor, selectWidth, selectHeight, selectIcon, selectTitleFontSize, 
	selectTextFontSize, selectTitlePolice, selectTextPolice, selectTextLineHeight, selectTitlePosition, 
	selectTextPosition, selectModalPosition, selectOverlay, 
	selectBackgroundScrollable    } from "../../Utils/selectors";


function Modal(){

	const isModalOpened = useSelector(selectIsModalOpened);
	const dispatch = useDispatch();

	const backgroundColorValue = useSelector(selectBackgroundColorValue);
	const borderRadius = useSelector(selectBorderRadius);
	const borderColor = useSelector(selectBorderColor);
	const closingIconBackgroundColor = useSelector(selectClosingIconBackgroundColor);
	const width = useSelector(selectWidth);
	const height = useSelector(selectHeight);
	const icon = useSelector(selectIcon);
	const titleFontSize = useSelector(selectTitleFontSize);
	const textFontSize = useSelector(selectTextFontSize);
	const titlePolice = useSelector(selectTitlePolice);
	const textPolice = useSelector(selectTextPolice);
	const textLineHeight = useSelector(selectTextLineHeight);
	const titlePosition = useSelector(selectTitlePosition);
	const textPosition = useSelector(selectTextPosition);
	const modalPosition = useSelector(selectModalPosition);
	const overlay = useSelector(selectOverlay);
	const backgroundScrollable = useSelector(selectBackgroundScrollable);

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