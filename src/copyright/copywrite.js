import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import React from "react"

export const Copyright = () => (
	<Typography
		variant={ "body2" }
		color={ "textSecondary" }
		align={ "center" }
	>
		Copyright ©&nbsp;
		<Link
			color={ "inherit" }
			href={ "#" }
		>
			R.A.&nbsp;
		</Link>
		{
			new Date().getFullYear()
		}
	</Typography>
)
