const input = document.querySelector("input")
const ballImg = document.querySelector("img")
const answer = document.querySelector(".answer")
const error = document.querySelector(".error")
const allAnswers = [
	"Who knows!",
	"Maybe yes, maybe no!",
	"Definitely!",
	"You do not want to know the answer!",
	"No!",
	"Yes!",
	"There is a good chance!",
	"I would die for that!",
]

const checkInput = () => {
	error.textContent = ""
	answer.innerHTML = ""
	ballImg.classList.remove('shake-anime')
	if (input.value !== "" && input.value.slice(-1) === "?") {
		const ans = drawAnswer()
		answer.innerHTML = `<span>Answer: </span> ${ans}`
	} else if (input.value !== "" && input.value.slice(-1) !== "?") {
		error.textContent = 'You need to put "?" at the end of your question.'
	} else {
		error.textContent = "Please type the question in!"
	}
}

const drawAnswer = () => {
	const len = allAnswers.length
	const index = Math.floor(Math.random() * len)
	const randAnswer = allAnswers[index]
	return randAnswer
}

const shake = () => {
	ballImg.classList.add('shake-anime')
	setTimeout(checkInput, 1000)
}

ballImg.addEventListener("click", shake)