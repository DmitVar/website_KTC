import { Component } from "react";

import './app-item.css'

class AppItem extends Component{
	render(){
		return(
			<div>
				<h3>{this.props.title}</h3>
				<>{this.props.text}</>
			</div>
		)
	}
}
export default AppItem;