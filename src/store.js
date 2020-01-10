/* global __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ */
import { routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
import {
	applyMiddleware,
	compose,
	createStore,
} from "redux"
import ReduxMulti from "redux-multi"
import { createEpicMiddleware } from "redux-observable"
import ReduxThunk from "redux-thunk"
import { ajax } from "rxjs/ajax"
import data from "./data-attach"
import { epics } from "./epics"
import { reducers } from "./reducers"
import { REPOSITORIES_REDUCER } from "./repository/repository.types"

//tmp hack - convert MB to KB
data.forEach(repository => {
	(repository.versions || []).forEach(version => {
		if(version.label === "MB") {
			version.size = version.size * 1000
			version.label = "KB"
		}
	})
})

const epicMiddleware = createEpicMiddleware({ dependencies: { ajax } })

export const history = createBrowserHistory()

export const makeStore = () => {
	let composeEnhancers

	if (typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
		composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			name: "repository-analytics",
		}) || compose
	} else {
		composeEnhancers = compose
	}

	const store = createStore(
		reducers(history),
		{
			[ REPOSITORIES_REDUCER ]: data
		},
		composeEnhancers(
			applyMiddleware(
				routerMiddleware(history),
				ReduxThunk,
				ReduxMulti,
				epicMiddleware,
			),
		),
	)

	epicMiddleware.run(epics)

	return store
}
