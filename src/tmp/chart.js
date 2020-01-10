import Paper from "@material-ui/core/Paper"
import {
	makeStyles,
	useTheme
} from "@material-ui/core/styles"
import clsx from "clsx"
import { push } from "connected-react-router"
import React from "react"
import { useDispatch } from "react-redux"
import {
	Label,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"
import { Title } from "./title"

// Generate Sales Data
function createData(version, size) {
	return { version, size }
}

const data = [
	createData("20.02", 1),
	createData("20.03", 2),
	createData("20.04", 3),
	createData("20.05", 4),
	createData("20.06", 5),
	createData("20.07", 6),
	createData("20.08", 7),
	createData("20.09", 8),
	createData("20.10", 9),
]

const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	fixedHeight: {
		height: 240,
	},
}))

export const Chart = ({ repository }) => {
	const theme = useTheme()
	const classes = useStyles()
	const dispatch = useDispatch()
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
	const last = repository.versions[ repository.versions.length - 1 ] || { size: 0, label: "KB" }

	return (
		<Paper className={ fixedHeightPaper }>
			<Title>
				<span onClick={ () => dispatch(push(`/repositories/${ repository.name }`)) }>
					{ repository.name } - { last.size } { last.label }
				</span>
			</Title>
			<ResponsiveContainer>
				<LineChart
					data={ repository.versions }
					margin={ {
						top: 16,
						right: 16,
						bottom: 0,
						left: 24,
					} }
				>
					<XAxis
						dataKey={ "version" }
						stroke={ theme.palette.text.secondary }
					/>
					<YAxis stroke={ theme.palette.text.secondary }>
						<Label
							angle={ 270 }
							position={ "left" }
							style={ { textAnchor: "middle", fill: theme.palette.text.primary } }
						>
							{ [ ...new Set(repository.versions.map(({ label }) => label)) ] }
						</Label>
					</YAxis>
					<Tooltip
						formatter={ (value, name, props) => [
							value,
							props.payload.label
						].join(" ") }
					/>
					{/*<Legend />*/ }
					<Line
						type={ "monotone" }
						dataKey={ "size" }
						stroke={ theme.palette.primary.main }
						dot={ false }
					/>
				</LineChart>
			</ResponsiveContainer>
		</Paper>
	)
}
