import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { DrawerComponent } from "../drawer/drawer.component"
import { HeaderComponent } from "../header/header.component"
import { RouterComponent } from "../router/router.component"
import { SnackbarComponent } from "../snackbar/snackbar.component"


const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
	},
}))

export const ApplicationComponent = () => {
	const classes = useStyles()

	return (
		<div className={ classes.root }>
			<CssBaseline />
			<SnackbarComponent />
			<HeaderComponent />
			<DrawerComponent />
			<RouterComponent />
		</div>
	)
}
