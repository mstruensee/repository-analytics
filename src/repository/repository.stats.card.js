import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { repositoryStatsSelector } from "./repository.selectors"

export const RepositoryStatsCard = () => {
	const { name } = useParams()
	const stats = useSelector(state => repositoryStatsSelector(state, name))

	const {
		date,
		version,
		label,
		size,
		contentsLength,
	} = stats

	return (
		<List dense>
			<ListItem>
				<ListItemText
					primary={ "Version" }
					secondary={ version }
				/>
				<ListItemText
					primary={ "Created" }
					secondary={ date }
				/>
				<ListItemText
					primary={ "Size" }
					secondary={ `${ size } ${ label }` }
				/>
				<ListItemText
					primary={ "Total Files" }
					secondary={ contentsLength }
				/>
			</ListItem>
		</List>
	)
}
