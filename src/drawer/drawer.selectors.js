import { createSelector } from "reselect"
import { DRAWER_REDUCER } from "./drawer.types"

const drawerReducer = state => state[ DRAWER_REDUCER ]

export const drawerIsOpenSelector = createSelector(
	[ drawerReducer ],
	({ isOpen }) => isOpen
)

export const drawerWidthSelector = createSelector(
	[ drawerReducer ],
	({ width }) => width
)
