function hyphenateWords(str){
  let letterNum = /[0-9a-zA-Z]+$/
  if((str.match(letterNum))){
    return str.replaceAll(' ', '-').toLowerCase()
  }
}

console.log(hyphenateWords('yy yy'))

export {hyphenateWords}