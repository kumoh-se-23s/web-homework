var price = 2000;
const ad = `It's price is ${price}.` // styled component
console.log(1,ad)

const age = 18;
var status = age >18 ? "성인" : "미성년자"
console.log(3,status)


//1. map : 요소를 순회하면서 동일한 작업 수행
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);
console.log(4,map1);
const filter1 = array1.filter(x => x > 5);
console.log(5,filter1)
const find1 = array1.find(x => x > 5);
console.log(6,find1);