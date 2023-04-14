import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ContactUs = () => {
	const [formData, setFormdata] = useState({
		email: "",
		name: "",
		message: "",
		loading: false,
		show: false,
		alertmessage: "",
		variant: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormdata({ loading: true });
		const templateParams = {
			from_name: formData.email,
			user_name: formData.name,
			message: formData.message,
			to_name: "floreaclaudiu128@gmail.com",
		};
		emailjs
			.send(
				"service_sw6bkxe",
				"template_wgn2s4d",
				templateParams,
				"HZejonULGAXIllPGU"
			)
			.then(
				(result) => {
					setFormdata({
						loading: false,
						alertmessage: "SUCCESS! Thank you for your messege",
						variant: "success",
						show: true,
					});
				},
				(error) => {
					setFormdata({
						alertmessage: `Faild to send!, ${error.text}`,
						variant: "danger",
						show: true,
					});
					document.getElementsByClassName("co_alert")[0].scrollIntoView();
				}
			);
	};

	const handleChange = (e) => {
		setFormdata({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<HelmetProvider>
			<Container>
				<Helmet>
					<meta charSet="utf-8" />
					<title>ITask | Contact</title>
				</Helmet>
				<Row className="mb-5 mt-3 pt-md-3">
					<Col lg="8">
						<h1 className="display-4 mb-4">Contactează-ne</h1>
						<hr className="t_border my-4 ml-0 text-left" />
					</Col>
				</Row>
				<Row className="sec_sp">
					<Col lg="12">
						<Alert
							variant={formData.variant}
							className={`rounded-0 co_alert ${
								formData.show ? "d-block" : "d-none"
							}`}
							onClose={() => setFormdata({ show: false })}
							dismissible
						>
							<p className="my-0">{formData.alertmessage}</p>
						</Alert>
					</Col>
					<Col
						lg="5"
						className="mb-5"
					>
						<h3 className="color_sec py-4">Get in touch</h3>
						<address>
							<strong>Email:</strong>{" "}
							<a href={`mailto:floreaclaudiu128@gmail.com`}>
								floreaclaudiu128@gmail.com
							</a>
							<br />
							<strong>Linkedin:</strong>{" "}
							<a href={"https://www.linkedin.com/in/claudiu-valentin-florea/"}>
								https://www.linkedin.com/in/claudiu-valentin-florea/
							</a>
						</address>
						<p>
							Vrei să ne lași părerea ta sau sugestii legate de îmbunătățirea
							aplicației? Folosește formularul din dreapta și trimite-ne un
							mesaj! :)
						</p>
						<Row className="pt-md-1 pb-md-1">
							<Link
								to="/"
								style={{ display: "flex", justifyContent: "start" }}
							>
								<div
									id="button_h"
									className="ac_btn btn"
								>
									Inapoi la Intro
									<div className="ring one"></div>
									<div className="ring two"></div>
									<div className="ring three"></div>
								</div>
							</Link>
						</Row>
					</Col>
					<Col
						lg="7"
						className="d-flex align-items-center"
					>
						<form
							onSubmit={handleSubmit}
							className="contact__form w-100"
						>
							<Row>
								<Col
									lg="6"
									className="form-group"
								>
									<input
										className="form-control"
										id="name"
										name="name"
										placeholder="Nume"
										value={formData.name || ""}
										type="text"
										required
										onChange={handleChange}
									/>
								</Col>
								<Col
									lg="6"
									className="form-group"
								>
									<input
										className="form-control rounded-0"
										id="email"
										name="email"
										placeholder="Email"
										type="email"
										value={formData.email || ""}
										required
										onChange={handleChange}
									/>
								</Col>
							</Row>
							<textarea
								className="form-control rounded-0"
								id="message"
								name="message"
								placeholder="Mesajul tau"
								rows="5"
								value={formData.message}
								onChange={handleChange}
								required
							></textarea>
							<br />
							<Row>
								<Col
									lg="12"
									className="form-group"
								>
									<button
										className="btn ac_btn"
										type="submit"
									>
										{formData.loading ? "Se trimite..." : "Trimite"}
									</button>
								</Col>
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
			<div className={formData.loading ? "loading-bar" : "d-none"}></div>
		</HelmetProvider>
	);
};
