"use strict";
cc._RF.push(module, '8ddc9IQfnFOWaNL9kP74I4f', 'HelloWorld');
// Scripts/HelloWorld.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.label.string = this.text;
    },

    // called every frame
    update: function update(dt) {}
});

cc._RF.pop();