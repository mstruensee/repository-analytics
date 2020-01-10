import Grid from "@material-ui/core/Grid"
import React from "react"
import { useSelector } from "react-redux"
import { repositoriesSelector } from "../repository/repository.selectors"
import { Chart } from "../tmp/chart"

const multiplier = {
	"KB": 1000,
	"MB": 1000000,
}

export const BundleSizePage = () => {
	const repositories = useSelector(repositoriesSelector)

	repositories.forEach(repository => {
		repository.versions.sort((a, b) => (a.date > b.date) ? 1 : -1)
	})

	repositories.sort((a, b) => {
		const aLast = a.versions[ a.versions.length - 1 ] || { size: 0, label: "KB"}
		const bLast = b.versions[ b.versions.length - 1 ] || { size: 0, label: "KB"}

		if ((aLast.size * multiplier[ aLast.label ]) < (bLast.size * multiplier[ bLast.label ])) return 1

		return -1
	})

	return (
		<Grid
			container
			spacing={ 3 }
		>
			{
				repositories.map(repository => (
					<Grid
						item
						xs={ 12 }
						md={ 6 }
						lg={ 6 }
						key={ `${ repository.name }=${ repository.version }` }
					>
						<Chart repository={ repository } />
					</Grid>
				))
			}
		</Grid>
	)
}
