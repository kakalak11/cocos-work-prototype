"use strict";
cc._RF.push(module, '8c414FTWytLtrQyH6wZNcJL', 'labelScript');
// script/labelScript.js

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

    _primeNumber: function _primeNumber() {
        var array = new prime(3000);

        function prime(number) {
            var array = new Array(number).fill(null);
            var primeArray = [];

            for (var i = 2; i < number; i++) {
                if (array[i] === null) {
                    primeArray.push(i);
                    for (var j = i * i; j < number; j += i) {
                        array[j] = 0;
                    }
                }
            }

            return primeArray;
        }

        this.getComponent('cc.Label').string = array;
    },

    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._primeNumber, this);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();