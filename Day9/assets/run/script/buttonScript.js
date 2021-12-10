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
        leftButton: cc.Node,
        rightButton: cc.Node,
        jumpButton: cc.Node,
        buttons: [cc.Button],
    },

    // LIFE-CYCLE CALLBACKS:

    _onStop: function () {
        this.buttons.forEach(function (element) { element.getComponent('cc.Button').interactable = true });
        return;
    },

    _onMove: function () {
        this.buttons.forEach(function (element) { element.getComponent('cc.Button').interactable = false });
        return;
    },

    _addEventListener: function() {
        this.leftButton.on('click', function() {this.node.emit('move', -1)}, this);
        this.rightButton.on('click', function() {this.node.emit('move', 1)}, this);
        this.jumpButton.on('click', function() {this.node.emit('jump')}, this);

        this.node.on('stop', this._onStop, this);
        this.node.on('move', this._onMove, this);
        this.node.on('jump', this._onMove, this);
        return 'event added';
    },

    onLoad() {
        this._addEventListener();
        
    },

    start() {

    },

    // update (dt) {},
});
