const input = document.querySelector("input")
const ballImg = document.querySelector("img")
const answer = document.querySelector(".answer")
const error = document.querySelector(".error")
const allAnswers = [
	"Who knows",
	"Maybe yes, maybe no",
	"Definitely",
	"You do not want to know the answer",
	"No",
	"Yes",
	"There is a good chance",
]

const checkInput = () => {
	error.textContent = ""
	const questionAsked = input.value
	const lastChar = questionAsked.slice(-1)
	if (questionAsked === "") {
		error.textContent = "Please type your question in!"
	} else if (lastChar !== "?") {
		error.textContent = "Please insert ? at the end!"
	} else {
		answer.textContent = generateAnswer(allAnswers)
	}
}

const generateAnswer = array => {
	const index = Math.floor(Math.random() * array.length)
	console.log(array[index])
	return array[index]
}


ballImg.addEventListener("click", checkInput)
