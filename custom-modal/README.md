# Install npm package

In the terminal of the folder containing node modules (not inside the folder node modules), use: npm i custom-modal_opc_sb_v1

## Import the component

Inside the component's file needing to use the custom modal, add: import Modal from "custom-modal_opc_sb_v1";

## Add openModal State, Setter and an opening condition

/*add these state and setter, 
then, add the setter condition turning to "true" (true as string) when 
you want to activate the modal*/
const [openedModal, setOpenedModal] = useState("false");
const closeModal = () => {
    setOpenedModal("false");
};

//exemple of opening condition
<button onClick={() => setOpenedModal("true")}>open modal</button>


## Add the modal component

{//add this content to add the modal
		(openedModal === "true") && <Modal 
		backgroundColor="" borderRadius="" borderColor="" closingIconBackgroundColor="" 
		width="" height=""
		fontAwesomeIconClass=""  fontAwesomeClosingIconClass=""
		customImgSrc="" customImgClass="" customImgAlt="" 
		titleFontSize="" textFontSize="" 
		titleFont="" textFont="" 
		textLineHeight=""
		titleContent="titre"
		textContent="blabla blablabla blou blou blou bla ble"
		titlePosition="" textPosition="" 
		overlay="" 
		modalHorizontalPosition="center"
		topSpace = "110%"
		timer = ""
		addBoxShadow = ""
		openedModalProp = {openedModal}
		onCloseModal= {closeModal}
	/>}


## Customize your Modal by changing the props value

backgroundColor = "" // add a color value (exemple: "#f2f2f2" or "grey")

borderRadius = "" // add a radius value (exemple: "5px" or "2%")

borderColor = "" // add a color value (exemple: "#f2f2f2" or "grey")

closingIconBackgroundColor = ""; // add a color value (exemple: "#f2f2f2" or "grey")

width = "" // add a width size (exemple: "200px")

height = "" // add a height size (exemple: "150px")

fontAwesomeIconClass = "" // add the fontAwesome icon class (exemple: "fa-sharp fa-light fa-magnifying-glass"). custom your icon in your css file using its class. Warning: you need a fontawesome package in your html file to make this customization working

fontAwesomeClosingIconClass = "" // add the fontAwesome icon class if you want to use an icon

customImgSrc = "" // add the img source if you want to use a picture

customImgClass ="" // add the img class, which will help you to customize it from your own css file

customImgAlt = ""  // add the img alt in order to have a good accessibility 

titleFontSize = "" // add a font-size (exemple: "2.17em" or "25px")

textFontSize = "" // add a font-size (exemple: "1.1em" or "20px")

titleContent = "" //add text content in the string (exemple: "title")

textContent = "" //add text content in the string (exemple: "text")

titleFont = "" //add the css rule in the string, after "font-family:" (exemple: "'Montserrat', sans-serif;"). Warning: you will also need to add the link to the police on your html file

textFont = "" //add the css rule in the string, after "font-family:" (exemple: "'Montserrat', sans-serif;"). Warning: you you will also need to add the link to the police on your html file

textLineHeight = "" // add a number (exemple: "2")

titlePosition = "" // add position of align-self (exemple: "right","center", "left") 

textPosition = "" // add position of align-self (exemple: "right","center", "left")

modalHorizontalPosition = "" // add the modal horizontal position (exemple: "right","center", "left")

topSpace = "" // add the modal vertical position by customizing the top space (exemple: "50%")

overlay = "" // add "no" if you don't want an overlay

timer = "" // add the number of seconds you want the modal to appears (exemple: "3")

addBoxShadow = "" // add "yes" if you want a box shadow

don't modify openedModalProp and onCloseModal
