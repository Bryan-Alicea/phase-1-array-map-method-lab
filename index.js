const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const upperCaseTitles = tutorials.map(function (element){
    const separatedTitle = element.split(' ')
    
    const upperCaseFirstLetter = separatedTitle.map(function (letter){
      return letter[0].toUpperCase() + letter.slice(1)
    })
    const joinedUpperCaseString = upperCaseFirstLetter.join(' ') 
    return joinedUpperCaseString
    })
  
  return upperCaseTitles
}

