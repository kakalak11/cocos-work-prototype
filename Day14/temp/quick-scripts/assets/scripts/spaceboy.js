(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/spaceboy.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '88b9frFMkRF4ZI9LNqbfOwK', 'spaceboy', __filename);
// scripts/spaceboy.js

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
        _animating: false,
        _moving: null,
        _direction: 1,
        _canShoot: null,
        bulletPrefab: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    _jump: function _jump() {
        var _this = this;

        this.jumpThrough = true;
        this._moving = true;
        this.animation.setAnimation(0, 'jump', false);
        this.node.runAction(cc.moveBy(1, 120 * this._direction, 0));
        this.animation.setCompleteListener(function () {
            _this.animation.setCompleteListener(function () {});
            _this.animation.setAnimation(0, 'idle', true);
            _this.jumpThrough = false;
            _this._moving = false;
        });
    },

    _move: function _move(direction) {
        var _this2 = this;

        this._direction = direction;
        if (this._moving) return;
        this._moving = true;
        this.action = cc.sequence(cc.spawn(cc.moveBy(0.5, 60 * this._direction, 0).easing(cc.easeSineInOut(0.5)), cc.scaleTo(0, 0.1 * this._direction, 0.1), cc.callFunc(function () {
            return _this2.animation.setAnimation(0, 'run', true);
        })), cc.callFunc(function () {
            return _this2._moving = false;
        }), cc.callFunc(function () {
            return _this2.animation.addAnimation(0, 'idle', true);
        }));
        this.node.runAction(this.action);
    },

    _shoot: function _shoot() {
        var _this3 = this;

        this.bullet = cc.instantiate(this.bulletPrefab);
        this.node.parent.addChild(this.bullet);
        this.bullet.setPosition(cc.v2(this.node.getPosition(cc.v2())));
        this.bullet.y += 25;
        this.bullet.scale = 0.1;
        this.script = this.bullet.getComponent('bullet');
        this.script.direction = this._direction;
        this.animation.setAnimation(0, 'shoot', false);
        this.animation.setCompleteListener(function () {
            _this3.animation.setCompleteListener(function () {});
            _this3.animation.setAnimation(0, 'idle', true);
        });
    },

    _onKeyDown: function _onKeyDown(event) {
        cc.log('key down');
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this._shoot();
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
        cc.log('on collision enter');
    },

    onCollisionStay: function onCollisionStay(other, self) {
        if (!this.jumpThrough) {
            self.node.x += -this._direction * 2;
            this.node.stopAction(this.action);
            this.animation.setAnimation(0, 'idle', true);
            this._moving = false;
        }
    },

    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
        // this._collision = false;
        this._canShoot = false;
    },

    onLoad: function onLoad() {
        this.animation = this.node.getComponent('sp.Skeleton');
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
    },
    start: function start() {
        this.node.emit('test');
    },
    update: function update(dt) {
        // this.node.runAction(cc.moveBy(0.25, 10, 0));
    }
});

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
        //# sourceMappingURL=spaceboy.js.map
        