import { Component } from "react";


class AppServiceItem extends Component{
	render(){
		return(
			<div>
				<h3>{this.props.title}</h3>
				<>{this.props.text}</>
			</div>
		)
	}
}
export default AppServiceItem;