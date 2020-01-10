import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import { makeStyles } from "@material-ui/core/styles"
import AssignmentIcon from "@material-ui/icons/Assignment"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ShowChartIcon from "@material-ui/icons/ShowChart"
import clsx from "clsx"
import { push } from "connected-react-router"
import React from "react"
import {
	useDispatch,
	useSelector
} from "react-redux"
import { closeDrawerAction } from "../drawer/drawer.actions"
import { drawerIsOpenSelector } from "../drawer/drawer.selectors"
import { repositoriesSelector } from "../repository/repository.selectors"

const useStyles = makeStyles(theme => ({
	icon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		width: theme.drawer.width,
		height: "100vh",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[ theme.breakpoints.up("sm") ]: {
			width: theme.spacing(9),
		},
	},
}))

export const DrawerComponent = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const onClick = () => dispatch(closeDrawerAction())
	const isOpen = useSelector(drawerIsOpenSelector)
	const repositories = useSelector(repositoriesSelector)

	return (
		<Drawer
			variant="permanent"
			classes={ {
				paper: clsx(classes.drawerPaper, !isOpen && classes.drawerPaperClose),
			} }
			open={ isOpen }
		>
			<div className={ classes.icon }>
				<IconButton onClick={ onClick }>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				<ListItem
					button
					key={ "bundle-size" }
					onClick={ () => dispatch(push("/")) }
				>
					<ListItemIcon>
						<ShowChartIcon />
					</ListItemIcon>
					Tarball Size
				</ListItem>
			</List>
			<Divider />
			<ListSubheader inset>Repositories</ListSubheader>
			{
				repositories.map(({ name }) => (
					<ListItem
						button
						key={ name }
						onClick={ () => dispatch(push(`/repositories/${ name }`)) }
					>
						<ListItemIcon>
							<AssignmentIcon />
						</ListItemIcon>
						<ListItemText primary={ name } />
					</ListItem>
				))
			}
		</Drawer>
	)
}
