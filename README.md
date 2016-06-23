#Babel Plugin for Removing Object Properties

Removes nodes in the AST (abstract syntax tree) that match a supplied regex if the node is of type `ObjectProperty`.

## Why?
For testing, we want to add attributes to react elements like:
```jsx
<div
    data-id="test">
</div>
```
We wanted a plugin that would then strip these attributes during the transpilation phase.

## Installation

```sh
$ npm install babel-plugin-remove-object-properties
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": [["remove-object-properties", { "regexp": "data-*" }]]
}
```
