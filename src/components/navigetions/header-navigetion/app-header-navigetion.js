import { Component } from "react";
import AppMenuButtons from '../../buttons/menu-buttons/app-menu-buttons'

class AppHeaderNavigetion extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return(
			<nav>
				<AppMenuButtons color={this.props.color} name='ГЛАВНАЯ' />
				<AppMenuButtons name='ПРОДУКЦИЯ' />
				<AppMenuButtons name='УСЛУГИ' />
				<AppMenuButtons name='О НАС' />
				<AppMenuButtons name='ПАРТНЕРЫ' />
				<AppMenuButtons name='КОНТАКТЫ' />
			</nav>
		)
	}
}
export default AppHeaderNavigetion