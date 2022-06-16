import { Component } from "react";
import AppItem from "./app_item/app-item";
import AppDcNeman from "./dc-neman/app-dc-neman";
import AppAsBug from "./as-bug/app-as-bug";
import AppGidNeman from "./gid-neman/app-gid-neman";
import AppDvina from "./dvina/app-dvina";
import AppDisna from "./disna/app-disna";
import AppDnepr from "./dnepr/app-dnepr";
import AppBerezina from "./berezina/app-berezina";
import AppSAPOD from "./sapod/app-SAPOD";
import AppASKBD from "./askbd/askbd";
import AppOskz from "./sokz/app-oskz";
import AppMetrologist from "./metrologist/app-metrologist";

import './app-products.css';


let itemsArray = [
	{title: 'МИКРОПРОЦЕССОРНАЯ СИСТЕМА ДИСПЕТЧЕРСКОЙ ЦЕНТРАЛИЗАЦИИ «НЕМАН»', text: <AppDcNeman />},
	{title: 'АВТОМАТИЗИРОВАННАЯ СИСТЕМА ВЕДЕНИЯ ГРАФИКА ИСПОЛНЕННОГО ДВИЖЕНИЯ «НЕМАН»', text: <AppGidNeman />},
	{title: 'АВТОМАТИЗИРОВАННАЯ СИСТЕМА «БУГ»', text: <AppAsBug />},
	{title: 'СИСТЕМА ТЕХНИЧЕСКОЙ ДИАГНОСТИКИ И МОНИТОРИНГА «ДВИНА»', text: <AppDvina />},
	{title: 'СИСТЕМА КОНТРОЛЯ ТЕХНИЧЕСКОГО	СОСТОЯНИЯ СРЕДСТВ АВТОБЛОКИРОВКИ	«ДИСНА»', text: <AppDisna />},
	{title: 'МИКРОПРОЦЕССОРНАЯ ЦЕНТРАЛИЗАЦИЯ СТРЕЛОК И СИГНАЛОВ «ДНЕПР»', text: <AppDnepr />},
	{title: 'ИНФОРМАЦИОННО-ИЗМЕРИТЕЛЬНАЯ СИСТЕМА «БЕРЕЗИНА»', text: <AppBerezina />},
	{title: 'СИСТЕМЫ АВТОМАТИЗАЦИИ ПОДГОТОВКИ И ОФОРМЛЕНИЯ ДОКУМЕНТОВ ГРУЗОВОЙ И КОММЕРЧЕСКОЙ ОТЧЕТНОСТИ', text: <AppSAPOD />},
	{title: 'КОМПЛЕКСНАЯ СИСТЕМА АВТОМАТИЗИРОВАННОГО КОНТРОЛЯ БЕЗОПАСНОСТИ ДВИЖЕНИЯ', text: <AppASKBD />},
	{title: 'СИСТЕМА ОБУЧЕНИЯ И КОНТРОЛЯ ЗНАНИЙ', text: <AppOskz />},
	{title: 'АВТОМАТИЗИРОВАННАЯ СИСТЕМА УПРАВЛЕНИЯ МЕТРОЛОГИЧЕСКИМ ОБЕСПЕЧЕНИЕМ “МЕТРОЛОГ”', text: <AppMetrologist />},
];

class AppProducts extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: itemsArray[0].title,
			text: itemsArray[0].text,
			dcneman: '#4888E7',
			gitneman: '#FFFFFF',
			bug: '#FFFFFF',
			dvina: '#FFFFFF',
			disna: '#FFFFFF',
			dnepr: '#FFFFFF',
			berezina: '#FFFFFF',
			sapod: '#FFFFFF',
			mds: '#FFFFFF',
			OKZ: '#FFFFFF',
			metrolog: '#FFFFFF',

		}
	}
	onShowItem = (id)=>{
		if(id === 0){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#4888E7',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 1){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#4888E7',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 2){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#4888E7',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 3){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#4888E7',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 4){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#4888E7',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 5){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#4888E7',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 6){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#4888E7',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 7){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#4888E7',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 8){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#4888E7',
				OKZ: '#FFFFFF',
				metrolog: '#FFFFFF',
			})
		}else if(id === 9){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#4888E7',
				metrolog: '#FFFFFF',
			})
		}else if(id === 10){
			this.setState({
				title: itemsArray[id].title,
				text: itemsArray[id].text,
				dcneman: '#FFFFFF',
				gitneman: '#FFFFFF',
				bug: '#FFFFFF',
				dvina: '#FFFFFF',
				disna: '#FFFFFF',
				dnepr: '#FFFFFF',
				berezina: '#FFFFFF',
				sapod: '#FFFFFF',
				mds: '#FFFFFF',
				OKZ: '#FFFFFF',
				metrolog: '#4888E7',
			})
		}
	}
	render(){
	let dcnemanStyle ={
		color: this.state.dcneman
	};
	let gitnemanStyle ={
		color: this.state.gitneman
	};
	let bugStyle ={
		color: this.state.bug
	};
	let dvinaStyle = {
		color: this.state.dvina
	}
	let disnaStyle = {
		color: this.state.disna
	}
	let dneprStyle = {
		color: this.state.dnepr
	}
	let berezinaStyle ={
		color: this.state.berezina
	}
	let sapodStyle ={
		color: this.state.sapod
	}
	let mdsStyle = {
		color: this.state.mds
	}
	let okzStyle = {
		color: this.state.OKZ
	}
	let metrologStyle = {
		color: this.state.metrolog
	}
		return(
				<div className="products__conteiner">
					<div className="products__menu">
						<div className="products-menu__blind">
							<h2>ПРОДУКЦИЯ</h2>
							<ul>
								<li style={dcnemanStyle} onClick={() => this.onShowItem(0)}>Система диспетчерской централизации “Неман”</li>
								<li style={gitnemanStyle} onClick={() => this.onShowItem(1)}>Система ведения графика исполненного движения “Неман”</li>
								<li style={bugStyle} onClick={() => this.onShowItem(2)}>Система автоматической идентификации подвижного состава “Буг”</li>
								<li style={dvinaStyle} onClick={() => this.onShowItem(3)}>Система технической диагностики и мониторинга “Двина”</li>
								<li style={disnaStyle} onClick={() => this.onShowItem(4)}>Система контроля технического состояния средств автоблокировки “Дисна”</li>
								<li style={dneprStyle} onClick={() => this.onShowItem(5)}>Система микропроцессорной централизации “Днепр”</li>
								<li style={berezinaStyle} onClick={() => this.onShowItem(6)}>Информационно-измерительная система “Березина”</li>
								<li style={sapodStyle} onClick={() => this.onShowItem(7)}>Система автоматизации подготовки и оформления документации грузовой коммерческой отчетности “САПОД”</li>
								<li style={mdsStyle} onClick={() => this.onShowItem(8)}>Комплексная система автоматизированного контроля безопасности движения АСК БД</li>
								<li style={okzStyle} onClick={() => this.onShowItem(9)}>Система обучения и контроля знаний “ОКЗ”</li>
								<li style={metrologStyle} onClick={() => this.onShowItem(10)}>Автоматизированная система управления метрологическим обеспечением “Метролог”</li>
							</ul>
						</div>
					</div>
					<div className="products__place">
						<AppItem title={this.state.title} text={this.state.text}/>
					</div>
				</div>
				
		)
	}
}
export default AppProducts