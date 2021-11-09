import React, { useEffect } from 'react'
import { ActionType, Event } from '../reducer'
import { useStateValue } from '../StateProvider'
import { getDateString } from '../utils'

const eventsStyle = {
	padding: '10px',
	overflow: 'scroll',
}

const eachEventStyle = {
	margin: '10px',
	padding: '8px',
	backgroundColor: '#f4f4f4',
	borderRadius: '4px',
}

const Events: React.FC = (): React.ReactElement => {
	const {
		state: { date, events, todayEvents },
		dispatch,
	} = useStateValue()

	useEffect(() => {
		const getTodaysEvent: Event[] | any = (date: Date, allEvents: Event[]) => {
			const todaysEvent = allEvents.filter(
				eve =>
					getDateString(new Date(eve.date)) === getDateString(new Date(date))
			)
			return todaysEvent
		}
		dispatch({
			type: ActionType.SET_TODAY_EVENTS,
			payload: getTodaysEvent(date, events),
		})
	}, [dispatch, date, events])

	return (
		<div className='events' style={eventsStyle}>
			<h2>{getDateString(date)}</h2>
			{todayEvents.length
				? todayEvents.map(eve => {
						const dateObj = new Date(eve.date)
						return (
							<div key={eve.id} style={eachEventStyle}>
								<h3>{eve.title}</h3>
								<h4>{eve.description}</h4>
								<h4
									style={{ marginTop: '8px' }}
								>{`${dateObj.getHours()} : ${dateObj.getMinutes()} hours`}</h4>
							</div>
						)
				  })
				: 'No Events'}
		</div>
	)
}

export default Events
