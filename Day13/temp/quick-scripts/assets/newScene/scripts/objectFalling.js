(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/newScene/scripts/objectFalling.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'da4420NSyZPDK+3Kt/hlibQ', 'objectFalling', __filename);
// newScene/scripts/objectFalling.js

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

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onCollisionEnter: function onCollisionEnter(other, self) {
        cc.log('on collision enter');
    },

    onCollisionStay: function onCollisionStay(other, self) {
        if (self.tag === 1 && other.tag === 2) {
            cc.log(self.node);
            self.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.5, 2), cc.fadeOut(0.5, 0), cc.callFunc(function () {
                self.size.width = 0;
                self.size.height = 0;
            })), cc.callFunc(function () {
                return self.node.destroy();
            })));
            // other.node.destroy();
        }
    },

    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
    },

    onLoad: function onLoad() {
        var _this = this;

        this.node.on('shoot', function () {
            return _this._shoot = true;
        }, this);
    },
    start: function start() {}
}

// update(dt) {},
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
        //# sourceMappingURL=objectFalling.js.map
        