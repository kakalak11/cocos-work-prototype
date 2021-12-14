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

    onCollisionEnter: function (other, self) {
        cc.log('on collision enter');

        if (self.tag === 1) {
            cc.log(self.node);
            self.node.runAction(
                cc.sequence(
                    cc.spawn(
                        cc.scaleTo(0.5, 2),
                        cc.fadeOut(0.5, 0),
                    ),
                    cc.callFunc(() => self.node.destroy()),
                )
            );
        }
    },

    onCollisionStay: function (other, self) {
    },

    onCollisionExit: function (other, self) {
        console.log('on collision exit');
    },

    onLoad() {
    },

    start() {

    },

    // update(dt) {},
});
