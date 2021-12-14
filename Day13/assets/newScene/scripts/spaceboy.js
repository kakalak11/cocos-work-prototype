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
        _animating: false,
    },

    // LIFE-CYCLE CALLBACKS:

    _move: function (direction) {
        this.direction = direction;
        this.direction < 0 ? this.node.scaleX = -0.1 : this.node.scaleX = 0.1;
        this.action = cc.sequence(
            cc.callFunc(() => this.animation.setAnimation(0, 'run', true)),
            cc.moveBy(1, 25 * this.direction, 0),
            cc.callFunc(() => {
                this.animation.setAnimation(0, 'idle', true);
            }),
        );
        this.node.runAction(this.action);
    },

    _jump: function () {
        this.animation.setAnimation(0, 'jump', false);
        this.animation.setCompleteListener(() => {
            this.animation.setCompleteListener(() => { });
            this.animation.setAnimation(0, 'idle', true);
        });
    },

    _onKeyDown: function (event) {
        cc.log('key down');
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.node.stopAction(this.action);
                this.animation.setAnimation(0, 'shoot', true);
                this.animation.setCompleteListener(() => {
                    this.animation.setCompleteListener(() => { });
                    this.animation.setAnimation(0, 'idle', true);
                });
                break;
            case cc.macro.KEY.a:
                this._move(-1);
                break;
            case cc.macro.KEY.d:
                this._move(1);
                break;
            case cc.macro.KEY.w:
                this._jump();
                break;

        }
    },

    onCollisionEnter: function (other, self) {
        this._collision = true;
        cc.log('on collision enter');
        if (other.tag === 1) {
            this.node.stopAction(this.action);
            this.animation.setAnimation(0, 'shoot', true);
            this.animation.setCompleteListener(() => {
                this.animation.setCompleteListener(() => { });
                this.animation.setAnimation(0, 'idle', true);
            });
            return;
        }
        this.node.stopAction(this.action);
        this.animation.setAnimation(0, 'jump', false);
        this.node.runAction(cc.spawn(cc.moveBy(1, 100 * this.direction, 0), cc.callFunc(() => this.node.scaleX = 0.1 * this.direction)));
        this.animation.setCompleteListener(() => {
            this.animation.setCompleteListener(() => { });
            this.animation.setAnimation(0, 'idle', true);
        });

    },

    onCollisionStay: function (other, self) {

    },

    onCollisionExit: function (other, self) {
        this._collision = false;
        console.log('on collision exit');
    },

    onLoad() {
        this.animation = this.node.getComponent('sp.Skeleton');
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
    },

    start() {

    },

    update(dt) {
        // this.node.runAction(cc.moveBy(0.25, 10, 0));
    },
});
