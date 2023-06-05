import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";

/**
 * @description Function making modal component working
 */
function Modal(props){
	/**
	 * @description get all props
	 */
	let backgroundColor = props.backgroundColor;
	let borderRadius = props.borderRadius;
	let borderColor = props.borderColor;
	let closingIconBackgroundColor = props.closingIconBackgroundColor;
	let fontAwesomeClosingIconClass = props.fontAwesomeClosingIconClass;
	let width = props.width;
	let height = props.height;
	let fontAwesomeIconClass = props.fontAwesomeIconClass;
	let customImgSrc = props.customImgSrc;
	let customImgClass = props.customImgClass;
	let customImgAlt = props.customImgAlt;
	let titleFontSize = props.titleFontSize;
	let textFontSize = props.textFontSize;
	let titleFont = props.titleFont;
	let textFont = props.textFont;
	let textLineHeight = props.textLineHeight;
	let titleContent = props.titleContent;
	let textContent = props.textContent;
	let titlePosition = props.titlePosition;
	let textPosition = props.textPosition;
	let overlay = props.overlay;
	let openedModal = props.openedModalProp;
	const onCloseModal = props.onCloseModal;
	let modalHorizontalPosition = props.modalHorizontalPosition;
	let timer = props.timer;
	let addBoxShadow = props.addBoxShadow;
	let topSpace = props.topSpace;
	let boxShadowLvl = "";

	/**
	 * @description those conditions command modal's behavior
	 */
	if(backgroundColor === ""){
		backgroundColor = "#f2f2f2";
	}
	if(borderRadius === ""){
		borderRadius = "5px";
	}
	if(borderColor === ""){
		borderColor = "transparent";
	}
	if(closingIconBackgroundColor === ""){
		closingIconBackgroundColor = "black";
	}
	if(width === ""){
		width = "200px";
	}
	if(height === ""){
		height = "200px";
	}
	if(titleFontSize === ""){
		titleFontSize = "20px";
	}
	if(textFontSize === ""){
		textFontSize = "15px";
	}
	if(textLineHeight === ""){
		textLineHeight = "20px";
	}
	if(titlePosition ===""){
		titlePosition = "center";
	}else if (titlePosition ==="left"){
		titlePosition = "baseline";
	}else if (titlePosition ==="center"){
		titlePosition = "center";
	}else if (titlePosition ==="right"){
		titlePosition = "end";
	}else if (titlePosition !=="" && titlePosition !== "left" && titlePosition !== "center" && titlePosition !== "right"){
		titlePosition = "center";
	}
	if(textPosition ===""){
		textPosition = "center";
	}else if (textPosition ==="left"){
		textPosition = "baseline";
	}else if (textPosition ==="center"){
		textPosition = "center";
	}else if (textPosition ==="right"){
		textPosition = "end";
	}else if (textPosition !=="" && textPosition !== "left" && textPosition !== "center" && textPosition !== "right"){
		textPosition = "center";
	}

	if(modalHorizontalPosition ===""){
		modalHorizontalPosition = "center";
	}else if (modalHorizontalPosition ==="left"){
		modalHorizontalPosition = "baseline";
	}else if (modalHorizontalPosition ==="center"){
		modalHorizontalPosition = "center";
	}else if (modalHorizontalPosition ==="right"){
		modalHorizontalPosition = "end";
	}else if (modalHorizontalPosition !=="" && modalHorizontalPosition !== "left" && modalHorizontalPosition !== "center" && modalHorizontalPosition !== "right"){
		modalHorizontalPosition = "center";}
	
	if(addBoxShadow !== "yes"){
		boxShadowLvl = "0";
	}else{
		boxShadowLvl = "0 2px 10px rgb(16 10 10 / 20%)";
	}

	if(topSpace === ""){
		topSpace="50%";
	}


	/**
	 * @description this condition blocks scrolls while modal is displayed
	 */
	if (openedModal === "true") {
		document.body.classList.add("active-modal");
	}else{
		document.body.classList.remove("active-modal");
	}


	if (onCloseModal === "true") {
		document.body.classList.add("active-modal");
	}

	let timerId = null;

	const closingModal = () => {
		document.body.classList.remove("active-modal");
		onCloseModal();
	};
  
	/**
	 * @description these functions set the timer setting if one is activated
	 */
	const startTimer = () => {
		if (timer !== "") {
			const timerNumber = parseInt(timer);
			const timerSec = parseInt(timerNumber) * 1000;
			timerId = setTimeout(closingModal, timerSec);
		}
	};
	const stopTimer = () => {
		if (timerId) {
			clearTimeout(timerId);
		}
	};
	if (openedModal === "true") {
		startTimer();
	} else {
		stopTimer();
	}



	return (

		<>
			<section className="modal"
				style = {{
					placeContent: modalHorizontalPosition
				}}
			>
				<div className="modal-box">
					<div className="content"
						style={{
							borderRadius: borderRadius,
							border: "solid",
							borderColor: borderColor,
							backgroundColor: backgroundColor,
							width: width,
							height: height,
							boxShadow: boxShadowLvl,
							top: topSpace,
						}}
					>
						{(fontAwesomeIconClass !== "") && <i className={fontAwesomeIconClass} ></i>}
						{(customImgSrc !== "") && <img src={customImgSrc} className={customImgClass} alt={customImgAlt} ></img>}
						{(titleContent !== "") &&
								<h1 
									style={{
										fontSize: titleFontSize,
										fontFamily: titleFont,
										alignSelf: titlePosition,
									}}
								>{titleContent}</h1>
						}
						{(textContent !== "") &&
								<p
									style={{
										fontSize: textFontSize,
										fontFamily: textFont,
										alignSelf: textPosition,
										lineHeight: textLineHeight,
									}}
								>{textContent}</p>
						}
						<button 
							className="closing-modal" 
							onClick={closingModal}
							style={{
								backgroundColor: closingIconBackgroundColor,
							}}
						>
							{(fontAwesomeClosingIconClass !== "") && <i className={fontAwesomeClosingIconClass}></i>}
							{(fontAwesomeClosingIconClass === "") && <p className="closing-cross">x</p>}
						</button>
					</div>
				</div>
				{(overlay === "") && <div className="overlay" style={{background: "rgba(45,45,45,0.5)"}}></div>}
				{(overlay === "no") && <div className="overlay" style={{background: "transparent"}}></div>}
			</section>
		</>
	);
}

Modal.propTypes = {
	backgroundColor: PropTypes.string,
	borderRadius: PropTypes.string,
	borderColor: PropTypes.string,
	closingIconBackgroundColor: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	fontAwesomeIconClass: PropTypes.string,
	fontAwesomeClosingIconClass: PropTypes.string,
	customImgSrc: PropTypes.string,
	customImgClass: PropTypes.string,
	customImgAlt: PropTypes.string,
	titleFontSize: PropTypes.string,
	textFontSize: PropTypes.string,
	titleFont: PropTypes.string,
	textFont: PropTypes.string,
	textLineHeight: PropTypes.string,
	titleContent: PropTypes.string,
	textContent: PropTypes.string,
	titlePosition: PropTypes.string,
	textPosition: PropTypes.string,
	overlay: PropTypes.string,
	modalHorizontalPosition: PropTypes.string,
	openedModalProp: PropTypes.string,
	onCloseModal: PropTypes.func,
	timer: PropTypes.string,
	addBoxShadow: PropTypes.string,
	topSpace: PropTypes.string,
};

export default Modal;
