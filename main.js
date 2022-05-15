function func(array) {
    const res = [];
    return array.filter((item, index, self) => (self.indexOf(item) === index));
 }
console.log(console.log(func([1, 1, 2, 2, 4, 2, 7, 1])));

Number.prototype.plus = function(argument) {
    return this + argument;
  };
  
  Number.prototype.minus = function(argument) {
    return this - argument;
  };
  console.log((2).plus(10).minus(1)); 

 function anagram(firstWord = '', secondWord = '') {
  let string1 = firstWord.toLocaleLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let string2 = secondWord.toLocaleLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");


    const result = string1.split('').every(char => {
      return string2.split('').find(_char => _char === char);
      
    });
    return result && (string1.length === string2.length);
  }
console.log(anagram('finder', 'Friend'));
    
    const words = ['orange', 'banana', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana'];
    function solution(words) {
      let mySet = new Set(words);
      return [mySet];
  }
console.log(solution(words));
