import { createSelector } from "reselect"
import { SNACKBAR_REDUCER } from "./snackbar.types"

const snackbarReducer = state => state[ SNACKBAR_REDUCER ]

export const snackbarsSelector = createSelector(
	[ snackbarReducer ],
	snackbars => snackbars
)
