# node-red-plugin-grouped-flows

A Node-RED editor plugin that replaces the default single-row flow tab bar with a two-row grouped layout. Flows are organised into named groups; the top row displays group tabs and the bottom row displays the flows belonging to the selected group. Ungrouped flows appear as standalone tabs in the top row.

Group assignments are persisted server-side and shared across all connected editor sessions. Changes take effect for all users after a Deploy, following the same lifecycle as standard flow changes.

## Requirements

- Node-RED >= 3.0.0
- Node.js >= 18

## Installation

Install via the Node-RED Palette Manager, or from the command line in your Node-RED user directory:

```
npm install @shockers/node-red-plugin-grouped-flows
```

Restart Node-RED after installation.

## Usage

### Assigning a flow to a group

1. Double-click a flow tab, or open the flow's **Edit** dialog (right-click the tab > **Edit**).
2. In the **Group** field, enter a group name.
3. Click **Done**, then **Deploy**.

The flow will appear under its group tab. Multiple flows can share the same group name; they will all appear in that group's row.

### Navigating flows

- Click a group tab in the top row to display that group's flows in the bottom row.
- Click any flow tab in the bottom row to activate that workspace.
- Ungrouped flows appear directly in the top row as standalone tabs.

### Reordering

Flows and groups support drag-and-drop reordering. Reordering is persisted on the next Deploy.

### Removing a group assignment

Open the flow's **Edit** dialog, clear the **Group** field, and Deploy.

## Group Persistence

Group assignments are stored server-side in `nr-grouped-flows-groups.json` in your Node-RED user directory. This file is written on each Deploy and read on editor load, ensuring all connected users see the same group layout after a Deploy.

Prior to version 0.3.0, group assignments were stored in the browser's localStorage and were therefore device-specific. After upgrading to 0.3.0, group assignments will initially appear empty; reassign flows to groups and Deploy once to restore the shared state.

## CSS Customisation

The plugin exposes CSS custom properties for overriding the default tab area heights:

| Property | Default | Description |
|---|---|---|
| `--nr-grouped-flows-tab-height-dual` | `72px` | Height of the tab area when both rows are visible |
| `--nr-grouped-flows-tab-height-single` | `36px` | Height of the tab area when only the top row is visible |

These properties are defined on `#red-ui-workspace.nr-grouped-flows-enabled`. Override them in a custom theme or a browser extension stylesheet targeting the same selector.

## Debug Mode

Debug logging can be toggled from the browser console without restarting Node-RED:

```js
window.nrGroupedTabsDebug(true)   // enable
window.nrGroupedTabsDebug(false)  // disable
```

Debug output is written to the browser console under the `[nr-grouped-flows][debug]` prefix.

## License

Apache-2.0
