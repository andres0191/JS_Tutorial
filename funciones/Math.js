/* Min and Max con Math */
console.log('***********Min and Max con Math***********')
const array1 = [1 ,2 ,5 ,7, -2, -9]
const small = Math.min.apply(Math, array1)
const hig = Math.max.apply(Math, array1)
console.log('Min number: ', small)
console.log('Max number: ', hig)