import { Component } from "react";
import AppCarriageEconomy from "./carriage_economy/app-carriage_economy";
import AppServiceItem from "./service_item/app-srevice_item";
import AppDangerousObjects from "./dangerous_objects/app-dangerous_objects";
import AppAutomation from "./automation/app-automation";
import AppInspection from "./inspection/app-inspection";
import AppNetwork from "./network/app-network";
import AppDiagnostics from "./diagnostics/app-diagnostics";
import './app-services.css';

let itemsArray = [
	{title: 'Предприятиям вагонного хозяйства', text: <AppCarriageEconomy />},
	{title: 'Техническое диагностирование и техническое освидетельствование потенциально опасных объектов', text: <AppDangerousObjects />},
	{title: 'Работы в области автоматики, телемеханики и связи', text: <AppAutomation />},
	{title: 'Инспекторский контроль продукции железнодорожного назначения, а также процесса её производства', text: <AppInspection />},
	{title: 'Обслуживание сетей передачи данных', text: <AppNetwork />},
	{title: 'Диагностика устройств электроснабжения', text: <AppDiagnostics />}
];

class AppServices extends Component{
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
	let inspectionStyle = {
		color: this.state.inspection
	}
	let netWorkStyle = {
		color: this.state.netWork
	}
	let diagnosticsStyle = {
		color: this.state.diagnostics
	}
		return(
				<div className="services__conteiner">
					<div className="services__menu">
						<div className="services-menu__blind">
							<h2>УСЛУГИ</h2>
							<ul>
								<li style={carriageStyle} onClick={() => this.onShowItem(0)}>Предприятиям вагонного хозяйства</li>
								<li style={dangerousObjectsStyle} onClick={() => this.onShowItem(1)}>Техническое диагностирование и техническое освидетельствование потенциально опасных объектов</li>
								<li style={automationStyle} onClick={() => this.onShowItem(2)}>Работы в области автоматики, телемеханики и связи</li>
								<li style={inspectionStyle} onClick={() => this.onShowItem(3)}>Инспекторский контроль продукции железнодорожного назначения, а также процесса её производства</li>
								<li style={netWorkStyle} onClick={() => this.onShowItem(4)}>Обслуживание сетей передачи данных</li>
								<li style={diagnosticsStyle} onClick={() => this.onShowItem(5)}>Диагностика устройств электроснабжения</li>
							</ul>
						</div>
					</div>
					<div className="services__place">
					<img src="image/servicesBack.jpeg" alt="" />
						<div className="service-place__blind">
							<AppServiceItem title={this.state.title} text={this.state.text}/>
						</div>
					</div>
				</div>
				
		)
	}
}
export default AppServices