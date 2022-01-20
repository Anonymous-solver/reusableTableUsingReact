import React, { Component } from "react";
import Table from "./common/table.component";

class Students extends Component {
	state = {
		students: [
			{
				roll: 1,
				name: "Anik",
			},
			{
				roll: 2,
				name: "Rifat",
			},
		],
	};
	render() {
		const columns = [
			{
				label: "Roll",
				path: "roll",
				content: (item) => <th> {item}</th>,
			},
			{
				label: "Name",
				path: "name",
				content: (item) => <td> {item}</td>,
			},
		];
		return (
			<>
				<Table data={this.state.students} columns={columns}></Table>
			</>
		);
	}
}

export default Students;
