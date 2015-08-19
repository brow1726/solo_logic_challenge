var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];
var newArray = [];
//reverse non primes array here
var revNonPrimes = nonPrimes.reverse();

//create function to calculate new array
function pushIt(array1, array2){
for(var i = 0; i < primes.length; i++) {

	newArray.push(array1[i]+array2[i]);
	};
};
//call function against arrays
pushIt(primes, revNonPrimes);
console.log(newArray);


var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];
var newArray2 = [];

function newOrder(a, b){

	for(var i = 0; i < numbers1.length; i++){
		newArray2.push(a[i]);
		newArray2.push(b[i]);
	}
}
newOrder(numbers1, numbers2);

function compare(a,b){
	if(a < b) return -1;
	if(a > b) return 1;
	return 0;
}
newArray2.sort(compare);
console.log(newArray2);

var newTri = new rightTriangle(3,4);


function rightTriangle(a,b,c){
	this.a = a;
	this.b = b;
	this.c = 0
}

rightTriangle.prototype.hypotenuse = function(){
	this.c = Math.sqrt(Math.pow(this.a,2) + Math.pow(this.b,2));
	
}

newTri.hypotenuse();
console.log(newTri.c);

function fourth(num){
	if(num == 0){
		return 0;
	} else {
		return num + fourth(num-1);
	}
}
var one = fourth(0);
var two = fourth(5);
console.log(two);

