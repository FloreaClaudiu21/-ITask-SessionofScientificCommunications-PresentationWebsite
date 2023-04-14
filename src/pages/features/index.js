import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Features = () => {
	const feat = [
		{
			name: "1. Posibilitatea de a crea și șterge sarcini",
			image:
				"https://cdn.dribbble.com/users/141880/screenshots/2506662/dailyui-083.gif",
		},
		{
			name: "2. Setarea nivelurilor de prioritate pentru sarcini",
			image:
				"https://lucidspark.zendesk.com/hc/article_attachments/4417921335444/get_started_-_use_context_toolbar.gif",
		},
		{
			name: "3. Interfață prietenoasă pentru utilizatori",
			image:
				"https://primerodigital.com.au/assets/images/static/pic-1.gif",
		},
		{
			name: "4. Performanță fără probleme și erori minime.",
			image:
				"https://i.gifer.com/origin/d7/d78180171389df27a5b638684c13a4f3.gif",
		},
		{
			name: "5. Primirea notificărilor prin email și fereastră de mesaje înainte de începerea unei sarcini programate",
			image:
				"https://cdn.dribbble.com/users/827277/screenshots/4493070/nls.gif",
		},
	];
	return (
		<HelmetProvider>
			<Container className="About-header">
				<Helmet>
					<meta charSet="utf-8" />
					<title>ITask | Caracteristici Principale</title>
				</Helmet>
				<Row className="mb-1 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">Caracteristici Principale</h1>{" "}
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<div className="mb-2 feat_items_ho">
					{feat.map((data, i) => {
						return (
							<div
								key={data.name}
								className="feat_holder"
							>
								<div className="feat_item">
									<img
										src={data.image}
										alt=""
									/>
									<div className="content">
										<p>0{i + 1}</p>
									</div>
								</div>
								<p>{data.name}</p>
							</div>
						);
					})}
				</div>
				<Row className="mb-5 mt-5 pt-md-3 center">
					<Link
						to="/about"
						style={{ display: "flex", justifyContent: "center" }}
					>
						<div
							id="button_h"
							className="ac_btn btn"
						>
							Despre Proiect
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

