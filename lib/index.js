"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AidaProvider = exports.Aida = void 0;
var aida_1 = require("./components/aida");
Object.defineProperty(exports, "Aida", { enumerable: true, get: function () { return __importDefault(aida_1).default; } });
var aidaProvider_1 = require("./aidaProvider");
Object.defineProperty(exports, "AidaProvider", { enumerable: true, get: function () { return __importDefault(aidaProvider_1).default; } });
