const input = require("fs").readFileSync("./dev/stdin", "utf8");
const lines = input.split("\n");

const tweet = lines.shift();
console.log(tweet);

if (tweet.length > 140) {
    console.log(`MUTE`);
} else {
    console.log(`TWEET`);
}


