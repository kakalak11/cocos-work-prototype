(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/30ease/Scripts/30easeScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ec34fzgy0dKPq9njdd2/xaM', '30easeScript', __filename);
// 30ease/Scripts/30easeScript.js

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

cc.Class({
    extends: cc.Component,

    properties: {
        object: cc.Node,
        action: null
    },
    // LIFE-CYCLE CALLBACKS:

    onClick: function onClick(event, message) {
        this.object.setPosition(cc.v2(-300, 150));
        eval("this.object.runAction(cc.moveBy(2, 600, 0).easing(cc." + message + "(2)));");
        cc.log(message);
    },
    onBound: function onBound() {
        this.object.setPosition(cc.v2(-300, 150));
        var spawn = cc.spawn(cc.moveBy(2, 600, 0), cc.sequence(cc.moveBy(1, 0, 100), cc.moveBy(1, 0, -100)).easing(cc.easeBounceInOut(2)));
        this.object.runAction(spawn);
    },
    onReset: function onReset() {
        this.object.setPosition(cc.v2(-300, 150));
    },
    onLoad: function onLoad() {},
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
        //# sourceMappingURL=30easeScript.js.map
        