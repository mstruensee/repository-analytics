import {
	addItemAction,
	removeItemByKeyAction
} from "@wecreatesoftware/redux-higher-order-reducers"
import { SNACKBAR_REDUCER } from "./snackbar.types"

export const enqueueSnackbar = (variant, message) => addItemAction({
	reducerName: SNACKBAR_REDUCER,
	item: {
		message,
		options: { variant },
		key: new Date().getTime() + Math.random(),
	},
})

export const enqueueErrorSnackbarAction = message => enqueueSnackbar("error", message)
export const enqueueWarningSnackbarAction = message => enqueueSnackbar("warning", message)
export const enqueueInfoSnackbarAction = message => enqueueSnackbar("info", message)
export const enqueueSuccessSnackbarAction = message => enqueueSnackbar("success", message)

export const removeSnackbarAction = key => removeItemByKeyAction({
	reducerName: SNACKBAR_REDUCER,
	item: { key },
})
