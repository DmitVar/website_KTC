import { Component } from "react";

import './app-partners.css'
class AppPartners extends Component{
	render(){
		return(
			<div className="partners__container">
				
				<div className="partners__blind">
					<h2>Партнеры</h2>
						<div className="horizont__line"></div>
						<div className="logo__box">
							<a href="https://www.rw.by/"><img className="bch__logo" src="image/Belarusian_Railway_Logo.png" alt="" /></a>
							<a href="https://betz.by/"><img className="bch__logo" src="image/logo_BETZ.svg" alt="" /></a>
							<a href="https://agat.by/"><img className="bch__logo" src="image/logo-AGAT.svg" alt="" /></a>
							<a href="https://www.tadviser.ru/"><img className="bch__logo" src="image/logo_TadViser.png" alt="" /></a>
							<a href="https://belint.by/"><img className="belint__logo" src="image/Logo-belint.png" alt="" /></a>
							<a href="https://www.bsut.by/"><img className="bch__logo" src="image/logo-colorBUTS.png" alt="" /></a>
							<a href="https://www.isc.by/isc/index.do"><img className="czi__logo" src="image/logoCZSI.gif" alt="" /></a>
							<a href="http://brrp.by/"><img className="bzdp__logo" src="image/logoBelzeldorproect.png" alt="" /></a>
							<a href="https://www.stadlerrail.com/ru/"><img className="stadler__logo" src="image/Logo-Stadler_Rail_logotype.png" alt="" /></a>
						</div>
				</div>
			</div>
		)
	}
}
export default AppPartners;