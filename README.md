# CSS Custom Props

Get and set CSS custom properties (variables) on any element.

## Installation

```js
npm install css-custom-props
```

## Usage

### Example

```js
import cssVar from 'css-custom-props';

// Set as object
cssVar.set({ 'unprefixed-var': '16px', '--prefixed-var': 0.64 });

// Set as array
cssVar.set([
  ['unprefixed-var', '16px'],
  ['--prefixed-var', 0.64],
]);

// Get value
cssVar.get('unprefixed-var'); // => '16px'
cssVar.get('--prefixed-var'); // => '0.64'
```

### Options

#### Set

```js
// Default options
const options = {
  element: document.documentElement, // HTMLElement
};

cssVar.set({ 'unprefixed-var': '16px' }, options);
```

#### Get

```js
// Default options
const options = {
  element: document.documentElement, // HTMLElement
  parse: false, // boolean | 'int' | 'float'
};

// Get value
cssVar.get('unprefixed-var', options); // => '16px'

// Get parsed value
cssVar.get('unprefixed-var', { parse: true }); // => 16

// Value if element is null
cssVar.get('unprefixed-var', { element: null }); // => ''
```
