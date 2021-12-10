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
        object: cc.Node,
        action: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onClick(event, message) {
        this.object.setPosition(cc.v2(-300, 150));
        eval(`this.object.runAction(cc.moveBy(2, 600, 0).easing(cc.${message}(2)));`);
        cc.log(message)
    },

    onBound() {
        this.object.setPosition(cc.v2(-300, 150));
        let spawn = cc.spawn(cc.moveBy(2, 600, 0), cc.sequence(cc.moveBy(1, 0, 100), cc.moveBy(1, 0, -100)).easing(cc.easeBounceInOut(2)))
        this.object.runAction(spawn);
    },

    onReset() {
        this.object.setPosition(cc.v2(-300, 150));
    },

    onLoad() {
    },

    start() {

    },

    // update (dt) {},
});
