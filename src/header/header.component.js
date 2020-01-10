import AppBar from "@material-ui/core/AppBar"
import Badge from "@material-ui/core/Badge"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/Notifications"
import clsx from "clsx"
import React from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { openDrawerAction } from "../drawer/drawer.actions"
import { drawerIsOpenSelector } from "../drawer/drawer.selectors"

const useStyles = makeStyles(theme => ({
	toolbar: {
		paddingRight: 24,
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([
			"width",
			"margin"
		], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: theme.drawer.width,
		width: `calc(100% - ${ theme.drawer.width }px)`,
		transition: theme.transitions.create([
			"width",
			"margin"
		], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: "none",
	},
	title: {
		flexGrow: 1,
	},
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
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	fixedHeight: {
		height: 250,
	},
}))

export const HeaderComponent = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const isOpen = useSelector(drawerIsOpenSelector)
	const onClick = () => dispatch(openDrawerAction())

	return (
		<AppBar
			position={ "absolute" }
			className={ clsx(classes.appBar, isOpen && classes.appBarShift) }
		>
			<Toolbar className={ classes.toolbar }>
				<IconButton
					edge={ "start" }
					color={ "inherit" }
					onClick={ onClick }
					className={ clsx(classes.menuButton, isOpen && classes.menuButtonHidden) }
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component={ "h1" }
					variant={ "h6" }
					color={ "inherit" }
					noWrap
					className={ classes.title }
				>
					Repository Analytics
				</Typography>
				<IconButton color={ "inherit" }>
					<Badge
						badgeContent={ 4 }
						color={ "secondary" }
					>
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
