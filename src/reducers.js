import {
	listReducer,
	objectReducer,
} from "@wecreatesoftware/redux-higher-order-reducers"
import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import { DRAWER_REDUCER } from "./drawer/drawer.types"

import { SNACKBAR_REDUCER } from "./snackbar/snackbar.types"

export const reducers = history => combineReducers({
	router: connectRouter(history),
	[ SNACKBAR_REDUCER ]: listReducer({
		reducerName: SNACKBAR_REDUCER,
		key: "key",
	}),
	[ DRAWER_REDUCER ]: objectReducer({
		initialState: {
			isOpen: true,
			width: 300,
		},
		reducerName: DRAWER_REDUCER,
	}),
	repositories: listReducer({ reducerName: "repositories" })
})
