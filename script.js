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
	answer.textContent = ""
	const questionAsked = input.value
	const lastChar = questionAsked.slice(-1)
	if (questionAsked === "") {
		error.textContent = "Please type your question in!"
		answer.textContent = ""
	} else if (lastChar !== "?") {
		error.textContent = "'?' is missing at the end of your question!"
		answer.textContent = ""
	} else {
		ballImg.classList.add("shake-anime")
		setTimeout(function () {
			const span = document.createElement("span")
			span.textContent = "Answer: "
			const reply = generateAnswer(allAnswers)
			answer.append(span, reply)
			ballImg.classList.remove("shake-anime")
		}, 2000)
	}
}

const generateAnswer = array => {
	const index = Math.floor(Math.random() * array.length)
	return array[index]
}

ballImg.addEventListener("click", checkInput)
