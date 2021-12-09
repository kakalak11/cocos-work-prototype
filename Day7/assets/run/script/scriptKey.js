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

    },

    // LIFE-CYCLE CALLBACKS:

    onKeyDown: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                console.log('Press a key');
                this.node.dispatchEvent(new cc.Event.EventCustom('left', true));
                break;
            case cc.macro.KEY.d:
                console.log('Press d key');
                this.node.dispatchEvent(new cc.Event.EventCustom('right', true));
                break;
            case cc.macro.KEY.w:
                console.log('Press w key');
                this.node.dispatchEvent(new cc.Event.EventCustom('jump', true));
                break;
        }
    },
    onKeyUp: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                console.log('release a key');
                this.node.dispatchEvent(new cc.Event.EventCustom('stop', true));
                break;
            case cc.macro.KEY.d:
                console.log('release d key');
                this.node.dispatchEvent(new cc.Event.EventCustom('stop', true));
                break;
            case cc.macro.KEY.w:
                console.log('release w key');
                this.node.dispatchEvent(new cc.Event.EventCustom('stop', true));
                break;
        }
    },

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start() {
    },

    // update (dt) {},
});
