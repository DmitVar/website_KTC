import { Component } from "react";
import AppHeaderNavigetion from '../header-navigetion/app-header-navigetion';


class AppMenuNavigation extends Component{
	render(){
		return(
			<div className="menu__navigation">
            <div className="navigation__container">
               <div className="logo__box"></div>
					<AppHeaderNavigetion color={this.props.color}/>
         	</div>
			</div>
		)
	}
}
export default AppMenuNavigation