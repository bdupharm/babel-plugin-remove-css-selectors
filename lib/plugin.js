#!/usr/bin/env node

const babylon = require("babylon");
const traverse = require("babel-traverse");
const t = require("babel-types");


const App = `React.createClass({
    render() {
        return (
            React.createElement("div", {className: "class-to-be-removed", randomProp: "sexual-chocolate"},
                                "HAIL JESUS IM HERE")
        );
    }
})`;

var ast = babylon.parse(App, {
                            sourceType: "script",
                            plugins: ["jsx"]
                        });

traverse.default(ast, {
    enter(path) {
        if (path.node.type === "ObjectProperty") {
            console.log(path.node);
        }
    }
});
