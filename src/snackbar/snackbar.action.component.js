import Button from "@material-ui/core/Button"
import React, { memo } from "react"

export const SnackbarActionComponent = memo(({ onClick }) => (
	<Button
		onClick={ onClick }
		color={ "primary" }
	>
		Dismiss
	</Button>
))
