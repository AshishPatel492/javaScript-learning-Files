console.log("thise is tute51.js");

//  Iterators

function myIterator(valueofArray) {
    let nextIndex = 0;
    // we will return an Object
    return {
        next: function () {
            if (nextIndex < valueofArray.length) {
                // we will return below object
                return {
                    value: valueofArray[nextIndex++],
                    done: false
                }
            }
            else {
                // we will return below object with only done
                return {
                    value:"end of Array!",
                    done: true
                }
            }
        }
    }
}

const myArray = ["Apple", "Mango", "Banana", "Orange", "Kivi"];

console.log(myArray);

// Using the Iterator

const fruits=myIterator(myArray);
// console.log(fruits.next().value); 