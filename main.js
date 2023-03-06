function duplicateCount(text){
  let charMap = {}
  for (let i of text.toLowerCase()) {
    charMap[i] = charMap[i] + 1 || 1
  }
  
  let result = 0
  
  for (let i in charMap) {
    if (charMap[i] > 1) {
      result +=1
    }
  }
  
  return result
}


console.log(duplicateCount('aabbcde')) // => 2
console.log(duplicateCount('aBcDeFFHjklfmggcde')) // => 5
console.log(duplicateCount('abcdefghijlkmnopqrstuvwxyz')) // => 0