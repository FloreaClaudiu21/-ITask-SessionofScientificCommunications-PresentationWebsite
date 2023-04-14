import React from "react";
import "./style.css";
import { FaGithub } from "react-icons/fa";

export const Socialicons = (params) => {
	return (
		<div className="stick_follow_icon">
			<ul>
				<li>
					<a
						href={
							"https://github.com/FloreaClaudiu21/ITask-SessionofScientificCommunications-CSharpProjectSem2"
						}
					>
						<FaGithub />
					</a>
				</li>
			</ul>
			<p>Sesiunea de comunicări ștințifice</p>
		</div>
	);
};

