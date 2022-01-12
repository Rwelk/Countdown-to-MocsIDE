// script.js

console.log('Running script.js')

let timer = document.querySelector(".timer")

function main() {
	setInterval(() => {settime()}, 1000)
}

function settime() {
	const today = new Date()
	const end_time = new Date(2022, 0, 14)

	const remaining = (end_time.getTime() - today.getTime())
	
	if (remaining <= 0) {
		timer.innerHTML = `
		<h1>It's live! Click <a href="https://www.w3schools.com">
		here</a> to see Mocs-IDE!</h1>
		`
	}

	else {
		let seconds = Math.floor(remaining / 1000)
		let minutes = Math.floor(seconds / 60)
		let hours = Math.floor(minutes / 60)
		let days = Math.floor(hours / 24)

		timer.innerHTML = `${days}:${
			(hours % 24).toString().padStart(2, '0')}:${
				(minutes % 60).toString().padStart(2, '0')}:${
					(seconds % 60).toString().padStart(2, '0')}`
	}	
}