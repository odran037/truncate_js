# domkit.js

Lightweight vanilla JavaScript DOM helpers.

------------------------------------------------------------------------

## Installation

### Option 1 --- Local File

Download `domkit.js` and include it in your project:

``` html
<script src="domkit.js"></script>
```

### Option 2 --- As ES Module

``` html
<script type="module" src="domkit.js"></script>
```

------------------------------------------------------------------------

## Global Usage

When included via a normal `<script>` tag, the following globals are
available:

-   `qs`
-   `qsa`
-   `domkit`

------------------------------------------------------------------------

## API

### `$()` --- Query Single Element

``` js
const el = qs(".card");
```

Optionally pass a context:

``` js
const el = qs(".item", someElement);
```

------------------------------------------------------------------------

### `$$()` --- Query Multiple Elements

Returns an **array** (not a NodeList).

``` js
const items = qsa(".item");
```

With context:

``` js
const items = qsa(".item", container);
```

------------------------------------------------------------------------

### `on()` --- Add Event Listener

``` js
domkit.on("click", handler);
```

------------------------------------------------------------------------

### `off()` --- Remove Event Listener

``` js
domkit.off("click", handler);
```

------------------------------------------------------------------------

### `ready()` --- DOM Ready

``` js
domkit.ready(() => {
  console.log("DOM is ready");
});
```

------------------------------------------------------------------------

## Example

``` js
domkit.ready(() => {
  const button = $(".btn");

  domkit.on("click", () => {
    console.log("Clicked!");
  });

  $$(".item").forEach(el => {
    el.classList.add("active");
  });
});
```

------------------------------------------------------------------------

## What Gets Exposed

If loaded normally:

-   `window.qs`
-   `window.qsa`
-   `window.domkit`

If imported as module:

-   `module.exports = domkit` (CommonJS)
-   AMD compatible
