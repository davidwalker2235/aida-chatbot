"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.ChatContext = (0, react_1.createContext)({
    endPoint: '', azureApiKey: '', deploymentId: ''
});
var AidaProvider = function (_a) {
    var children = _a.children, credentials = _a.credentials;
    return ((0, jsx_runtime_1.jsx)(exports.ChatContext.Provider, { value: credentials, children: children }));
};
exports.default = AidaProvider;
