/**
 * Babel plugin for removing specific properties
 *
 */

exports.default  = function({ types: t }) {
    return {
        visitor: {
            // ObjectProperty Visitor
            ObjectProperty: function(path, state) {
                /**
                 * Define a visitor for nodes of type `ObjectProperty`.
                 * Nodes w/ property names that match a specified regex will be removed.
                 *
                 * :param path: the path of the visited node
                 * :param state: options that are passed to the plugin
                 *
                 */
                if (state.opts.regex.test(path.node.key.name.test)) {
                    // Oh sheet, found a match, remove dis beech
                    path.remove();
                }
            }
        }
    };
};
