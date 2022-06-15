import { Component } from "react";

import AppHeaderLink from "./header-link/app-header-link";
import AppHeaderVerticalLine from "./header_vertical_line/app-header-vertical-line"
import AppHeaderText from "./header_text/app-header-text";

class AppHeader extends Component{
	constructor(props){
		super(props);
		this.state ={}
	}
	render(){
		return(
			<header>
				<div className="blind">
					<div className="header__content">
						<AppHeaderLink />
						<AppHeaderVerticalLine />
						<AppHeaderText />
					</div>
				</div>
			</header>
		)
	}
}
export default AppHeader