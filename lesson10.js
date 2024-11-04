const a = 2
const b = 3

console.log('Multiplication is really just addition!')
console.log('a * b =', a * b, 'is the same as')

let result = 0
for (let i = 0; i < b; i++) {
    result += a;
}
	
console.log(result)
