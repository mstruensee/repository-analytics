import { createSelector } from "reselect"
import { REPOSITORIES_REDUCER } from "./repository.types"

const repositoriesReducer = state => state[ REPOSITORIES_REDUCER ]

export const repositoriesSelector = createSelector(
	[ repositoriesReducer ],
	repositories => repositories
)

const repositoryNameSelector = (_, name) => name

export const repositorySelector = createSelector(
	[
		repositoryNameSelector,
		repositoriesSelector,
	],
	(name, repositories) => repositories.find(repository => repository.name === name) || {}
)

export const repositoryStatsSelector = createSelector(
	[
		repositorySelector,
	],
	({ versions = [] }) => versions[ versions.length - 1 ]
)
export const repositoryContentsSelector = createSelector(
	[
		repositoryStatsSelector,
	],
	({ contents = [] }) => contents
)
