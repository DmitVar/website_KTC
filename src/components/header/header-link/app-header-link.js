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
		console.log('show');
		let timer = setInterval(() =>{
			if(this.state.left < 0){
				this.setState(state => ({
				left: state.left + 1
				}));
			}else{
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