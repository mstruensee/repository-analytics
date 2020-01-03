import ReactDom from "react-dom"
import React from "react"
import {Dashboard} from "./tmp/dashboard";

const element = document.createElement("div")
element.id = "rad"
document.body.appendChild(element)

ReactDom.render(
    <Dashboard />,
    element,
    () => console.log("render complete")
)