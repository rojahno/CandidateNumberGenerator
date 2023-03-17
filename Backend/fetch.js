import fs from "fs";

function getCandidateNumber() {
  let numberList = getCandidateNumberList();
  let inUse = true;
  let candidateNumber = "";
  while (inUse) {
    const random = Math.floor(Math.random() * numberList.length);
    candidateNumber = numberList[random];
    inUse = isUsed(candidateNumber);
  }
  storeUsedNumber(candidateNumber);
  return candidateNumber;
}

function getCandidateNumberList() {
  let data = fs.readFileSync("data/candidateNumbers.txt", "utf8");
  let candidateNumberList = data.split("\n");
  return candidateNumberList;
}

function getUsedList() {
  let data = fs.readFileSync("data/usedCandidateNumbers.txt", "utf8");
  let usedList = data.split("\n");
  return usedList;
}

function isUsed(candidateNumber) {
  let usedList = getUsedList();
  return usedList.includes(candidateNumber);
}

function storeUsedNumber(candidateNumber) {
  let usedList = getUsedList();
  usedList.push(candidateNumber);
  let data = usedList.join("\n");
  fs.writeFile(
    "data/usedCandidateNumbers.txt",
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

export { getCandidateNumber };
