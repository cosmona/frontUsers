import logo from "../media/Logo.jpeg";
import "./cabecera.css";

function Cabecera() {
	return (
		<header className="Container_Cabecera">
			<img src={logo} className="Logo_Cabecera" alt="logo" />
		</header>
	);
}

export default Cabecera;
