#!/usr/bin/env node

/**
 * Example file showing the parse, traversal & code generation steps for babel.
 *
 */

const babylon = require("babylon");
const traverse = require("babel-traverse");
const t = require("babel-types");
const generate = require("babel-generator");


const App = `React.createClass({
    render() {
        return (
            React.createElement("div", {className: "class-to-be-removed", randomProp: "sexual-chocolate"},
                                "HAIL JESUS IM HERE")
        );
    }
})`;

// Parse code into AST
var ast = babylon.parse(App);

// Traverse AST
traverse.default(ast, {
    enter(path) {
        if (t.isObjectProperty(path.node)) {
            console.log("Visiting AST node that is an object property w/ name : " + path.node.key.name);
        }
    }
});

// Generate final code w/ sourcemaps
var code = generate.default(ast, null, App);
console.log(code.code);
