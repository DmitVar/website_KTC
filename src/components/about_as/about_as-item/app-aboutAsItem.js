import { Component } from "react";


class AppAboutAsItem extends Component{
	render(){
		return(
			<div>
				<h3>{this.props.title}</h3>
				<>{this.props.text}</>
			</div>
		)
	}
}
export default AppAboutAsItem;