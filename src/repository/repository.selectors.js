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
		// .filter(({ filename }) => !/.*.snap/i.exec(filename))
		// .filter(({ filename }) => !/.*.md/i.exec(filename))
		// .filter(({ filename }) => !/.*product-carousel-demo.bundle.js/i.exec(filename))
		// .filter(({ filename }) => !/.*(\/docs).*/i.exec(filename))
		// .filter(({ filename }) => !/.*.map/i.exec(filename))
		// .filter(({ filename }) => !/.*package-lock.json/i.exec(filename))
		//
		// // test filters
		// // .filter(({ filename }) => !/.*cucumber.js/i.exec(filename))
		// // .filter(({ filename }) => !/.*.svg/i.exec(filename))
		// // .filter(({ filename }) => !/.*react*/i.exec(filename))
		// // .filter(({ filename }) => !/.*react-dom*/i.exec(filename))
		// // .filter(({ filename }) => !/.*redux/i.exec(filename))
		// // .filter(({ filename }) => !/.*react-redux/i.exec(filename))
		// // .filter(({ filename }) => !/.*sc-pattern-library.*/i.exec(filename))
		// // .filter(({ filename }) => !/.*rollup.*/i.exec(filename))
		// // .filter(({ filename }) => !/^node_modules\/.*/i.exec(filename))
		// // .filter(({ filename }) => !/.*@babel\/.*/i.exec(filename))
)
