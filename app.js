let pronoun = ["the", "our", "a", "you"];
let adj = ["yellow", "fat", "skinny", "red"];
let noun = ["kitty", "cat", "pussycat", "kitten", "wildcat", "michi"];
let extensions = [".com", ".net", ".us", ".io"];

for (let i = 1; i < 9; i++) {
  let domain =
    i +
    " " +
    pronoun[Math.floor(Math.random() * pronoun.length + 0)] +
    adj[Math.floor(Math.random() * adj.length + 0)] +
    noun[Math.floor(Math.random() * noun.length + 0)] +
    extensions[Math.floor(Math.random() * extensions.length + 0)];

  console.log(domain);
}
