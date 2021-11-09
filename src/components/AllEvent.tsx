import React from 'react'
import { ActionType } from '../reducer'
import { useStateValue } from '../StateProvider'
import { getDateString } from '../utils'

const eventStyle = {
	margin: '4px',
	padding: '8px',
	backgroundColor: '#fafafa',
	cursor: 'pointer',
}

const allEventsStyle = {
	overflow: 'scroll',
}

const AllEvent = () => {
	const {
		state: { events },
		dispatch,
	} = useStateValue()
	const handleClick = (date: Date): void => {
		dispatch({
			type: ActionType.SET_DATE,
			payload: new Date(date),
		})
	}
	return (
		<div className='allevent' style={allEventsStyle}>
			{events.map(event => {
				return (
					<div
						key={event.id}
						style={eventStyle}
						onClick={() => handleClick(event.date)}
					>
						<p>{event.title}</p>
						<p>{getDateString(new Date(event.date))}</p>
					</div>
				)
			})}
		</div>
	)
}

export default AllEvent
