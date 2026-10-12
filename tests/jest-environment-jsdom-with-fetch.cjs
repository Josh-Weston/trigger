const JSDOMEnvironment = require('jest-environment-jsdom').default;

// Capture Node's native implementations before Jest creates the jsdom sandbox.
const nodeGlobals = {
    AbortController: globalThis.AbortController,
    AbortSignal: globalThis.AbortSignal,
    Blob: globalThis.Blob,
    DOMException: globalThis.DOMException,
    File: globalThis.File,
    FormData: globalThis.FormData,
    Headers: globalThis.Headers,
    Request: globalThis.Request,
    Response: globalThis.Response,
    clearImmediate: globalThis.clearImmediate,
    fetch: globalThis.fetch,
    performance: globalThis.performance,
    setImmediate: globalThis.setImmediate,
};

module.exports = class JsdomWithNodeFetchEnvironment extends JSDOMEnvironment {
    async setup() {
        await super.setup();
        Object.assign(this.global, nodeGlobals);
    }
};