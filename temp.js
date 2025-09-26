const arr = [['a', 'aa'], ['b', 'bb'], ['c', 'cc']]

function pikWord() {
   return arr[Math.floor(Math.random() * arr.length)]
}
console.log(pikWord());