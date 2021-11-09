import React from 'react'

export interface Event {
	id: number
	title: string
	description: string
	date: Date
}

export interface AppState {
	date: Date
	events: Event[] | []
	todayEvents: Event[] | []
}

export enum ActionType {
	SET_DATE,
	SET_EVENTS,
	SET_TODAY_EVENTS,
}

export type Action =
	| { type: ActionType.SET_DATE; payload: Date }
	| { type: ActionType.SET_EVENTS; payload: Event[] }
	| { type: ActionType.SET_TODAY_EVENTS; payload: Event[] }

export const initialState: AppState = {
	date: new Date(),
	events: [],
	todayEvents: [],
}

const reducer: React.Reducer<AppState, Action> = (state, action) => {
	console.log(action)

	switch (action.type) {
		case ActionType.SET_DATE:
			return {
				...state,
				date: action.payload,
			}
		case ActionType.SET_EVENTS:
			return {
				...state,
				events: action.payload,
			}
		case ActionType.SET_TODAY_EVENTS:
			return {
				...state,
				todayEvents: action.payload,
			}

		default:
			return state
	}
}

export default reducer
