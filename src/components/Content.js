import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Map from "./Map";

const Content = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<div>
			{currentUser ? (
				<div>
					<Map />
				</div>
			) : null}
		</div>
	);
};

export default Content;
