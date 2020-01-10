import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { repositoryContentsSelector } from "./repository.selectors"

export const RepositoryContentsTable = () => {
	const { name } = useParams()

	const contents = useSelector(state => repositoryContentsSelector(state, name))

	return (
		<TableContainer component={ Paper }>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align={ "center" }>Size</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						contents.map(row => (
							<TableRow key={ row.filename }>
								<TableCell
									component={ "th" }
									scope={ "row" }
								>
									{ row.filename }
								</TableCell>
								<TableCell align="center">{ row.size } B</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
