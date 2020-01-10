import { createMuiTheme } from "@material-ui/core"

//This file is for overriding the MaterialUI default theme: https://material-ui.com/customization/default-theme/
export const Theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0046BE"
		}
	},
	drawer: {
		width: 240
	}
})
