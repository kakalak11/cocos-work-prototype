(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/run/script/runScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9cc07V8q3VFN4mnFs3wVgem', 'runScript', __filename);
// run/script/runScript.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        _move: null,
        _speed: null,
        _jumpHeight: null,
        _jump: null,
        _counter: 0
    },

    // LIFE-CYCLE CALLBACKS:

    _jumping: function _jumping(frame) {
        if (!this._jump) return;
        this._counter += frame * 60;

        if (this._counter < 30) {
            // this.player.y += this._jumpHeight;
            // this.player.angle += 360 / 2 / 30;
        }

        if (this._counter > 30) {
            // this.player.y -= this._jumpHeight;
            // this.player.angle += 360 / 2 / 30;
        }

        if (this._counter > 60) {
            // this.player.angle = 360;
            // this.player.y = -105;
            this._counter = 0;
            this._jump = false;
            this.node.emit('stop');
        }
    },

    _moving: function _moving(frame) {
        if (!this._move) return;
        this._counter += frame * 60;

        if (this._counter > 60) {
            this._counter = 0;
            this.node.emit('stop');
        }

        // this.player.x += this._speed;
    },

    _tweenMove: function _tweenMove() {},
    onLoad: function onLoad() {
        this.node.on('move', function (value) {
            this._move = true;
            this._speed = value;
            this.player.runAction(cc.moveBy(1, cc.v2(100 * value, 0)).easing(cc.easeIn(2.0)));
        }, this);
        this.node.on('jump', function (value) {
            this._jump = true;
            this._jumpHeight = value;
            this.player.runAction(cc.moveBy(0.5, cc.v2(0, 100)), cc.rotateBy(1, 360));
        }, this);
        this.node.on('stop', function () {
            this._jump = false;
            this._move = false;
        }, this);
    },
    start: function start() {},
    update: function update(dt) {
        this._moving(dt);
        this._jumping(dt);
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
        //# sourceMappingURL=runScript.js.map
        