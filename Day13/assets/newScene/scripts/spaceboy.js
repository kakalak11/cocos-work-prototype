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
        _moving: null,
        _direction: 1,
        _canShoot: null,
        bulletPrefab: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    _jump: function () {
        this.jumpThrough = true;
        this._moving = true;
        this.animation.setAnimation(0, 'jump', false);
        this.node.runAction(cc.moveBy(1, 120 * this._direction, 0));
        this.animation.setCompleteListener(() => {
            this.animation.setCompleteListener(() => { });
            this.animation.setAnimation(0, 'idle', true);
            this.jumpThrough = false;
            this._moving = false;
        });
    },

    _move: function (direction) {
        this._direction = direction;
        if (this._moving) return;
        this._moving = true;
        this.action = cc.sequence(
            cc.spawn(
                cc.moveBy(0.5, 60 * this._direction, 0).easing(cc.easeSineInOut(0.5)),
                cc.scaleTo(0, 0.1 * this._direction, 0.1),
                cc.callFunc(() => this.animation.setAnimation(0, 'run', true)),
            ),
            cc.callFunc(() => this._moving = false),
            cc.callFunc(() => this.animation.addAnimation(0, 'idle', true)),
        );
        this.node.runAction(this.action);
    },

    _shoot: function () {
        this.bullet = cc.instantiate(this.bulletPrefab);
        this.node.addChild(this.bullet);
        this.script = this.bullet.getComponent('bullet');
        this.script.direction = this._direction;
        this.animation.setAnimation(0, 'shoot', false);
        this.animation.setCompleteListener(() => {
            this.animation.setCompleteListener(() => { });
            this.animation.setAnimation(0, 'idle', true);
        });
    },

    _onKeyDown: function (event) {
        cc.log('key down');
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this._shoot();
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
        cc.log('on collision enter');
    },

    onCollisionStay: function (other, self) {
        if (!this.jumpThrough) {
            self.node.x += -this._direction * 2;
            this.node.stopAction(this.action);
            this.animation.setAnimation(0, 'idle', true);
            this._moving = false;
        }

    },

    onCollisionExit: function (other, self) {
        console.log('on collision exit');
        // this._collision = false;
        this._canShoot = false;
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
        this.node.emit('test');
    },

    update(dt) {
        // this.node.runAction(cc.moveBy(0.25, 10, 0));
    },
});
