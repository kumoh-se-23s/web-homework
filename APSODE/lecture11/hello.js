console.log("hello world!")
const boxElem = document.getElementsByClassName("box");

console.log(
    boxElem
)


let price = 2000

const ad = `It's price is ${price}`

console.log(1, ad)


const age = 18
let status = (age > 18)
    ? "adult"
    : "kids"

console.log(2, status)


const lang = "kor"
const login = false
const userId = "kim"

const welcomeMsg = {
    kor: "안녕하세요",
    en: "welcome"
}
const logInMsg = {
    kor: "로그인이 필요합니다",
    en: "login is required"
}

let text = ((login) ? (`${userId} ${eval(` welcomeMsg.${lang}`)}`) : (eval(`logInMsg.${lang}`)))
console.log(3, text)

const add = (a, b) => a + b
const a = [];
a.map()
