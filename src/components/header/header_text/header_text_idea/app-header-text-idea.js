import { Component } from "react";

class AppHeaderTextIdea extends  Component{
	constructor(props){
		super(props);
		this.state ={
			left: 60
		}
	}
	showBlockIdea = () =>{
		let timer = setInterval(() =>{
			this.setState(state => ({
				left: state.left - 1
			}));
			if(this.state.left < 3){
				clearInterval(timer)
			}
		}, 25)
	}
	componentDidMount(){
		setTimeout(this.showBlockIdea, 2500) 
	}
	render(){
		let ideaBoxStyle = {
			left: `${this.state.left}vw`
		}
		return(
			<div style={ideaBoxStyle} className="idea__box">
            <div className="header-content__blind">
               <p>ИДЕИ</p>
            </div>
         </div>
		)
	}
}
export default AppHeaderTextIdea