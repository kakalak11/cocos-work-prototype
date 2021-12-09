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
        buttons: [cc.Button],
    },

    // LIFE-CYCLE CALLBACKS:

    _onStop: function () {
        cc.log('stop');
        this.buttons[0].interactable = true;
        this.buttons[2].interactable = true;
        return;
    },

    _onMove: function () {
        this.buttons.forEach(function (element) { element.interactable = false });
        return;
    },

    onLoad() {
        this.node.on('left', this._onMove, this);
        this.node.on('right', this._onMove, this);
        this.node.on('jump', function () { this.buttons[1].interactable = false }, this);
        this.node.on('jumpDone', function () { this.buttons[1].interactable = true }, this);
        this.node.on('stop', this._onStop, this);
    },

    start() {

    },

    // update (dt) {},
});
