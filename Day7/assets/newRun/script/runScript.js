cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        _move: null,
        _speed: null,
        _jump: null,
        _counter: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    _moveLeft: function (value) {
        this.node.x += value;
    },

    _jumping: function (frame) {
        this._counter += frame * 60;

        if (this._counter < 30) {
            this.player.y += this._speed;
            this.player.angle += 360 / 2 / 30;
        }

        if (this._counter > 30) {
            this.player.y -= this._speed;
            this.player.angle += 360 / 2 / 30;
        }

        if (this._counter > 60) {
            this.player.angle = 360;
            this.player.y = 0;
            this._counter = 0;
            this._jump = false;
            this.node.emit('jumpDone');
        }
    },

    onLoad() {
        this.node.on('left', function (value) {
            this._move = true;
            this._speed = value;
        }, this);
        this.node.on('right', function (value) {
            this._move = true;
            this._speed = value;
        }, this);
        this.node.on('jump', function (value) {
            this._jump = true;
            this._speed = value;
        }, this);
        this.node.on('stop', function () {
            this._move = false;
        }, this);
    },

    start() {

    },

    update(dt) {
        if (this._move) this.player.x += this._speed;
        else if (this._jump) {
            cc.log(this.player.angle, this.player.y);
            this._jumping(dt);
        }
    },
});
