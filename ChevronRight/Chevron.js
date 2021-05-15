"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Chevron.css");
const Chevron = (props) => {
    const direction = props.direction || 'right';
    const viewBox = direction === 'up' || direction === 'down'
        ? '0 0 120.5 66.8 '
        : '0 0 66.8 120.5';
    const chevronPath = {
        up: 'M118.58,64.88h0a6.55,6.55,0,0,1-9.27,0L60.25,15.82,11.19,64.88a6.55,6.55,0,0,1-9.27,0h0a6.54,6.54,0,0,1,0-9.26l53.7-53.7a6.55,6.55,0,0,1,9.27,0l53.69,53.7A6.54,6.54,0,0,1,118.58,64.88Z',
        right: 'M1.92,118.58h0a6.55,6.55,0,0,1,0-9.27L51,60.25,1.92,11.19a6.55,6.55,0,0,1,0-9.27h0a6.55,6.55,0,0,1,9.27,0l53.69,53.7a6.55,6.55,0,0,1,0,9.27L11.19,118.58A6.55,6.55,0,0,1,1.92,118.58Z',
        down: 'M1.92,1.92h0a6.55,6.55,0,0,1,9.27,0L60.25,51,109.31,1.92a6.55,6.55,0,0,1,9.27,0h0a6.55,6.55,0,0,1,0,9.27L64.89,64.88a6.55,6.55,0,0,1-9.27,0L1.92,11.19A6.55,6.55,0,0,1,1.92,1.92Z',
        left: 'M64.88,1.92h0a6.55,6.55,0,0,1,0,9.27L15.82,60.25l49.06,49.06a6.55,6.55,0,0,1,0,9.27h0a6.54,6.54,0,0,1-9.26,0L1.92,64.89a6.55,6.55,0,0,1,0-9.27l53.7-53.7A6.54,6.54,0,0,1,64.88,1.92Z'
    };
    return (react_1.default.createElement("span", { className: "chevron-wrapper" },
        react_1.default.createElement("svg", { className: `chevron-${direction} ${props.reversed ? 'reversed' : ''}`, xmlns: "http://www.w3.org/2000/svg", viewBox: viewBox },
            react_1.default.createElement("g", null,
                react_1.default.createElement("g", null,
                    react_1.default.createElement("path", { d: chevronPath[direction] }))))));
};
exports.default = Chevron;
