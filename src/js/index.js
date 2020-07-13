//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import PropTypes from "prop-types";

//import your own components
export function SimpleCounter(props) {
	return (
		<div className="bigCounter d-flex">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

//render your react application
let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
