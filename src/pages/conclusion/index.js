import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Conclusion = () => {
	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title>ITask | Concluzie</title>
				</Helmet>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">Care este concluzia?</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="5">
						<div className="sec_sp_holder">
							<img
								className="sec_sp_img"
								src={"https://i.gifer.com/7M8M.gif"}
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
								<span style={{ fontWeight: "bold" }}>În concluzie</span>,
								sistemul ITASK este o soluție excelentă pentru cei care doresc
								să-și gestioneze sarcinile inteligent și eficient. Sistemul
								oferă o gamă largă de funcții, inclusiv crearea și ștergerea
								sarcinilor, gruparea acestora în categorii și setarea
								nivelurilor de prioritate. De asemenea, sistemul este dotat cu o
								caracteristică unică de notificare prin email și fereastră de
								mesaje, care vă ajută să nu ratați niciodată o sarcină
								importantă. Chiar dacă există câteva dezavantaje minore, precum:
								1. Nu este disponibil pentru utilizare pe mai multe dispozitive
								simultan, deoarece necesită instalare locală.{" "} 2. Necesită o anumită
								cantitate de timp și efort pentru a învăța să-l utilizezi în mod
								eficient. Acestea nu afectează performanța generală a
								sistemului. În plus, sistemul a fost dezvoltat cu o interfață
								prietenoasă pentru utilizator, astfel încât să fie ușor de
								utilizat și navigat. Încurajăm publicul să încerce sistemul
								ITASK și să descopere cum îi poate ajuta să-și gestioneze
								sarcinile într-un mod mai inteligent și organizat. Sperăm că
								sistemul ITASK vă va fi util și vă va aduce beneficii
								semnificative în viața de zi cu zi.{" "}
							</p>
						</div>
					</Col>
				</Row>
				<Row className="mb-5 pt-md-1 pb-md-1 center">
					<Link
						to="/contact"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<div
							id="button_h"
							className="ac_btn btn"
						>
							Contactează-ne
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

