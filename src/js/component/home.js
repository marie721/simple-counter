import React from "react";
import {SimpleCounter} from "./index"
import PropTypes from "prop-types"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<SimpleCounter/>
	);
}
