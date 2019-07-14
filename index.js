const Parser = require('tree-sitter');
const Nix = require('tree-sitter-nix');

const parser = new Parser();
parser.setLanguage(Nix);

const sourceCode = `
let
  x = "hi";
  y = "no";
  z = "wef";
in "yes: \${hi}"
`;
const tree = parser.parse(sourceCode);

console.log(tree.rootNode.toString());

const root = tree.rootNode;
const let_ = root.children[0]

let_.children.map((x, i) => {
  console.log(`child ${i}`)
  console.log(x.type)
  console.log(x.text)
  console.log(x.isNamed)
  console.log()
});

module.exports = {
  Parser, Nix, parser
}
