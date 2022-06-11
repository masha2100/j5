//1
let text = ["1Java","3a","2is","4language","5programming"]
text.sort()
//2
//function showDna(A=T,C=G){
  //  let A= T
    //let C=G
    //return A
 // }
//showDna()

//4
let products = ["Milk","salad","carrots","candy","juice"]//чек
alert(products)

function getSumm(){ //общая сумма
    let numOne,numTwo,numThree,numFour,numFive;

    function getNumOne(){
        numOne=87;
    }

    function getNumTwo(){
        numTwo=120;
    }

    function getNumThree(){
        numThree=56;
    }

    function getNumFour(){
        numFour=45;
    }

    function getNumFive(){
        numFive=20;
    }

    getNumOne();
    getNumTwo();
    getNumThree();
    getNumFour();
    getNumFive();

    let numSumm = numOne + numTwo + numThree + numFour + numFive;
    console.log(numSumm);
}
getSumm();


let check = [87,120,56,45,20]//найдорожча покупка
function maxElement(check){
    let max;
    let min = check[0];
    for(let i = 0;i < check.length; i++){
        if((check[i]) < min){
            min = check[i];
        }else {
            max = check[i];
        }
    }
    return max
}

console.log(maxElement(check))

let total = 0 //среднее значение
for(let i = 0; i < check.length;i++){
    total += check[i];
}
let avg = total / check.length
