function countWords(userPara) {
  if (typeof userPara !== "string") return "Invalid Input";
  const userWords = userPara.split(" ");
  const totalWords = userWords.length;
  return totalWords;
}

function getCorrectness(rawPara, userPara) {
  if (typeof rawPara !== "string" || typeof userPara !== "string")
    return "Invalid Input";
  let rawWords = rawPara.split(" ");

  rawWords = rawWords
    .filter((element) => {
      if (element.match(/[a-z]/i)) return element;
    })
    .map((element) => element.replace(/\n/g, ""));

  const userWords = userPara.split(" ").filter((element) => {
    if (element.match(/[a-z]/i)) return element;
  });

  if (userWords.length === 0) return 0;

  let counter = 0;
  for (let index = 0; index < userWords.length; index++) {
    if (userWords[index] !== rawWords[index]) counter = counter + 1;
  }

  const totalWords = userWords.length;
  if (counter === 0) return 100;
  if (counter > 0 && counter < totalWords)
    return Math.floor(((totalWords - counter) / totalWords) * 100);
  else return 0;
}

function getCaseMistake(rawPara, userPara) {
  if (typeof rawPara !== "string" || typeof userPara !== "string")
    return "Invalid Input";
  let rawWords = rawPara.split(" ");
  rawWords = rawWords
    .filter((element) => {
      if (element.match(/[a-z]/i)) {
        return element;
      }
    })
    .map((element) => element.replace(/\n/g, ""));
  let userWords;
  if (userPara) userWords = userPara.split(" ");
  else userWords = [];
  userWords = userWords
    .filter((element) => {
      if (element.match(/[a-z]/i)) {
        return element;
      }
    })
    .map((element) => element.replace(/\n/g, ""));

  let normalCounter = 0;
  let caseCounter = 0;
  for (let index = 0; index < userWords.length; index++) {
    if (userWords[index] !== rawWords[index]) {
      normalCounter = normalCounter + 1;
      if (userWords[index].toLowerCase() === rawWords[index]) {
        caseCounter = caseCounter + 1;
      }
      if (userWords[index] === rawWords[index].toLowerCase()) {
        caseCounter = caseCounter + 1;
      }
    }
  }

  return caseCounter;
}

export { countWords, getCorrectness, getCaseMistake };
