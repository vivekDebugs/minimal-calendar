import React, { useEffect } from 'react'
import Calendar from 'react-calendar'
import Events from './components/Events'
import AllEvent from './components/AllEvent'
import 'react-calendar/dist/Calendar.css'
import './App.css'
import { useStateValue } from './StateProvider'
import { ActionType, Event } from './reducer'
import AddTask from './components/AddTask'

const App: React.FC = (): React.ReactElement => {
	const {
		state: { date, events },
		dispatch,
	} = useStateValue()

	useEffect(() => {
		const fetchTasks = async () => {
			const res = await fetch('http://localhost:5000/events')
			const data = await res.json()
			const sortedEvents = data.sort(
				(a: Event, b: Event) =>
					new Date(a.date).getTime() - new Date(b.date).getTime()
			)
			dispatch({
				type: ActionType.SET_EVENTS,
				payload: sortedEvents,
			})
		}
		fetchTasks()
	}, [dispatch])

	const addEvent = async (newEvent: Event) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newEvent),
		}
		await fetch('http://localhost:5000/events', options)
		const newEvents = [...events, newEvent].sort(
			(a: Event, b: Event) =>
				new Date(a.date).getTime() - new Date(b.date).getTime()
		)
		dispatch({
			type: ActionType.SET_EVENTS,
			payload: newEvents,
		})
	}

	const handleChange = (newValue: Date): void => {
		dispatch({
			type: ActionType.SET_DATE,
			payload: newValue,
		})
	}

	return (
		<div className='App'>
			<div className='calendar'>
				<Calendar onChange={handleChange} value={date} />
				<AddTask addEvent={addEvent} />
			</div>
			<Events />
			<AllEvent />
		</div>
	)
}

export default App
