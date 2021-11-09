import React, { useState } from 'react'
import { Event } from '../reducer'

interface Props {
	addEvent: (newEvent: Event) => void
}

const formInput = {
	width: '80%',
	height: '40px',
	margin: '5px',
	padding: '3px 7px',
	fontSize: '17px',
	outline: 'none',
}
const buttonStyle = {
	padding: '10px',
	margin: '5px',
	backgroundColor: '#1a73eb',
	color: '#fff',
	width: '80%',
	borderRadius: '4px',
	border: 'none',
	fontSize: '17px',
	cursor: 'pointer',
}
const formStyle = {
	padding: '10px',
}

const AddTask: React.FC<Props> = ({ addEvent }): React.ReactElement => {
	const [title, setTitle] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [date, setDate] = useState<string>(Date.toString())

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newEvent = {
			id: Math.floor(Math.random() * 100000),
			title,
			description,
			date: new Date(date),
		}
		if (newEvent.date == null || !newEvent.title) return
		addEvent(newEvent)
		setTitle('')
		setDescription('')
		setDate('')
	}

	return (
		<form style={formStyle} onSubmit={e => handleSubmit(e)}>
			<h2>Add an Event</h2>
			<input
				type='text'
				name='title'
				value={title}
				onChange={e => setTitle(e.target.value)}
				placeholder='Add Title'
				style={formInput}
			/>
			<input
				type='text'
				name='description'
				value={description}
				onChange={e => setDescription(e.target.value)}
				placeholder='Add Description'
				style={formInput}
			/>
			<input
				type='datetime-local'
				name='date'
				value={date}
				onChange={e => setDate(e.target.value)}
				style={formInput}
			/>
			<button type='submit' style={buttonStyle}>
				ADD
			</button>
		</form>
	)
}

export default AddTask
