import { updateObjectAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { DRAWER_REDUCER } from "./drawer.types"

export const openDrawerAction = () => updateObjectAction({
	payload: {
		isOpen: true
	},
	reducerName: DRAWER_REDUCER
})
export const closeDrawerAction = () => updateObjectAction({
	payload: {
		isOpen: false
	},
	reducerName: DRAWER_REDUCER
})
