"use strict";
cc._RF.push(module, 'bf2c52u7CJG4aDxkeCzkBsk', 'nodeScript');
// scripts/nodeScript.js

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

var Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        _index: null
    },

    ctor: function ctor() {
        this.scriptName = 'node';
    },


    // LIFE-CYCLE CALLBACKS:

    _onMove: function _onMove(data) {
        // cc.log('this listens to the same emitter channel');
        this.node.emit('move', this._index);
    },

    _move: function _move(data) {
        if (data === this._index) {
            cc.log('this was called from the same node');
            return;
        }
        cc.log('this was called from the cc.Event', this._index);
        cc.log('this is the caller data: ' + data);
    },

    onLoad: function onLoad() {
        cc.log('node instantiated');
        this.node.on('move', this._move, this);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();