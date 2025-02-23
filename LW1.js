function DelTwo(arr){
    let arr2 = []
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] % 2 == 0){
            arr2.push(arr[i])
        }
    }
    return arr2
}
function PowTwo(arr){
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i] ** 2
        arr2.push(a)
    }
    return arr2
}
function Prop(arr){
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number"){
            arr2.push(arr[i])
        }
    }
    return arr2
}
function SumArr(arr){
    let a = 0
    for (let i = 0; i < arr.length; i++) {
        a += arr[i]
    }
    return a
}
function Fu(f,arr){
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])){
            arr2.push(arr[i]) 
        }
    }
    return arr2
}
let arr = [1,2,3,4,5]
let arr2 = PowTwo(DelTwo(arr))
console.log(arr2);
let arr3 = Fu(x => x>2, [1,2,3,4])
let a = SumArr(arr3)/arr3.length
console.log(a);