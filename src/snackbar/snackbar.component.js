import { useSnackbar } from "notistack"
import React, {
	memo,
	useEffect,
	useState,
} from "react"
import {
	useDispatch,
	useSelector,
} from "react-redux"
import { SnackbarActionComponent } from "./snackbar.action.component"
import { removeSnackbarAction } from "./snackbar.actions"
import { snackbarsSelector } from "./snackbar.selectors"

//https://iamhosseindhv.com/notistack/
export const SnackbarComponent = memo(() => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()
	const [ displayed, setDisplayed ] = useState([])

	const notifications = useSelector(snackbarsSelector)
	const dispatch = useDispatch()

	useEffect(() => {
		notifications.forEach(({ key, message, options = {} }) => {
			if (displayed.includes(key)) return

			enqueueSnackbar(message, {
				...options,
				key,
				autoHideDuration: 2000,
				action: key => (
					<SnackbarActionComponent
						onClick={ () => {
							closeSnackbar(key)
							dispatch(removeSnackbarAction(key))
						} }
					/>
				),
				onClose: (event, reason, key) => dispatch(removeSnackbarAction(key))
			})

			setDisplayed([
				...displayed,
				key
			])
		})
	}, [ notifications ])

	return null
})
