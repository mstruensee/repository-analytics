import MaterialTable from "material-table"
import React, { useRef } from "react"
import Highlighter from "react-highlight-words"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { repositoryContentsSelector } from "./repository.selectors"

export const RepositoryContentsTableV2 = () => {
	const { name } = useParams()
	const tableRef = useRef()

	const contents = useSelector(state => repositoryContentsSelector(state, name))

	return (
		<MaterialTable
			title={name }
			tableRef={ tableRef }
			columns={ [
				{
					title: "Name",
					field: "filename",
					render: ({ filename }) => {
						// const searchText = tableRef?.current?.state?.searchText
						const { current: { state: { searchText } = {} } = {} } = tableRef || {}

						return (
							<Highlighter
								searchWords={ [ searchText ] }
								autoEscape={ true }
								textToHighlight={ filename }
							/>
						)
					}
				},
				{
					title: "Size (B)",
					field: "size",
				}
			] }
			data={ contents }
		/>
	)
}

//https://jsfiddle.net/onigetoc/b2be7xao/ show more kind of like this ...
