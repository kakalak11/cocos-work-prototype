"use strict";
cc._RF.push(module, '849ebZtTLNBa6tIjZPwsOmh', 'javaScript');
// script/javaScript.js

'use strict';

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    start: function start() {},
    onHello: function onHello() {
        Emitter.instance.emit('HELLO', "hellooooooo");
    },
    onWelcome: function onWelcome() {
        Emitter.instance.emit('HELLO', "Welcomeeeee");
    }
});

cc._RF.pop();