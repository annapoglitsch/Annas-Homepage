import { Duplicate } from "grommet-icons";
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

   Testsyll(text);
    console.log("TotalW: ", totalwords)
    console.log("TotalS: ", totalSentences)
    console.log("averageSyl: ", averageSyllables)
    
   const averageWordsPerSentence = totalSentences === 0 ? totalwords : totalwords / totalSentences;

const FleschReadingEase = 206.835 - (1.015 * averageWordsPerSentence) - (84.6 * averageSyllables)
   //const FleschReadingEase = (0.39*averageWordsPerSentence) + (11.8*averageSyllables) - 15.9
   console.log("FleschReadingEase", FleschReadingEase.toFixed(2))

   if (FleschReadingEase > 100){
    console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und ist somit überhalb der Tabelle. Dieser Text ist sehr einfach zu verstehen.")
   } else if (FleschReadingEase >= 90 && FleschReadingEase <= 100) {
      console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und wird somit von Schüler*innen in der 5. amerikansichen Schulstufe verstanden. Dieser Text ist einfach zu verstehen.")
   } else if (FleschReadingEase >= 80 && FleschReadingEase < 90) {
     console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und wird somit von Schüler*innen in der 6. amerikansichen Schulstufe verstanden. Dieser Text ist einfach zu verstehen.")
   } else if (FleschReadingEase >= 70 && FleschReadingEase < 80){
     console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und wird somit von Schüler*innen in der 7. amerikansichen Schulstufe verstanden. Dieser Text ist gerade noch einfach zu verstehen.")
   } else if (FleschReadingEase >= 60 && FleschReadingEase < 70){
      console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und wird somit von Schüler*innen in der 8. und 9. amerikansichen Schulstufe verstanden. Dieser Text ist für 13. bis 15. Jährige einfach zu verstehen.")
   } else if (FleschReadingEase >= 50 && FleschReadingEase < 60){
      console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und wird somit von Schüler*innen in der 10. bis 12. amerikansichen Schulstufe verstanden. Dieser Text ist ein wenig Schwierig zu verstehen.")
   } else if (FleschReadingEase >= 30 && FleschReadingEase < 50){
     console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und wird somit von Personen im College verstanden. Dieser Text ist schwierig zu verstehen.")
   } else if (FleschReadingEase >= 10 && FleschReadingEase < 30){
      console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und wird somit von Absolvent*innen des College verstanden. Dieser Text ist sehr schwer zu verstehen.")
   } else if (FleschReadingEase >= 0 && FleschReadingEase < 10){
      console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und wird somit von Absolvent*innen einer Universität verstanden. Dieser Text ist extrem schwer zu verstehen.")
   } else if (FleschReadingEase < 0){
      console.log("Die Flesch Reading Ease Punktezahl liegt bei", FleschReadingEase.toFixed(2), "und ist somit unterhalb der Tabelle. Dieser Text ist kaum zu verstehen.")
   } 
}

function countWordsinSentence(text){
    const textArray = text.trim().replace(/[.,!?;:()"]/g, '').split(/\s+/).filter(word => word.length > 0);
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

export function checkNumberOfIAOptions(cards){
  /*  let  categoryArray = [];

    for(let i = 0; i < cards.length; i++){
         const category = cards[i].category
        if (!categoryArray.includes(category)){
            categoryArray.push(category)
        }
    }*/

    if (cards.length > 7){
        console.log("Die Anzahl der Filterauswahlmöglichkeiten liegt bei ", cards.length, " und fällt somit unter `Nicht Genügend´.")
    } else if (cards.length === 6 || cards.length === 7){
        console.log("Die Anzahl der Filterauswahlmöglichkeiten liegt bei ", cards.length, " und fällt somit unter `Genügend´.")
    } else if (cards.length === 4 || cards.length === 5){
        console.log("Die Anzahl der Filterauswahlmöglichkeiten liegt bei ", cards.length, " und fällt somit unter `Befriedigend.")
    } else if (cards.length === 2 || cards.length === 3){
        console.log("Die Anzahl der Filterauswahlmöglichkeiten liegt bei ", cards.length, " und fällt somit unter `Gut´.")
    } else if (cards.length === 1){
        console.log("Die Anzahl der Filterauswahlmöglichkeiten liegt bei ", cards.length, " und fällt somit unter `Sehr Gut´.")
    }
}

export function checkNumberOfIAElements(filteredCards){

    if (filteredCards.length > 7){
          console.log("Die Anzahl der Informationsarchitekturelemente liegt bei ", filteredCards.length, " und fällt somit unter `Nicht Genügend´.")
    } else if (filteredCards.length === 6 || filteredCards.length === 7){
          console.log("Die Anzahl der Informationsarchitekturelemente liegt bei ", filteredCards.length, " und fällt somit unter `Genügend´.")
    } else if (filteredCards.length === 4 || filteredCards.length === 5){
         console.log("Die Anzahl der Informationsarchitekturelemente liegt bei ", filteredCards.length, " und fällt somit unter `Befriedigend.")
    } else if (filteredCards.length === 2 || filteredCards.length === 3){
          console.log("Die Anzahl der Informationsarchitekturelemente liegt bei ", filteredCards.length, " und fällt somit unter `Gut´.")
    } else if (filteredCards.length === 1){
           console.log("Die Anzahl der Informationsarchitekturelemente liegt bei ", filteredCards.length, " und fällt somit unter `Sehr Gut´.")
    }
}