import React, { Component } from "react";
import Movies from "./components/movies.component";
import Nav from "./components/nav.component";
import Students from "./components/students.component";

class App extends Component {
	render() {
		return (
			<>
				<Nav></Nav>
				<Movies></Movies>
				<Students></Students>
			</>
		);
	}
}

export default App;
