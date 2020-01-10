import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import {
	Route,
	Switch
} from "react-router"
import { BundleSizePage } from "../bundle-size/bundle.size.page"
import { TarballStatsPage } from "../tarball-stats/tarball.stats.page"


const useStyles = makeStyles(theme => ({
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto",
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
}))

export const RouterComponent = () => {
	const classes = useStyles()

	return (
		<main className={ classes.content }>
			<div className={ classes.appBarSpacer } />
			<Container
				maxWidth={ false }
				className={ classes.container }
			>
				<Switch>
					<Route
						exact
						path={ "/" }
						component={ BundleSizePage }
					/>
					<Route
						exact
						path={ "/repositories/:name" }
						component={ TarballStatsPage }
					/>
				</Switch>
			</Container>
		</main>
	)
}
