import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const About = () => {
	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title>ITask | Despre Proiect</title>
				</Helmet>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">Despre proiect</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://camo.githubusercontent.com/4da9a09a609e7b9dcebf0193ff065249a88dd89fe9626ad059a9cceca6687d34/68747470733a2f2f692e6779617a6f2e636f6d2f36373161393033326665383534393761356537636264393431303631393965662e706e67"
								}
								alt=""
							/>
						</div>
					</Col>
					<Col
						lg="7"
						className="d-flex align-items-center"
					>
						<div>
							<p style={{ textIndent: "2rem", textAlign: "justify" }}>
								<span style={{ fontWeight: "bold" }}>ITASK</span> oferă o gamă
								largă de funcții care permit utilizatorilor să-și gestioneze
								sarcinile inteligent. Utilizatorii pot crea și șterge sarcini,
								grupa aceste sarcini în diferite categorii și seta niveluri de
								prioritate în funcție de importanța lor. Una dintre
								caracteristicile remarcabile ale sistemului este capacitatea de
								a primi notificări prin email și o fereastră de mesaje înainte
								de a începe o sarcină programată. Utilizatorii pot primi
								notificări cu un minut înainte de începerea sarcinii, precum și
								atunci când sarcina este marcată ca "în desfășurare". Această
								caracteristică este deosebit de utilă pentru persoanele care au
								multe sarcini de îndeplinit și au nevoie să rămână organizate.
								Sistemul de gestionare a sarcinilor a fost dezvoltat cu o
								interfață prietenoasă pentru utilizatori, astfel încât să fie
								ușor de utilizat și navigat. A fost testat riguros pentru a
								asigura performanță fără probleme și erori minime.{" "}
							</p>
						</div>
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="6">
						<p style={{ textIndent: "2rem", textAlign: "justify" }}>
							<span style={{ fontWeight: "bold" }}>ITASK</span> este un sistem
							de gestionare a sarcinilor complet și bine dezvoltat, care poate
							ajuta utilizatorii să își organizeze sarcinile și să le
							îndeplinească cu eficiență. Este o soluție excelentă pentru
							oricine caută o modalitate de a-și gestiona sarcinile zilnice
							într-un mod inteligent și eficient. În ansamblu, proiectul a fost
							o experiență de învățare excelentă pentru mine și colegii mei,
							permițându-ne să ne dezvoltam abilitățile în dezvoltarea de
							software și să ne îmbunătățescă abilitățile de rezolvare a
							problemelor.
						</p>
					</Col>
					<Col lg="6">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={
									"https://camo.githubusercontent.com/5beecd39bd01c78d4e40e1274ce94bc6cea84353ecb25f944ed230460b4dddd1/68747470733a2f2f692e6779617a6f2e636f6d2f37663233373332646261633163343566393832333763623431396636316638652e706e67"
								}
								alt=""
							/>
						</div>
					</Col>
				</Row>
				<Row className="mb-5 pt-md-1 pb-md-1 center">
					<Link
						to="/howitworks"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<div
							id="button_h"
							className="ac_btn btn"
						>
							Cum funcționează?
							<div className="ring one"></div>
							<div className="ring two"></div>
							<div className="ring three"></div>
						</div>
					</Link>
				</Row>
				<Row className="mt-2"></Row>
			</Container>
		</HelmetProvider>
	);
};

