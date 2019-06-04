const Parser = require('tree-sitter');
const Nix = require('tree-sitter-nix');

const parser = new Parser();
parser.setLanguage(Nix);

const sourceCode = 'let x = "hi"; in "yes: ${hi}"';
const tree = parser.parse(sourceCode);

console.log(tree.rootNode.toString());

module.exports = tree
