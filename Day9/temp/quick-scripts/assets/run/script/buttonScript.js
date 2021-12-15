(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/run/script/buttonScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3a74a3sA6RPHrjGKHb8Xd2P', 'buttonScript', __filename);
// run/script/buttonScript.js

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
        leftButton: cc.Node,
        rightButton: cc.Node,
        jumpButton: cc.Node,
        buttons: [cc.Button]
    },

    // LIFE-CYCLE CALLBACKS:

    _onStop: function _onStop() {
        this.buttons.forEach(function (element) {
            element.getComponent('cc.Button').interactable = true;
        });
        return;
    },

    _onMove: function _onMove() {
        this.buttons.forEach(function (element) {
            element.getComponent('cc.Button').interactable = false;
        });
        return;
    },

    _addEventListener: function _addEventListener() {
        this.leftButton.on('click', function () {
            this.node.emit('move', -2);
        }, this);
        this.rightButton.on('click', function () {
            this.node.emit('move', 2);
        }, this);
        this.jumpButton.on('click', function () {
            this.node.emit('jump', 3);
        }, this);

        this.node.on('stop', this._onStop, this);
        this.node.on('move', this._onMove, this);
        this.node.on('jump', this._onMove, this);
        return 'event added';
    },

    onLoad: function onLoad() {
        this._addEventListener();
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=buttonScript.js.map
        