"use strict";
cc._RF.push(module, '88b9frFMkRF4ZI9LNqbfOwK', 'spaceboy');
// newScene/scripts/spaceboy.js

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
        _animating: false
    },

    // LIFE-CYCLE CALLBACKS:

    _move: function _move(direction) {
        var _this = this;

        this.direction = direction;
        this.direction < 0 ? this.node.scaleX = -0.1 : this.node.scaleX = 0.1;
        this.action = cc.sequence(cc.callFunc(function () {
            return _this.animation.setAnimation(0, 'run', true);
        }), cc.moveBy(1, 25 * this.direction, 0), cc.callFunc(function () {
            _this.animation.setAnimation(0, 'idle', true);
        }));
        this.node.runAction(this.action);
    },

    _jump: function _jump() {
        var _this2 = this;

        this.animation.setAnimation(0, 'jump', false);
        this.animation.setCompleteListener(function () {
            _this2.animation.setCompleteListener(function () {});
            _this2.animation.setAnimation(0, 'idle', true);
        });
    },

    _onKeyDown: function _onKeyDown(event) {
        var _this3 = this;

        cc.log('key down');
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.node.stopAction(this.action);
                this.animation.setAnimation(0, 'shoot', true);
                this.animation.setCompleteListener(function () {
                    _this3.animation.setCompleteListener(function () {});
                    _this3.animation.setAnimation(0, 'idle', true);
                });
                break;
            case cc.macro.KEY.a:
                this._move(-1);
                break;
            case cc.macro.KEY.d:
                this._move(1);
                break;
            case cc.macro.KEY.w:
                this._jump();
                break;

        }
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        var _this4 = this;

        this._collision = true;
        cc.log('on collision enter');
        if (other.tag === 1) {
            this.node.stopAction(this.action);
            this.animation.setAnimation(0, 'shoot', true);
            this.animation.setCompleteListener(function () {
                _this4.animation.setCompleteListener(function () {});
                _this4.animation.setAnimation(0, 'idle', true);
            });
            return;
        }
        this.node.stopAction(this.action);
        this.animation.setAnimation(0, 'jump', false);
        this.node.runAction(cc.spawn(cc.moveBy(1, 100 * this.direction, 0), cc.callFunc(function () {
            return _this4.node.scaleX = 0.1 * _this4.direction;
        })));
        this.animation.setCompleteListener(function () {
            _this4.animation.setCompleteListener(function () {});
            _this4.animation.setAnimation(0, 'idle', true);
        });
    },

    onCollisionStay: function onCollisionStay(other, self) {},

    onCollisionExit: function onCollisionExit(other, self) {
        this._collision = false;
        console.log('on collision exit');
    },

    onLoad: function onLoad() {
        this.animation = this.node.getComponent('sp.Skeleton');
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
    },
    start: function start() {},
    update: function update(dt) {
        // this.node.runAction(cc.moveBy(0.25, 10, 0));
    }
});

cc._RF.pop();