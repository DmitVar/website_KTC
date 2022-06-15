import { Component } from "react";

class AppDvina extends Component{
	render(){
		return(
			<>
				<p>
					ТДМ «Двина» предназначена для сбора, анализа и мониторинга информации от 
					различных автоматизированных систем о состоянии устройствцентрализации и 
					напольного оборудования.
				</p>
				<p>
					Применение данной системы позволяет автоматизировать определение 
					нарушений нормальной работы и предотказных состояний устройств 
					ЖАТ, прогнозирование отказов устройств ЖАТ, контроль выполнения процесса 
					технического обслуживания устройств ЖАТ, протоколирование данных, характеризующих работу устройств ЖАТ.
				</p>
				<p>
					Функционально можно выделить четыре элемента: 
				</p>
				<p>- Модуль диагностики – программное обеспечение, встраиваемое на различных 
					рабочих местах (АРМ ДНЦ, АРМ графиста, АРМ ДСП, АРМ ШН, и т.д.), 
					формирующее сообщения об отклонениях от нормальной работы (отказах, 
					предотказных состояниях), о восстановлении нормальной работы, 
					о собственной работоспособности, ошибочных действиях персонала, передающее 
					сформированные сообщения на сервер диагностики.</p>
				<p>
					- Рабочая станция диагностики – программно-аппаратный комплекс принимающий 
					данные, характеризующие работу инспектируемых устройств, формирующий 
					протоколы этих данных за заданный промежуток времени, анализирующий эти 
					данные, формируют сообщения об отклонениях от нормальной работы (отказах, 
					предотказных состояниях), о восстановлении нормальной работы, о собственной 
					работоспособности, передают сформированные сообщения на сервер диагностики 
					(региональный или центральный).
				</p>
				<p>
					- Сервер диагностики – база данных, предназначенная для хранения в 
					формализованном виде поступивших сообщений, обеспечения структурированного 
					доступ к имеющимся сообщениям. 
				</p>
				<p>
					- Терминал диагностики – автоматизированное рабочее место, представляющее 
					пользователю доступ к данным сервера диагностики в различных формах.
				</p>
			</>
		)
	}
}
export default AppDvina