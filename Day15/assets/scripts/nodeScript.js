// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
        _index: null,
    },

    ctor() {
        this.scriptName = 'node';
    },

    // LIFE-CYCLE CALLBACKS:

    _onMove: function (data) {
        // cc.log('this listens to the same emitter channel');
        this.node.emit('move', this._index);
    },

    _move: function (data) {
        if (data === this._index) {
            cc.log('this was called from the same node');
            return;
        }
        cc.log('this was called from the cc.Event', this._index);
        cc.log(`this is the caller data: ${data}`);
    },

    onLoad() {
        cc.log('node instantiated');
        this.node.on('move', this._move, this);
    },

    start() {

    },

    // update (dt) {},
});
