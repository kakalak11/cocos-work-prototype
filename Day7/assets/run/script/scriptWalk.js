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

        // leftButton: cc.Button,
        // rightButton: cc.Button,
        // jumpButton: cc.Button,
        player: cc.Node,

        _speed: {
            default: 1,
            serializable: false,
        },
        _movingLeft: {
            default: false,
        },
        _movingRight: {
            default: false,
        },
        _jumping: {
            default: false,
        },
        _rotateSpeed: {
            default: 6,
            type: cc.Float,
        },
        _counter: {
            default: 0,
        },
        _fps: {
            default: 60,
        },
    },

    _moveLeft: function () {
        // if (!this._movingLeft) return;
        this.player.x -= this._speed;
        this._counter++;
        if (this._counter >= this._fps) {
            this._counter = 0;
            this._movingLeft = false;
        }
    },

    _jump: function () {
        this.player.y += this._speed;
        this._counter++;
        if (this._counter >= this._fps / 4) {
            this.player.y -= this._speed;
            this.player.angle += 12;
        }
        if (this._counter >= this._fps / 4 * 3) {
            this.player.y -= this._speed;
            this.player.angle -= 12;
        }
        if (this._counter >= this._fps) {
            this._counter = 0;
            this._jumping = false;
            this._enableButton();
        }
    },

    _moveRight: function () {
        this.player.x += this._speed;
        this._counter++;
        if (this._counter >= this._fps) {
            this._counter = 0;
            this._movingRight = false;
            this._enableButton();
        }
    },

    onLoad: function () {
        this.node.on('moveLeft', function (moving) {
            cc.log(moving);
        })
    },

    start() {
    },

    update(dt) {
        // if (this._jumping) {
        //     this._jump();
        // }
        if (this._movingLeft) {
            this._moveLeft();
        }
        // if (this._movingRight) {
        //     this._moveRight();
        // }
    },
});
