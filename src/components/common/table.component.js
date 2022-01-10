import TableBody from "../table-body.component";
import TableHeader from "../table-header.component";

const Table = ({data, columns }) => {
	return ( 
		<table class="table">
          <TableHeader columns={columns}></TableHeader>
          <TableBody data={data} columns = {columns}></TableBody>
		</table>
	 );
}
 
export default Table;
