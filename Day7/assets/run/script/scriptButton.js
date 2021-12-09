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
        leftButton: cc.Button,
        rightButton: cc.Button,
        jumpButton: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    _onLeft(event) {
        cc.log('left');
        this._disableButton();
        this.node.emit('moveLeft', true);
        event.stopPropagation();
    },

    _onRight() {
        cc.log('right');
    },

    _onJump() {
        cc.log('jump');
    },

    _disableButton: function () {
        this.leftButton.interactable = false;
        this.rightButton.interactable = false;
        this.jumpButton.interactable = false;
    },

    _enableButton: function () {
        this.node.off('left');
        this.leftButton.interactable = true;
        this.rightButton.interactable = true;
        this.jumpButton.interactable = true;
    },

    onLoad() {
        this.node.on('left', this._onLeft, this);
        // this.node.on('right', this._onLeft, this);
        // this.node.on('jump', this._onLeft, this);
        this.node.on('stop', function (event) {
            cc.log('stop');
            this._enableButton();
            event.stopPropagation();
        }, this);
    },

    start() {

    },

    // update (dt) {},
});
