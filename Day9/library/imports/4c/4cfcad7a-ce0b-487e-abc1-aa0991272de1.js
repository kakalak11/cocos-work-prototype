"use strict";
cc._RF.push(module, '4cfca16zgtIfqvBqgmRJy3h', 'run');
// newRun/script/run.js

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

    onLoad: function onLoad() {
        var _this = this;

        var haha = cc.sequence(cc.spawn(cc.moveTo(1, 100, 100), cc.rotateBy(1, 360)), cc.scaleTo(1, 2));
        // var tween = cc.tween(this.node)
        //     .to(1, { position: cc.v2(100, 100), angle: -360 })
        //     .to(1, { scale: 2 })
        //     .start()

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function () {
            cc.tween(this.node).to(1, { position: cc.v2(100, 100), angle: -360 }).to(1, { scale: 2 }).start();
        }, this);

        this.node.on('mousedown', function () {
            return _this.node.runAction(haha);
        }, this);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();