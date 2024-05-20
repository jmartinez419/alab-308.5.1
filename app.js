const arr = [10,20,78]

const Arr = ['yo','this','is','kind','of','hard','longest']

function sumOFArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum  += arr[i];
        
    }
 return sum
}

let arraySum = sumOFArray(arr)

// could make shorter by calling above function and dividing the sum by length
function avgOfArray(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
       sum += arr[i];
    }

    let average = (sum / arr.length)

    return average
}

let Average = avgOfArray(arr)

function longestString(Arr){
     let longest = Arr[0]
    for (let i = 1; i < Arr.length; i++){
        if (Arr[i].length > longest.length)
        longest = Arr[i]
    }
    return longest
}

let longest = longestString(Arr)

function stringLongerThanNum(Arr,num){
    let array = []
    for (let i = 0; i < Arr.length; i++){
        if (Arr[i].length > num)
        array.push(Arr[i])
    }
    return array
}

let array = stringLongerThanNum(Arr,3)

function numberRecursion(num){

  console.log(num)

    if (num > 1) {

        num = num -1;

        numberRecursion(num);

    } 

    else {
        return;
    }
}

const info = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

info.sort((a, b) => a.age - b.age)

let Info = info.filter((person) => person.age > 50)

info.map((person) => {person.job = person.occupation
 delete person.occupation
  person.age = person.age})

console.log(Info)

console.log(info)

//const initialValue = 0;
const infoAgeSum = info.reduce((Sum, person) => Sum + (+(person.age)),
0
)

let avgAge = (infoAgeSum / 5)

function increaseAge(info){
    
    for (let i = 0; i < info.length; i ++){
        let subInfo = info[i]
        if (info[i].age)[
            (info[i].age++)
        ]
        // for (let j = 0; j < subInfo.length; j++){
        //     (subInfo.age++)
        //     }
        //     // if (info[i].age === info.age){
        //     //    Math.add(info[i].age++)
        //     // }
        }
        console.log(info);
    }

function copyAndIncreament(info){
    const clonedinfo = info.slice()
    for (let i =0; i < clonedinfo.length; i++){
        if(clonedinfo[i].age){
            (clonedinfo[i].age++)
        }
    }

    console.log(clonedinfo)
}

console.log(increaseAge(info))

console.log(info)

console.log(copyAndIncreament(info))

//console.log(info[1].age++ )

