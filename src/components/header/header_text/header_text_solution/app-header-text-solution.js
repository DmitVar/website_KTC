import { Component } from "react";

class AppHeaderTextSolution extends Component{
	constructor(props){
		super(props);
		this.state = {
			left: 60
		}
	}
	showBlockSolution = () =>{
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
		setTimeout(this.showBlockSolution, 4500) 
	}
	render(){
		let solutionBoxStyle = {
			left: `${this.state.left}vw`
		}
		return(
			<div style={solutionBoxStyle} className="solution__box">
            <div className="header-content__blind">
               <p>РЕШЕНИЯ</p>
            </div>
      	</div>
		)
	}
}
export default AppHeaderTextSolution