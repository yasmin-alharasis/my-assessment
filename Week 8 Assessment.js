/*## Question 1:
* 1.Using notation of es5, create a constructor called `Animal()` with two properties:
  - `animalName` - i.e., 'Lussy'
  - `type` - i.e., 'Dog'
1. Add two methods to the prototype:
  - `animalName` - return the name of the animal
  - `createElement` - create a new DOM element with jQuery
1. Create an instance.
1. Append the instance to the DOM*/
function Animal(animalName,type){
    this.animalName=animalName;
    this.type=type;
}
Animal.prototype.animalName=function(){
         return animalName;
    }
Animal.prototype.createElement=function(){
    $('body').append(<h1>animal</h1>);
   }   
var animal1= new Animal('Lussy','Lussy');
Animal.createElement();
 
/*## Question 2:
* 1.Using notation of es6 create a class called `shape()` with three properties, all these properties 
are private:
  - `height` - i.e., '13CM'
  - `length` - i.e., '12CM'
  - `area` - i.e., '256CM2'

1. Add one method :
  - `getteArea` - return the area

1. Create an instance.
1. Append the instance to the DOM*/
function shape(){
    constructor(){
        this.height='13CM';
        this.length='12CM';
        this.area='256CM2';
    } 
    shape.getteArea.function()={
       return area;
    }
    
}
var shap1= new shap1();
document.getElementById('Q2').innerHTML=shap1;
/*## Question 3:
* 1. Using notation of es6 and arrow function , make a function that filters an array of strings, 
the array filter depending on the length of the string, all the length above 4 should be excluded.

- `filter array(['Food','Pasta','Pizza','Eat'])` - return ['food','Pasta','Eat']*/

function filterArray(arr){
    var array=[];
    for(const index of arr){
        index1=index.length;
        if(index1<4){
            array.push(index);
        }
        return array;
    }
}
var arr=['Food','Pasta','Pizza','Eat'];
filterArray(arr);


