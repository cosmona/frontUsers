import React, { Fragment, useEffect, useState } from "react";

// Componentes, funciones e interfaces
import {
	Cabecera,
	ModalNew,
	OptionsBar,
	ShowUsers,
	ModalMsg,
} from "./components";
import { fetchGlobal } from "./Helpers/helpers";
import { UserData } from "./Helpers/interfaces";

// Estilos
import "./App.css";

function App() {
	const [openModalNew, setOpenModalNew] = useState<boolean>(false);
	const [openModalMsg, setOpenModalMsg] = useState<boolean>(false);
	const [textModalMsg, setTextModalMsg] = useState<string>("");
	const [users, setUsers] = useState<UserData[]>([]);

	useEffect(() => {
		fetchGlobal(
			"https://apifantasticfy.onrender.com/users/",
			"GET",
			setUsers
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [users && users.length]);

	return (
		<Fragment>
			{openModalNew && (
				<ModalNew
					setUsers={setUsers}
					setOpenModalNew={setOpenModalNew}
					setOpenModalMsg={setOpenModalMsg}
					setTextModalMsg={setTextModalMsg}
				/>
			)}
			{openModalMsg && (
				<ModalMsg
					setOpenModalMsg={setOpenModalMsg}
					textModalMsg={textModalMsg}
				/>
			)}
			<div className="App">
				<Cabecera />
				<main>
					<article className="Article_App">
						<h1>Users ({users && users.length})</h1>
						<OptionsBar
							setUsers={setUsers}
							setOpenModalNew={setOpenModalNew}
							setOpenModalMsg={setOpenModalMsg}
							setTextModalMsg={setTextModalMsg}
						/>
						<ShowUsers users={users} setUsers={setUsers} />
					</article>
				</main>
				<footer className="Footer_App">
					<p>&copy; Iñaki Perez 2024.</p>
				</footer>
			</div>
		</Fragment>
	);
}

export default App;
