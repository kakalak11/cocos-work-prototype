cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        _move: null,
        _speed: null,
        _jumpHeight: null,
        _jump: null,
        _counter: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    _moveLeft: function (value) {
        this.node.x += value;
    },

    _jumping: function (frame) {
        if (!this._jump) return;
        this._counter += frame * 60;

        if (this._counter < 30) {
            this.player.y += this._jumpHeight;
            this.player.angle += 360 / 2 / 30;
        }

        if (this._counter > 30) {
            this.player.y -= this._jumpHeight;
            this.player.angle += 360 / 2 / 30;
        }

        if (this._counter > 60) {
            this.player.angle = 360;
            this.player.y = -105;
            this._counter = 0;
            this._jump = false;
            this.node.emit('stop');
        }
    },

    _moving: function(frame) {
        if (!this._move) return;
        this._counter += frame * 60;

        if (this._counter > 60) {
            this._counter = 0;
            this.node.emit('stop');
        }

        this.player.x += this._speed;
    },

    onLoad() {
        this.node.on('move', function (value) {
            this._move = true;
            this._speed = value;
        }, this);
        this.node.on('jump', function (value) {
            this._jump = true;
            this._jumpHeight = value;
        }, this);
        this.node.on('stop', function () {
            this._jump = false;
            this._move = false;
        }, this);
    },

    start() {

    },

    update(dt) {
        this._moving(dt);
        this._jumping(dt);
    },
});
