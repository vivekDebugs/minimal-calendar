export const getDateString = (date: Date): string => {
	const dd: number = date.getDate()
	const mm: number = date.getMonth() + 1
	const yy: number = date.getFullYear()

	return `${dd}-${mm}-${yy}`
}
