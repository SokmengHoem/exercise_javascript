
const chechVowels = (sen) => {
    let countVowels = 0;
    for (let i = 0; i < sen.length; i++) {
        if(sen[i] === "a"||sen[i] === "A" || sen[i] === "e"|| sen[i] === "E" || sen[i] === "i" || sen[i] === "I" || sen[i] === "o" || sen[i] === "O" || sen[i] === "u" || sen[i] === "U"){
            countVowels++;
        }
    }
    return countVowels;
}

let sentences = "I am hungry";

console.log(chechVowels(sentences));