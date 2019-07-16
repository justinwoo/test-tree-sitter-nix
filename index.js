const Parser = require('tree-sitter');
const Nix = require('tree-sitter-nix');

const parser = new Parser();
parser.setLanguage(Nix);

const sourceCode = `
a.b.(1 + 2)
`;
const tree = parser.parse(sourceCode);

console.log(tree.rootNode.toString());

const root = tree.rootNode;
const first = root.children[0]

function printChildren(x) {
  console.log({ type: x.type, string: x.toString() })
  x.children.map((x, i) => {
    console.log({
      i: i,
      type: x.type,
      text: x.text,
      named: x.isNamed
    })
  });
  console.log()
}

printChildren(first)
printChildren(first.children[2])

module.exports = {
  Parser, Nix, parser, tree, first
}
