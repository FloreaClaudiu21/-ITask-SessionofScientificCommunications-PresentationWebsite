import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { Home } from "../pages/home";
import { Team } from "../pages/team";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { About } from "../pages/about";
import { Features } from "../pages/features";
import { ContactUs } from "../pages/contact";
import { Conclusion } from "../pages/conclusion";
import { HowItWorks } from "../pages/howitworks";

const AnimatedRoutes = withRouter(({ location }) => (
	<TransitionGroup>
		<CSSTransition
			key={location.key}
			timeout={{
				exit: 400,
				enter: 400,
			}}
			classNames="page"
			unmountOnExit
		>
			<Routes location={location}>
				<Route
					exact
					path="/"
					element={<Home />}
				/>
				<Route
					path="/team"
					element={<Team />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/features"
					element={<Features />}
				/>
				<Route
					path="/howitworks"
					element={<HowItWorks />}
				/>
				<Route
					path="/conclusion"
					element={<Conclusion />}
				/>
				<Route
					path="/contact"
					element={<ContactUs />}
				/>
				<Route
					path="*"
					element={<Home />}
				/>
			</Routes>
		</CSSTransition>
	</TransitionGroup>
));

function AppRoutes() {
	return (
		<div className="s_c">
			<AnimatedRoutes />
			<Socialicons />
		</div>
	);
}

export default AppRoutes;

