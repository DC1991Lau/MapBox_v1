import React from "react";
import "./styles.css";
import Header from "./components/Header";
import AuthContextProvider from "./context/AuthContext";
import Content from "./components/Content";

export default function App() {
	return (
		<AuthContextProvider>
			<div className="App">
				<Header />
				<Content />
			</div>
		</AuthContextProvider>
	);
}
