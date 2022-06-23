/* eslint-disable no-unused-expressions */
import { Component } from "react";

class AppHeaderVerticalLine extends Component{
	constructor(props){
		super(props);
		this.state = {
			opacity: 0,
		}
	}
	showVerticalLine = () =>{
		let timer = setInterval(() =>{
			if(this.state.opacity < 1){
				this.setState(state => ({
					opacity: state.opacity + 0.1
				}));				
			}else{
				clearInterval(timer)
			}
		}, 150)
	}
	componentDidMount(){
		setTimeout(this.showVerticalLine, 500);
	}
	render(){
		const varticalBlockStyle = {
			opacity: this.state.opacity
		};
		return <div style={varticalBlockStyle} className="vertical__block"></div>
	}
}
export default AppHeaderVerticalLine