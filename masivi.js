let arr=["Volvo", "BMW","VW","Audi","Mazda","Opel"];
//let arr1=arr.shift()
let arr2=arr.slice(1)


console.log(arr)
//console.log(arr1)
console.log(arr2)
let arr3=arr.slice(0,arr.length-1)
console.log(arr3)
// Ievietoju sākot ar 1.  indeksu AAAAAAA un BBBBBBBB

arr.splice(1, 0, "AAAAAA", "BBBBBBB");
console.log(arr)

// Sakārtot alfabēta secībā

console.log(arr.sort())


for (var i=0; i<=arr.length-1; i++)
{
  console.log(arr[i])
}

//arr.forEach((el,index) => console.log("Masīva ",index,". elements: ", el))
//arr.map((el,index) => console.log('Masīva ',index,' elements', el))

console.log("arr ir Masīvs - ",Array.isArray(arr))

var n = "Opel";
if(arr.includes(n))
{
    console.log("Masīvā ir elements ar nosaukumu", n)
}else
{
    console.log("Masīvā nav šāda elementa")
}

var a = arr.indexOf("Opel")
console.log("Opel elementa indekss = ", a)


var counts = {};
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  console.log("Elements OPEL masīvā atkārtojas",counts["Opel"], " Reizes");

var masivs1 = ["Yoo", "AAAAAAAA"];
var masivs2 = ["Voooo", "Xxxx", "Zzzzz"];
var children = masivs1.concat(masivs2);
var MasivuString = children.join('');
console.log(MasivuString)


arr.push("MASINA");
console.log(arr.sort())


var person = {
    firstName: "John",
    lastName: "Doe",
    DateOfBirth: "02.05.1996",
    Gender: "male",
    fullName : function() {
        return this.firstName + " " + this.lastName + " " + this.DateOfBirth;
      }
  };
  console.log(person.fullName())