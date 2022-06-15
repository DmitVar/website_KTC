/* eslint-disable no-undef */
import {Component} from "react"

class AppHeaderLink extends Component{
	constructor(props){
		super(props);
		this.state ={
			left: -60
		}
		
	}
	showHeaderLink = () =>{
		let timer = setInterval(() =>{
			this.setState(state => ({
				left: state.left + 1
			}));
			if(this.state.left > -3){
				clearInterval(timer)
			}
		}, 25)
	}
	componentDidMount(){
		setTimeout(this.showHeaderLink, 1800) 
	}
	render(){
		let h1Style = {
			left: `${this.state.left}vw`
		};
		return(
			<div className="conpany-name"><h1 style={h1Style}>КОНСТРУКТОРСКО ТЕХНИЧЕСКИЙ ЦЕНТР</h1></div>
		)
	}
}
export default AppHeaderLink