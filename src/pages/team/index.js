import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Team = () => {
	const team = [
		{
			name: "Florea Claudiu Valentin",
			link: "https://github.com/FloreaClaudiu21",
			profile: "https://avatars.githubusercontent.com/u/30389908?v=4",
		},
		{
			name: "George Paiu",
			link: "https://www.linkedin.com/in/paiu-george-43927275/",
			profile:
				"https://media.licdn.com/dms/image/C4E03AQHX22GpECzBDA/profile-displayphoto-shrink_400_400/0/1607424697830?e=1686787200&v=beta&t=Uf-l6USuFjizXsDKgD5LzDXBbPkpGAPuRJyQlVmcQCk",
		},
		{
			name: "Friguraș Stefan Răzvan",
			link: "https://www.instagram.com/stefan.raz/",
			profile:
				"https://i.ibb.co/GnGBGbt/287505280-412163667457879-895005614832188873-n.jpg",
		},
	];
	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title>ITask | Echipa</title>
				</Helmet>
				<Row className="mb-1 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">Echipa noastră</h1>{" "}
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<div className="mb-1 po_items_ho">
					{team.map((data, i) => {
						return (
							<div
								key={data.name}
								className="po_holder"
							>
								<p>{data.name}</p>
								<span>Grupa 610</span>
								<div className="po_item">
									<img
										src={data.profile}
										alt=""
									/>

									<div className="content">
										<a href={data.link}>Vizualizare profil</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<Row className="mb-5 mt-3 pt-md-3 center">
					<Link
						to="/features"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<div
							id="button_h"
							className="ac_btn btn"
						>
							Caracteristici principale ale proiectului
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

