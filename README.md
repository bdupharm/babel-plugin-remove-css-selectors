#Babel Plugin for Removing Object Properties

Removes nodes that match a supplied regex if the node is of type `ObjectProperty`.

## Installation

```sh
$ npm install babel-plugin-remove-object-properties
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": [["transform-remove-console", { "regexp", "toBeRemoved*" }]]
}
```
