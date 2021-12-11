"use strict";
cc._RF.push(module, '56d0eMh5kBHYpMohrYyFB0S', 'animationScript');
// Animation/scripts/animationScript.js

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
        animation: sp.Skeleton,
        footstepSound: cc.AudioSource
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var _this = this;

        this.animation.setEventListener(function (entry, event) {
            _this.footstepSound.play();
            var data = event.data;

            cc.log(data.name);
        }, this);
    },
    start: function start() {
        this.animation.setAnimation(0, 'walk', false);
        // this.animation.setAnimation(0, 'aim', false);
        // this.animation.addAnimation(0, 'death', false);
        // this.animation.addAnimation(0, 'hoverboard', false);
        // this.animation.addAnimation(0, 'idle', false);
        // this.animation.addAnimation(0, 'idle-turn', false);
        // this.animation.addAnimation(0, 'portal', false);
        this.animation.addAnimation(0, 'run', false);
        // this.animation.addAnimation(0, 'run-to-idle', false);
        // this.animation.addAnimation(0, 'shoot', false);
        // this.animation.addAnimation(0, 'walk', false);

        this.animation.setTrackCompleteListener(this.animation.getCurrent(0), function () {
            cc.log('complete track');
        });
    }
}

// update (dt) {},
);

cc._RF.pop();