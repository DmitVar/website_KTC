import { Component } from "react";

import AppAboutAsItem from "./about_as-item/app-aboutAsItem";
import AppAboutAsHistory from "./aboutas-history/app-aboutAsHistory";

import './app-aboutAs.css';

let itemsArray = [
	{title: 'История создания, направления деятельности', text: <AppAboutAsHistory />},
	{title: 'Структура', text: ''},
	{title: 'Сертификаты', text: ''},
];

class AppAboutAs extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: itemsArray[0].title,
			text: itemsArray[0].text,
			carriage: '#4888E7',
			dangerousObjects: '#FFFFFF',
			automation: '#FFFFFF',
			inspection: '#FFFFFF',
			netWork: '#FFFFFF',
			diagnostics: '#FFFFFF',
		}
	}
	onShowItem = (id)=>{
		if(id === 0){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				carriage: '#4888E7',
				dangerousObjects: '#FFFFFF',
				automation: '#FFFFFF',
				inspection: '#FFFFFF',
				netWork: '#FFFFFF',
				diagnostics: '#FFFFFF',
			})
		}else if(id === 1){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				carriage: '#FFFFFF',
				dangerousObjects: '#4888E7',
				automation: '#FFFFFF',
				inspection: '#FFFFFF',
				netWork: '#FFFFFF',
				diagnostics: '#FFFFFF',
			})
		}else if(id === 2){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				carriage: '#FFFFFF',
				dangerousObjects: '#FFFFFF',
				automation: '#4888E7',
				inspection: '#FFFFFF',
				netWork: '#FFFFFF',
				diagnostics: '#FFFFFF',
			})
		}else if(id === 3){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				carriage: '#FFFFFF',
				dangerousObjects: '#FFFFFF',
				automation: '#FFFFFF',
				inspection: '#4888E7',
				netWork: '#FFFFFF',
				diagnostics: '#FFFFFF',
			})
		}else if(id === 4){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				carriage: '#FFFFFF',
				dangerousObjects: '#FFFFFF',
				automation: '#FFFFFF',
				inspection: '#FFFFFF',
				netWork: '#4888E7',
				diagnostics: '#FFFFFF',
			})
		}else if(id === 5){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				carriage: '#FFFFFF',
				dangerousObjects: '#FFFFFF',
				automation: '#FFFFFF',
				inspection: '#FFFFFF',
				netWork: '#FFFFFF',
				diagnostics: '#4888E7',
			})
		}
	}
	render(){
	let carriageStyle ={
		color: this.state.carriage
	};
	let dangerousObjectsStyle ={
		color: this.state.dangerousObjects
	};
	let automationStyle ={
		color: this.state.automation
	};
		return(
				<div className="about-as__conteiner">
					<div className="about-as__menu">
						<div className="about-menu__blind">
							<h2>О НАС</h2>
							<ul>
								<li style={carriageStyle} onClick={() => this.onShowItem(0)}>Наша история</li>
								<li style={dangerousObjectsStyle} onClick={() => this.onShowItem(1)}>Структура</li>
								<li style={automationStyle} onClick={() => this.onShowItem(2)}>Сертификаты</li>
							</ul>
						</div>
					</div>
					<div className="about__place">
						<img src="image/history_background.jpg" alt="" />
						<div className="about-place__blind">
							<AppAboutAsItem title={this.state.title} text={this.state.text}/>
						</div>
					</div>
				</div>
				
		)
	}
}
export default AppAboutAs