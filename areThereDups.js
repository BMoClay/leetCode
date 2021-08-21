const areThereDups = (...args) => {

    let frqObj = {}

   for (let i = 0; i < args.length; i++){
      args[i] in frqObj ? true : frqObj[args[i]] = 1
   }
   return false
}
let args = ['a', 'b', 'c', 'a']
console.log(areThereDups(...args))