import React, { useEffect, useState } from "react";

//Funciones e interfaces
import { fetchGlobal } from "../Helpers/helpers";
import { ShowUsersProps, UserData } from "../Helpers/interfaces";

//material-ui
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import ModeTwoToneIcon from "@mui/icons-material/ModeTwoTone";
import AdjustTwoToneIcon from "@mui/icons-material/AdjustTwoTone";

//Estilos
import "./ShowUsers.css";

const ShowUsers: React.FC<ShowUsersProps> = (prompt) => {
	const { users, setUsers } = prompt;
	const [expandMenu, setExpandMenu] = useState(false);

	useEffect(() => {
		fetchGlobal("https://apiusers.fly.dev/users/", "GET", setUsers);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handelUp = () => {
		window.scrollBy({
			top: -document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	};

	const handleDespliegueMenu = () => {
		setExpandMenu((prevState) => !prevState);
	};

	return (
		<div>
			<div className="Cards_ShowUsers">
				{users &&
					users.map((user: UserData) => {
						return (
							<div className="UserCard_ShowUsers">
								<div className="Avatar_ShowUsers">
									<img
										alt="avatar"
										className="AvatarImg_ShowUsers"
										src={`https://robohash.org/${user._id}`}
									/>
								</div>
								<div className="WrapperMenu_ShowUsers">
									<div
										className={
											expandMenu
												? "MenuCardDelete_ShowUsers_Expand"
												: "MenuCardDelete_ShowUsers"
										}
									>
										<DeleteForeverTwoToneIcon
											fontSize="large"
											onClick={handleDespliegueMenu}
										/>
									</div>
									<div>
										{expandMenu ? (
											<div className="MenuCardExpand_ShowUsers">
												<AddCircleOutlineIcon
													fontSize="large"
													onClick={
														handleDespliegueMenu
													}
												/>
											</div>
										) : (
											<div className="MenuCardExpand_ShowUsers_Expand">
												<AdjustTwoToneIcon fontSize="large" />
											</div>
										)}
									</div>
									<div
										className={
											expandMenu
												? "MenuCardEdit_ShowUsers_Expand"
												: "MenuCardEdit_ShowUsers"
										}
									>
										<ModeTwoToneIcon
											fontSize="large"
											onClick={handleDespliegueMenu}
										/>
									</div>
								</div>
								<div className="Wrapper_ShowUsers Wrapper_Id">
									<div className="Title_ShowUsers">Id</div>
									<div className="Id_ShowUsers">
										{user._id}
									</div>
								</div>
								<div className="Wrapper_ShowUsers">
									<div className="Title_ShowUsers">
										Username
									</div>
									<div>{user.username}</div>
								</div>

								<div className="Wrapper_ShowUsers">
									<div className="Title_ShowUsers">Name</div>
									<div>{user.name}</div>
								</div>

								<div className="Wrapper_ShowUsers">
									<div className="Title_ShowUsers">Email</div>
									<div>{user.email}</div>
								</div>

								<div className="Wrapper_ShowUsers">
									<div className="Title_ShowUsers">
										Street
									</div>
									<div>{user.address.street}</div>
								</div>

								<div className="Wrapper_ShowUsers">
									<div className="Title_ShowUsers">City</div>
									<div>{user.address.city}</div>
								</div>

								<div className="Wrapper_ShowUsers">
									<div className="Title_ShowUsers">
										Country
									</div>
									<div>{user.address.country}</div>
								</div>

								<div className="Wrapper_ShowUsers">
									<div className="Title_ShowUsers">
										External_id
									</div>
									<div>{user.external_id}</div>
								</div>
							</div>
						);
					})}
			</div>
			<ArrowCircleUpIcon
				onClick={handelUp}
				fontSize="large"
				className="Up_ShowUsers"
			/>
		</div>
	);
};

export default ShowUsers;
