const Parser = require('tree-sitter');
const Nix = require('tree-sitter-nix');

const parser = new Parser();
parser.setLanguage(Nix);

const sourceCode = `
let
  x = 1;
  y = "no";
  z = "wef";
in "yes: \${hi}"
`;
const tree = parser.parse(sourceCode);

console.log(tree.rootNode.toString());

const root = tree.rootNode;
const let_ = root.children[0]

function printChildren(x) {
  x.children.map((x, i) => {
    console.log(`child ${i}`)
    console.log(x.type)
    console.log(x.text)
    console.log(x.isNamed)
    console.log()
  });
}

printChildren(let_)

let bind_ = let_.children[1]
console.log('bind', bind_)
printChildren(bind_)

module.exports = {
  Parser, Nix, parser, tree, let_, bind_
}
