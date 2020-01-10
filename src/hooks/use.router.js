import queryString from "query-string"
import React, { useMemo } from "react"
import {
	useHistory,
	useLocation,
	useParams,
	useRouteMatch
} from "react-router-dom"

export const useRouter = () => {
	const params = useParams()
	const location = useLocation()
	const history = useHistory()
	const match = useRouteMatch()

	return useMemo(() => ({
		push: history.push,
		replace: history.replace,
		pathname: location.pathname,
		query: {
			...queryString.parse(location.search),
			...params
		},
		match,
		location,
		history
	}), [
		params,
		match,
		location,
		history
	])
}
