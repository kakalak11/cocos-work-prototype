(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/animationScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cac26fspMJMs4P+zoKK9wW+', 'animationScript', __filename);
// Scripts/animationScript.js

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
        animation: sp.Skeleton
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

        this.animation.setEventListener(function (entry, event) {
            var data = event.data;

            cc.log(data.name);
        });
    },
    start: function start() {
        this.animation.setAnimation(0, 'aim', false);
        this.animation.addAnimation(0, 'death', false);
        this.animation.addAnimation(0, 'hoverboard', false);
        this.animation.addAnimation(0, 'idle', false);
        this.animation.addAnimation(0, 'idle-turn', false);
        this.animation.addAnimation(0, 'portal', false);
        this.animation.addAnimation(0, 'run', false);
        this.animation.addAnimation(0, 'run-to-idle', false);
        this.animation.addAnimation(0, 'shoot', false);
        this.animation.addAnimation(0, 'walk', false);
    }
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
        //# sourceMappingURL=animationScript.js.map
        