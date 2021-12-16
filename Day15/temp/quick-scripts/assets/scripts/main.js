(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd2ae2cpXppN8oVwl64+r85p', 'main', __filename);
// scripts/main.js

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
        nodePrefab: cc.Prefab
    },

    ctor: function ctor() {
        this.list = new Array();
    },

    _createNode: function _createNode() {
        for (var i = 0; i < 3; i++) {
            this.nodeInstance = cc.instantiate(this.nodePrefab);
            this.node.addChild(this.nodeInstance);
            this.script = this.nodeInstance.getComponent('nodeScript');
            Emitter.instance.registerEvent('move', this.script._onMove.bind(this.script));
            this.script._index = [i, 0];
            this.list.push({ node: this.nodeInstance, script: this.script });
        }
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            event.keyCode === cc.macro.KEY.space ? Emitter.instance.emit('move') : null;
        }, this);
        Emitter.instance = new Emitter();
        this._createNode();
        // Emitter.instance.emit('move', 'no work yet, just say hi');
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
        //# sourceMappingURL=main.js.map
        