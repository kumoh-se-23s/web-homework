const lang = "kor"
const login = true
const userId = "kim"

const welcomeMsg = {
    kor:"안녕하세요",
    en:"welcome"
}
const logInMsg = {
    kor:"로그인이 필요합니다",
    en:"login is required"
}
const logInOut = "결과:" + ((login) ? userId + " " + welcomeMsg[lang] :  logInMsg[lang])
console.log(1, logInOut)


const posts = [
    {id:1,title:"title1",content:"content1", like:5},
    {id:2,title:"title2",content:"content2", like:5},
    {id:3,title:"title3",content:"content3", like:5},
    {id:4,title:"title4",content:"content4", like:5},
]

const selectedId = 2;


const newPosts = posts.map(x => x.id===selectedId ? x.like+=1 : x.like+=0)
console.log(newPosts)
