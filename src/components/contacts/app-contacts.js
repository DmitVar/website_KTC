import { Component } from "react";

import './app-contacts.css'
class AppContacts extends Component{
	render(){
		return(
			<div className="contacts__container">
				
				<div className="contacts__blind">
					<h2>КОНТАКТЫ</h2>
						<div className="horizont__line"></div>
						<div className="contacts__box">
							<div className="image__box"><img src="image/address_icon.svg" alt="" /></div>
							<div className="text__box">
								<p><span>Адрес</span></p>
								<p> Республика Беларусь, г.Минск, 1-ый Твердый переулок 6</p>
								</div>
						</div>
						<div className="contacts__box">
							<div className="image__box"><img src="image/phone.svg" alt="" /></div>
							<div className="text__box">
								<p><span>Телефоны</span></p>
								<p>+375(17) 225 40 98</p>
								<p>+375(17) 225 29 30</p>
								</div>
						</div>
						<div className="contacts__box">
							<div className="image__box"><img src="image/mail.svg" alt="" /></div>
							<div className="text__box">
								<p><span>Email</span></p>
								<p>ktc@mnsk.rw.by</p>
								</div>
						</div>
					<p className="footer">&copy; Конструкторско-технический центр Белорусской железной дороги 2022</p>
				</div>
				
			</div>
		)
	}
}
export default AppContacts;