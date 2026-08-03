# bidi-web-client

A web-based testing client for WebDriver BiDi protocol commands.

See live at https://firefox-devtools.github.io/bidi-web-client/web/

## Features

- **62 BiDi Commands**: Supports all commands from the WebDriver BiDi specification
- **Module-based Organization**: Commands grouped into tabs by module (session, browser, browsingContext, emulation, network, script, storage, input, webExtension)
- **Spec Links**: Direct links to the specification for each command
- **Parameter Type Hints**: Hover over the info button to see parameter names, types, required/optional status, and default values
- **Custom Commands**: Test experimental or browser-specific commands
- **Protocol Traffic Log**: View all WebSocket requests, responses, and events
- **Command-line API**: Script commands via browser console using `sendCommand(method, params)`

## Usage

### Starting Firefox

Start Firefox with remote debugging enabled:

```bash
firefox --remote-debugging-port --remote-allow-origins=http://localhost:8080
```

Or for the live version:

```bash
firefox --remote-debugging-port --remote-allow-origins=https://firefox-devtools.github.io
```

### Connecting

1. Open the web client (locally or at the live URL)
2. Enter the WebSocket URL: `localhost:9222/session` (or `/session/session_id` to connect to an existing session)
3. Click "Connect"
4. Browse commands by module tabs
5. Fill in parameters and click "Send"

### Adding Custom Commands

Click "add new command" button to test experimental or unlisted commands. Custom commands appear in the "Custom" tab.

## Development

### Prerequisites

- Node.js (for build scripts)
- Python 3 (for local HTTP server, optional)

### Building Commands Data

The command definitions are auto-generated from the WebDriver BiDi CDDL specification:

```bash
npm run build:commands
```

This fetches and parses the CDDL file from [webref](https://github.com/w3c/webref) and generates `web/scripts/commands-generated.js`. No local spec repository is required.

### Running Locally

Serve the `web/` directory with any HTTP server:

```bash
cd web
python3 -m http.server 8080
```

Then open http://localhost:8080 in your browser.

### Project Structure

```
bidi-web-client/
├── scripts/
│   └── parse-spec.js           # Spec parser (generates commands)
├── web/
│   ├── index.html              # Main page
│   ├── style.css               # Styling
│   └── scripts/
│       ├── app.js              # Application orchestration
│       ├── commands-generated.js  # Auto-generated commands (DO NOT EDIT)
│       ├── ui.js               # UI management and tabs
│       ├── websocket-client.js # WebSocket communication
│       ├── command-line.js     # Console API
│       └── event-emitter.js    # Event handling utility
```

## Updating Commands

When the WebDriver BiDi spec is updated:

1. Run `npm run build:commands` (it fetches the latest CDDL from webref automatically)
2. Commit the updated `web/scripts/commands-generated.js`

The generated file is committed to the repository so the webapp works on GitHub Pages without a build step.

### CDDL Source

Commands are parsed from the official CDDL file maintained by W3C:
https://github.com/w3c/webref/blob/main/ed/cddl/webdriver-bidi-remote-cddl.cddl

This CDDL file is automatically extracted from the WebDriver BiDi spec and provides a cleaner, more structured format for parsing than the Bikeshed HTML source.
