/**
 * Babel plugin for removing specific properties that match a given regular expression.
 *
 */

"use strict";

exports.default  = function() {
    return {
        visitor: {
            // ObjectProperty Visitor
            ObjectProperty: function ObjectProperty(path, state) {
                /**
                 * Define a visitor for nodes of type `ObjectProperty`.
                 * Nodes w/ property names that match a specified regex will be removed.
                 *
                 * :param path: the path of the visited node
                 * :param state: options that are passed to the plugin
                 *
                 */
                const regexp = new RegExp(state.opts.regexp);
                if (regexp.test(path.node.key.name) || regexp.test(path.node.key.value)) {
                    // Oh sheet, found a match, remove dis beech
                    path.remove();
                }
            }
        }
    };
};

module.exports = exports["default"];
