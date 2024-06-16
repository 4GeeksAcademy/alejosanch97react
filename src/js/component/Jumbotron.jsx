
import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				target="_blank"
				rel="noreferrer"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
			
		</div>
	);
};
Jumbotron.defaultProps = {
	title: "A Warm Welcome",
	description: "Embárcate en un fascinante viaje a través del tiempo y las melodías de la mano de cuatro pianistas excepcionales que han dejado una huella imborrable en la historia de la música. Conoceremos a Ludwig van Beethoven, el genio revolucionario que trascendió el Clasicismo; a Frédéric Chopin, el poeta del piano que nos cautivará con su exquisita sensibilidad; a Franz Liszt, el virtuoso sin parangón que redefinió las posibilidades del instrumento; y a Sergei Rachmaninov, el último gran romántico que nos conmoverá con su profunda emotividad.",
	buttonLabel: "Action button",
	buttonURL: "https://github.com/breatheco-de/exercise-landing-page-with-react/blob/master/preview.gif"
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};