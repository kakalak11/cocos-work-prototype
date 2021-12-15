"use strict";
cc._RF.push(module, '3eba08RqYpHC6O9bUP91Rj2', 'hahaScript');
// script/hahaScript.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var Emitter = require('event');
cc.Class({
    extends: cc.Component,
    properties: {},
    onClickButton: function onClickButton() {
        this.onHello();
        this.onWelcome();
    },
    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("HELLO", this.onHello.bind(this));
        Emitter.instance.registerOnce("WELCOME", this.onWelcome.bind(this));
    },
    onHello: function onHello(data) {
        cc.log('hello', data);
    },
    onWelcome: function onWelcome(data) {
        cc.log('welcome', data);
    },
    start: function start() {}
});

cc._RF.pop();