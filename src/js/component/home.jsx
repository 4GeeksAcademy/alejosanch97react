import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";


//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<br>
			</br>
			<div className="container">
				<div className="row">
				<div className="col-12">
				<Jumbotron/> 
				</div>				
				</div>
				<br>
				</br>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.pinimg.com/236x/57/b4/1b/57b41b229b8705489c88f3370df29ea1.jpg"
							cardTitle=<strong>Ludwig Beethoven</strong>
							cardDescription="Compositor y pianista alemán, figura central del periodo clásico y del romanticismo temprano. Conocido por sus obras innovadoras y su virtuosismo al piano. Obras maestras: Sonatas para piano, Conciertos para piano, Sinfonías."
							buttonUrl="https://www.youtube.com/watch?v=wfF0zHeU3Zs"
							buttonLabel="Go to music"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.pinimg.com/236x/f0/0d/01/f00d01dae801407f0d3f26ce01e5ca00.jpg"
							cardTitle=<strong>Frederic Chopin</strong>
							cardDescription="Pianista y compositor polaco, considerado uno de los más grandes exponentes del romanticismo musical. Su música se caracteriza por su belleza melódica, su emotividad y su virtuosismo técnico. Obras maestras: Nocturnos, Estudios, Conciertos para piano."
							buttonUrl="https://www.youtube.com/watch?v=Gus4dnQuiGk"
							buttonLabel="Go to music"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.pinimg.com/236x/21/11/66/2111669b728ac0e6b0c7bb1e932dc9a6.jpg"
							cardTitle=<strong>Franz Liszt</strong>
							cardDescription="Pianista, compositor y director de orquesta húngaro, considerado uno de los pianistas más virtuosos de todos los tiempos. Compuso obras innovadoras que expandieron las posibilidades del piano. Obras maestras: Rapsodias húngaras, Concierto para piano n.º 1, Années de pèlerinage."
							buttonUrl="https://www.youtube.com/watch?v=ALqOKq0M6ho"
							buttonLabel="Go to music"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.pinimg.com/236x/3b/35/08/3b350864f3797a1e03b345f96f85341b.jpg"
							cardTitle=<strong>Sergei Rachmaninov</strong>
							cardDescription="Compositor, pianista y director de orquesta ruso, considerado uno de los últimos grandes representantes del romanticismo musical. Su música se caracteriza por su emotividad, su orquestación rica y sus melodías memorables. Obras maestras: Preludios para piano, Conciertos para piano, Rapsodia en azul."
							buttonUrl="https://www.youtube.com/watch?v=r-SZ_e5GWMc"
							buttonLabel="Go to music"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Copyright Your website - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;