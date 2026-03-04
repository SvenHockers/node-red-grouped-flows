# node-red-plugin-grouped-flows

A Node-RED editor plugin that replaces the default single workspace tab row with a grouped two-row tab layout.

This helps when you have many flows and want fast navigation by logical group.

## Features

- Adds a top row for groups and a second row for flows in the selected group.
- Keeps using Node-RED's native tab and workspace APIs.
- Supports drag-and-drop reordering for flows and groups.
- Supports double-clicking a flow tab to open the workspace edit dialog.

## Requirements

- Node-RED `>= 3.0.0`
- Node.js `>= 14`

Then restart Node-RED and hard-refresh the browser editor.

## Usage

In the `Edit Flows` window a new property is added: `Group`. When this property is specified the flow will automatically be grouped under this header.

### Debug mode

Enable in browser console:

```js
window.nrGroupedTabsDebug(true)
```

Disable:

```js
window.nrGroupedTabsDebug(false)
```

Restart Node-RED after removal.

## License

Apache-2.0
