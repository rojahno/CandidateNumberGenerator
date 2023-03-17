import fs from "fs";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

function generateCandidateNumber() {
  let candidateNumber = "";
  for (let i = 0; i < 2; i++) {
    const random = Math.floor(Math.random() * letters.length);
    let newLetter = letters[random];
    candidateNumber += newLetter;
  }

  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * numbers.length);
    let newNumber = numbers[random];
    candidateNumber += newNumber;
  }
  return candidateNumber;
}

function reset_used_list() {
  fs.writeFile(
    "data/usedCandidateNumbers.txt",
    "",
    {
      encoding: "utf8",
      flag: "w",
      mode: 0o666,
    },
    (err) => {
      if (err) console.log("storecandidateNumber error:");
    }
  );
}

function generateCandidateNumbers() {
  const candidateNumberSet = new Set();
  while (candidateNumberSet.size < 1000) {
    candidateNumberSet.add(generateCandidateNumber());
  }

  let data = Array.from(candidateNumberSet).join("\n");

  fs.writeFile(
    "data/candidateNumbers.txt",
    data,
    {
      encoding: "utf8",
      flag: "w",
      mode: 0o666,
    },
    (err) => {
      if (err) console.log("storecandidateNumber error:");
    }
  );
}

export { generateCandidateNumbers, reset_used_list };
