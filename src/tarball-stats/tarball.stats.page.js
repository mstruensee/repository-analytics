import Grid from "@material-ui/core/Grid"
import React from "react"
import { RepositoryContentsTable } from "../repository/repository.contents.table"
import { RepositoryStatsCard } from "../repository/repository.stats.card"

export const TarballStatsPage = () => {
	return (
		<Grid
			container
			spacing={ 3 }
		>
			<Grid
				item
				xs={ 6 }
			>
				<RepositoryStatsCard />
			</Grid>
			<Grid
				item
				xs={ 12 }
			>
				<RepositoryContentsTable />
			</Grid>
		</Grid>
	)
}
