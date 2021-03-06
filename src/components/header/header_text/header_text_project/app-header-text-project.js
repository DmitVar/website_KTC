import { Component } from "react";

class AppHeaderTextProject extends Component{
	constructor(props){
		super(props);
		this.state ={
			left: 60
		}
	}
	showBlockProject = () =>{
		let timer = setInterval(() =>{
			if(this.state.left > 0){
				this.setState(state => ({
					left: state.left - 1
				}));
			}else{
				clearInterval(timer)
			}
		}, 25)
	}
	componentDidMount(){
		setTimeout(this.showBlockProject, 3500) 
	}
	render(){
		let projectBoxStyle ={
			left: `${this.state.left}vw`
		}
		return(
			<div style={projectBoxStyle} className="project__box">
				<div className="header-content__blind">
					<p>ПРОЕКТЫ</p>
				</div> 
  			</div>
		)
	}
}
export default AppHeaderTextProject