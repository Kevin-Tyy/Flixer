import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faLocation,
	faMapMarkerAlt,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
	faDiscord,
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-flex">
					<div className="about">
						<h2>ABOUT US</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Omnis tempora fugiat
							tenetur architecto officia aliquid iusto
							ducimus earum facere eius quo quasi quidem
							deserunt, impedit voluptate unde
							reprehenderit magni molestias quas assumenda
							sapiente aut adipisci aliquam. Laudantium
							exercitationem ut sint ab deserunt
							consequatur officia ad quisquam. Iure,
							tempora laboriosam! Facere voluptate culpa
							excepturi et rerum mollitia? Eos vel aperiam
							quo!
						</p>
					</div>
					<div className="contacts">
						<h2 className="contact">KEEP IN TOUCH</h2>
						<p>
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								className="icons"
							/>{" "}
							&nbsp;&nbsp;<span>Address: </span>city,
							state, country
						</p>
						<p>
							<FontAwesomeIcon
								icon={faPhone}
								className="icons"
							/>{" "}
							&nbsp;&nbsp;<span>Phone: </span> +250 788 000
							000
						</p>
						<p>
							<FontAwesomeIcon
								icon={faEnvelope}
								className="icons"
							/>{" "}
							&nbsp;&nbsp;<span>Email: </span>{" "}
							info@infomail.com
						</p>
					</div>
				</div>
				<div className="social-icons">
					<Link to="https://www.linkedin.com/in/tuyizere-kevin-b58b89261/">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="icons"
							title="Follow Us On LinkedIn"
						/>
					</Link>
					<Link to="https://twitter.com/i/flow/">
						<FontAwesomeIcon
							icon={faTwitter}
							className="icons"
							title="Follow US On Twitter"
						/>
					</Link>
					<Link to="https://discord.com/login">
						<FontAwesomeIcon
							icon={faDiscord}
							className="icons"
							title="Join Our Discord Server"
						/>
					</Link>
					<Link to="https://www.instagram.com/">
						<FontAwesomeIcon
							icon={faInstagram}
							className="icons"
							title="Follow Us On Instagram"
						/>
					</Link>
					<Link to="">
						<FontAwesomeIcon
							icon={faGithub}
							className="icons"
							title="Visit our github repo and leave a star"
						/>
					</Link>
				</div>
				<div style={{ textAlign: "center" }}>
					&copy; FlickFlair @ 2023 - All rights reserved
				</div>
			</footer>
		</>
	);
};

export default Footer;
