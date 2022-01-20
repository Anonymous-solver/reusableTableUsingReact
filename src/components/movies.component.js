import React, { Component } from "react";
import Table from "./common/table.component";

class Movies extends Component {
	state = {
		movies: [
			{
				id: 1,
				first_name: "Mark1",
				last_name: "Otto",
				handle: "@otto",
			},
			{
				id: 2,
				first_name: "Mark2",
				last_name: "Otto",
				handle: "@otto",
			},
			{
				id: 3,
				first_name: "Mark3",
				last_name: "Otto",
				handle: "@otto",
			},
		],
	};
	render() {
		const columns = [
			{
				label: "ID",
				path: "id",
				content: (item) => <td> {item}</td>,
			},
			{
				label: "First Name",
				path: "first_name",
				content: (item) => <td> {item}</td>,
			},
			{
				label: "Last Name",
				path: "last_name",
				content: (item) => <td> {item}</td>,
			},
			{
				label: "Handle",
				path: "handle",
				content: (item) => <td> {item}</td>,
			},
		];
		return (
			<>
				<Table data={this.state.movies} columns={columns}></Table>
			</>
		);
	}
}

export default Movies;
