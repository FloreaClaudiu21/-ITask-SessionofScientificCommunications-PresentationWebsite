import "./style.css";
import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Home = () => {
	return (
		<HelmetProvider>
			<section
				id="home"
				className="home"
			>
				<Helmet>
					<meta charSet="utf-8" />
					<title>ITask | Intro</title>
				</Helmet>
				<div className="intro_sec d-block d-lg-flex align-items-center ">
					<div
						className="h_bg-image order-1 order-lg-2 h-100 "
						style={{
							backgroundSize: "100% 100%",
							backgroundPosition: "100% 0%",
							backgroundImage: `url(https://i.ibb.co/6rVw4dL/68747470733a2f2f692e6779617a6f2e636f6d2f363731613930333266653835343937613565376362643934313036313939.webp)`,
						}}
					></div>
					<div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
						<div className="align-self-center ">
							<div className="intro mx-auto">
								<img
									className="intro-img"
									src="https://www.bucuresteni.ro/upload/photo_b/2014-06/sigla_ura_2d_plina_large.png"
									alt=""
								/>
								<h2 className="intro-title mb-1x">ITASK</h2>
								<h1 className="fluidz-48 mb-1x">
									<Typewriter
										options={{
											strings: [
												"Sesiunea de comunicări ștințifice",
												"Limbaje de programare II",
												"Proiect realizat in C#",
											],
											loop: true,
											autoStart: true,
											deleteSpeed: 15,
										}}
									/>
								</h1>
								<p className="mb-1x">
									Gestionați-vă sarcinile inteligent, creați/ștergeți sarcini și
									primiți notificări pe adresa dvs. de email înainte ca
									evenimentul să înceapă.
								</p>
								<div className="intro_btn-action pb-2">
									<Link
										to="/team"
										className="text_2"
									>
										<div
											id="button_p"
											className="ac_btn btn "
										>
											Descoperă
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</Link>
								</div>
								<div>
									<div className="prof_holder">
										<div className="prof_up">
											<span>Profesor Coordonator</span>
											<p>Crișan Daniela Alexandra</p>
										</div>
										<div className="prof_item">
											<img
												src="https://www.rau.ro/wp-content/uploads/Crisan-Daniela.jpg"
												alt=""
											/>
											<div className="content">
												<a href="https://www.rau.ro/crisan-daniela-alexandra/">
													Vizualizare profil
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</HelmetProvider>
	);
};

