import {syllable} from "syllable"

export function checkIfEmailisValid(email) {
    if(email.includes("@")){
        console.log("Es hat ein @", email)
        return true;
    }else{
        console.log("Es hat kein @", email)
        return false;
    }
}

export function checkTextComplexity(text){
  //  console.log("TEXXT", text)
   const totalwords = countWordsinSentence(text);
   const totalSentences = countSentencesInText(text);
   const averageSyllables = averageSyllablesPerWord(text);

  /* Testsyll(text);
    console.log("TotalW: ", totalwords)
    console.log("TotalS: ", totalSentences)
    console.log("averageSyl: ", averageSyllables)*/

   const averageWordsPerSentence = totalSentences === 0 ? totalwords : totalwords / totalSentences;

   const FleschKincaid = (0.39*averageWordsPerSentence) + (11.8*averageSyllables) - 15.9
   console.log("FleschKincaid", FleschKincaid.toFixed(2))
}

function countWordsinSentence(text){
    const textArray = text.trim().split(/\s+/).filter(word => word.length > 0);
    return textArray.length;
}

function countSentencesInText(text){
    const regex = /[.!?]/;
    const sentenceCount = text.split(regex);
    return sentenceCount.length - 1
}

function averageSyllablesPerWord(text){
    const textArray = text.trim().split(/\s+/).filter(word => word.length > 0);
    let countAllSyllable = 0;

    for (let i = 0; i < textArray.length; i++){
        countAllSyllable += syllable(textArray[i])
    }

    return countAllSyllable / textArray.length 
}

function Testsyll(text){
    console.log("JOOO", syllable(text))
}