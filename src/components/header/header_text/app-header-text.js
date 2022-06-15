import { Component } from "react";

import AppHeaderTextIdea from './header_text_idea/app-header-text-idea';
import AppHeaderTextProject from "./header_text_project/app-header-text-project";
import AppHeaderTextSolution from "./header_text_solution/app-header-text-solution";

class AppHeaderText extends Component{
	constructor(props){
		super(props);
		this.state = {}
	}
	render(){
		return(
			<div className="slogan__text">
				<AppHeaderTextIdea />
				<AppHeaderTextProject />
				<AppHeaderTextSolution />
			</div>
		)
	}
}
export default AppHeaderText