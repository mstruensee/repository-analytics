import { ThemeProvider } from "@material-ui/core"
import { ConnectedRouter } from "connected-react-router"
import { SnackbarProvider } from "notistack"
import React from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"
import { ApplicationComponent } from "./application/application.component"
import {
	history,
	makeStore
} from "./store"
import { Theme } from "./theme/theme"

const element = document.createElement("div")
element.id = "ra"
document.body.appendChild(element)

const store = makeStore()

ReactDom.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<ThemeProvider theme={ Theme }>
				<SnackbarProvider
					maxSnack={ 5 }
					dense
					anchorOrigin={ {
						vertical: "bottom",
						horizontal: "right",
					} }
				>
					<ApplicationComponent />
				</SnackbarProvider>
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>,
	element,
	() => console.log("render complete")
)
