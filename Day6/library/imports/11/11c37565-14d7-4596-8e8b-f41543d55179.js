"use strict";
cc._RF.push(module, '11c37VlFNdFlo6L9BVD1VF5', 'scriptKey');
// run/script/scriptKey.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                console.log('Press a key');
                this._onLeft();
                break;
            case cc.macro.KEY.d:
                console.log('Press d key');
                this._onRight();
                break;
            case cc.macro.KEY.w:
                console.log('Press w key');
                this._onJump();
                break;

        }
    },
    onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                console.log('release a key');
                break;
            case cc.macro.KEY.d:
                console.log('release d key');
                break;
            case cc.macro.KEY.w:
                console.log('release w key');
                break;
        }
    },

    onLoad: function onLoad() {
        var button = this.getComponent('scriptButton');
        cc.log(button);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, button);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, button);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();