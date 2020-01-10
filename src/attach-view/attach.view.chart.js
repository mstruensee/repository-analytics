import { makeStyles } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import clsx from "clsx"
import React from "react"

import { Line } from "react-chartjs-2"

const random = (min = 1, max = 10000) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const repositories = [
	"@gvpc/add-on-selector",
	"@gvpc/attach-modal",
	"@gvpc/attach-suggestion",
	"@gvpc/cart-subtotal",
	"@gvpc/commerce-elements",
	"@gvpc/complete-your-purchase",
	"@gvpc/frequently-bought-together",
	"@gvpc/included-in-this-package",
	"@gvpc/ink-subscription",
	"@gvpc/mp-manufacturer-content",
	"@gvpc/mp-overview",
	"@gvpc/mp-questions-answers",
	"@gvpc/mp-ratings-reviews",
	"@gvpc/mp-specifications",
	"@gvpc/mp-media-gallery",
	"@gvpc/n-sku",
	"@gvpc/office-365",
	"@gvpc/package-deals-carousel",
	"@gvpc/package-deals-jumper",
	"@gvpc/post-purchase-banner",
	"@gvpc/product-carousels",
	"@gvpc/primary-image",
	"@gvpc/product-installation",
	"@gvpc/service-selector",
	"@gvpc/sku-card",
	"@gvpc/sku-selector",
	"@gvpc/solution-assembler",
	"@gvpc/solution-banner",
	"@gvpc/solution-button",
	"@gvpc/store-finder",
	"@gvpc/subscription-selector",
	"@gvpc/warranty-selector",
	"@gvpc/product-installation"
]

const generateData = release => {
	const data = { release }

	repositories.forEach(repository => data[ repository ] = random())
	return data
}
const getRandomColor = () => {
	const letters = "0123456789ABCDEF"
	let color = "#"
	for (let i = 0; i < 6; i++) {
		color += letters[ Math.floor(Math.random() * 16) ]
	}
	return color
}

const releaseWeeks = [
	"19.04",
	"19.03",
	"19.05",
	"19.06",
	"19.07",
	"19.08",
	"19.09",
	"19.10",
]

const data = [
	generateData("19.03"),
	generateData("19.04"),
	generateData("19.05"),
	generateData("19.06"),
	generateData("19.07"),
	generateData("19.08"),
	generateData("19.09"),
	generateData("19.10"),
]


const useStyles = makeStyles(theme => ({
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
}))

export const AttachViewChart = () => {
	const classes = useStyles()
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
	console.log({ repositories })
	return (
		<Paper className={ fixedHeightPaper }>
			{/*<Typography*/ }
			{/*	component={ "h2" }*/ }
			{/*	variant={ "h6" }*/ }
			{/*	color={ "primary" }*/ }
			{/*	gutterBottom*/ }
			{/*>*/ }
			{/*	Attach View*/ }
			{/*</Typography>*/ }
			{/*<ResponsiveContainer id={ "bundle-chart-container" }>*/ }
			{/*	*/ }
			{/*	<LineChart*/ }
			{/*		data={ data }*/ }
			{/*		margin={ { top: 5, right: 30, left: 20, bottom: 5 } }*/ }
			{/*	>*/ }
			{/*		<XAxis dataKey={ "release" } />*/ }
			{/*		<YAxis />*/ }
			{/*		<CartesianGrid strokeDasharray={ "3 3" } />*/ }
			{/*		<Tooltip />*/ }
			{/*		<Legend />*/ }
			{/*		{*/ }
			{/*			repositories.map(repository => (*/ }
			{/*				<Line*/ }
			{/*					type={ "monotone" }*/ }
			{/*					dataKey={ repository }*/ }
			{/*					stroke={ getRandomColor() }*/ }
			{/*				/>*/ }
			{/*			))*/ }
			{/*		}*/ }
			{/*	</LineChart>*/ }
			{/*</ResponsiveContainer>*/ }
			<h2>Line Example</h2>
			<Line
				data={ {
					labels: releaseWeeks,
					datasets: repositories.map(repository => ({
						label: repository,
						data: releaseWeeks.map(_ => random()),
						fill: false,
						lineTension: 0.1,
						backgroundColor: getRandomColor(),
						borderColor: getRandomColor(),
						borderCapStyle: "butt",
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: "miter",
						pointBorderColor: getRandomColor(),
						pointBackgroundColor: "#fff",
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: getRandomColor(),
						pointHoverBorderColor: getRandomColor(),
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
					}))
				} }
			/>
		</Paper>
	)
}
