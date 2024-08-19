let grades = [85, 92, 78, 88, 90, 67, 95]

// ADD AND REMOVE GRADES
// PUSH
const pushGrades = grades.push(81)
console.log(`grades.push(81) returns: ${pushGrades}`);

// POP
const  popGrades = grades.pop()
console.log(`grades.pop() returns: ${popGrades}`);


// UNSHIFT
const unshiftGrades = grades.unshift(97)
console.log(`grades.unshift(97) returns: ${unshiftGrades}`);

// SHIFT
const shiftGrades = grades.shift()
console.log(`grades.shift() returns: ${shiftGrades}`);


// MODIFY THE ARRAY
// SPLICE
const spliceGrades = grades.splice(3, 2, 58)
console.log(`grades.splice(3, 2, 58) returns: ${spliceGrades}`);

// SLICE
const slicedGrades = grades.slice(1, 6)
console.log(`grades.slice(1, 6) returns: ${slicedGrades}`);


// COMBINE AND SPLIT ARRAYS
// CONCAT
const concatGrades = grades.concat(...slicedGrades)
console.log(`grades.concat(slicedGrades) returns: ${concatGrades}`);

// JOIN
const joinGrades = grades.join(', ')
console.log(`grades.join(', ') returns: ${joinGrades}`)


// REVERSE AND SORT GRADES
// REVERSE
const reverseGrades = grades.reverse()
console.log(`grades.reverse() returns: ${reverseGrades}`)

// SORT
const sortGrades = grades.sort()
console.log(`grades.sort() returns: ${sortGrades}`)


// ITTERATE AND TRANSFORM GRADES
// FOREACH
grades.forEach((el) => {
    console.log(el);
})

// MAP
function mapGrades() {
    let newGrades = []
    grades.map((el, i) => {
        newGrades.push(el + 5)
    })
    console.log(`Updated grades with map: \n ${newGrades}`);
}
mapGrades()


// FILTER AND ANALYSE GRADES
// FILTER
const filterGrades = grades.filter(filter)
function filter(el) {
    return el > 70
}
console.log(`Grades above 70 are: ${filterGrades}`);

// REDUCE
const reduceGrades = grades.reduce(reduce, 0)
function reduce(a, b) {
    return a + b
}
console.log(`Sum of grades: ${reduceGrades}`)

// FIND
const findGrade = grades.find((el) => el === 88)
findGrade? console.log(`Found ${findGrade} in the array`): console.log(`This grade does not exist`);

// FINDINDEX
const findIndexGrade = grades.findIndex((el) => el < 70)
console.log(`Index of grade below 70: ${findIndexGrade}`)

// SOME
const someGrades = grades.some((el) => el < 60)
console.log(`It is ${someGrades} that some grades are below 60`)

// EVERY
const everyGrades = grades.every((el) => el < 50)
console.log(`It is ${everyGrades} that all grades are below 50`)


// CHECK FOR EXISTENCE
// INCLUDES
const includeGrades =  grades.includes(95)
console.log(`It is ${includeGrades} that the grades includes 95`);


console.log(grades);