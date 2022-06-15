import { Component } from "react";

import './app-as-bug.css'

class AppAsBug extends Component{
	render(){
		return(
			<>
				<p>
					Система «Буг» предназначена для автоматического 
					отслеживания проследования поездами стыковых пунктов и 
					передачи в системы верхнего уровня сообщений о проследовании, 
					прибытии и отправлении поездов. Исходными данными для системы «Буг» 
					являются сообщения формы «266», создаваемые концентратором системы 
					автоматической идентификации информации от пунктов считывания линейного 
					уровня (КСАИЛ) при проследовании поездом напольного считывающего устройства (НСУ). 
				</p>
				<p>
					Обнаружение вновь сформированных сообщений формы «266» и их передача для дальнейшей 
					обработки серверу системы «Буг» осуществляется приложением «Концентратор САИПС», 
					устанавливаемым на КСАИЛ. Система «Буг» также использует сообщения АСОУП, поступающие 
					на сервер в регламенте со станций, прилегающих к стыковому пункту. Сообщения, пришедшие 
					из этих двух источников данных, подвергаются анализу на сервере, результатом которого 
					является формирование сообщений о проследовании, прибытии или отправлении поездов и отправку 
					их в систему АСОУП.
				</p>
				<p>
					Один из основных компонентов системы «Буг» – приложение «Терминал» – устанавливается на 
					рабочем месте диспетчера (оператора) и предназначен для контроля работы системы «Буг», 
					а также для корректировки сообщений о проследовании контролируемых стыковых пунктов. 
				</p>
			</>
		)
	}
}
export default AppAsBug