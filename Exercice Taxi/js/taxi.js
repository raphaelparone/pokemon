let characterName = "John";
let mentalHealth = 10;

let radio = ["Freeze Raël - Freeze Corleone", "Fetty Wap - Maes", "AMG - H. La Drogue", "Cracklanders - Guy2bezbar", "Anissa - Wejdene"];
let remainingRedLights = 30;
let taxiChanges = 0;

function chooseMusic() {
  let index = Math.floor(Math.random() * radio.length);
  return radio[index];
}

while (remainingRedLights > 0 && mentalHealth > 0) {
  let music = chooseMusic();
  remainingRedLights--;

  if (music === "Anissa - Wejdene") {
    mentalHealth--;
    taxiChanges++;
    }

  console.log("Music : " + music + " - Red lights remaining: " + remainingRedLights);
}

if (remainingRedLights === 0) {
  console.log(characterName + " arrived after " + taxiChanges + " changes.");
} else {
  console.log("Explosion");
}