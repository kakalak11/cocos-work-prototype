cc.Class({
    extends: cc.Component,

    properties: {
        player: cc.Node,
        tweenButton: cc.Node,
        _onTween: false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.tweenButton.on('click', () => {
            if (!this._onTween) {
                this._onTween = true;
                this.tweenButton.children[0].children[0].getComponent('cc.Label').string = 'Tween: ON';
                return;
            }
            this.tweenButton.children[0].children[0].getComponent('cc.Label').string = 'Tween: OFF';
            this._onTween = false;
        }, this);

        this.node.on('move', function (value) {
            cc.log(this._onTween);

            if (!this._onTween) {
                this.player.runAction(cc.sequence(
                    cc.moveBy(1, 200 * value, 0).easing(cc.easeCubicActionInOut(1)),
                    cc.callFunc(() => this.node.emit('stop')),
                ));
                return;
            }

            cc.tween(this.player)
                .by(1, { position: cc.v2(200 * value, 0) }, { easing: 'cubicInOut' })
                .call(() => this.node.emit('stop'))
                .start()
        }, this);

        this.node.on('jump', function () {

            if (!this._onTween) {
                this.player.runAction(cc.spawn(
                    cc.sequence(
                        cc.moveBy(0.5, 0, 200).easing(cc.easeCubicActionOut(0.5)),
                        cc.moveBy(0.5, 0, -200).easing(cc.easeCubicActionIn(0.5)),
                        cc.callFunc(() => this.node.emit('stop')),
                    ),
                    cc.rotateBy(1, 360),

                ));
                return;
            }
            let t = cc.tween;
            t(this.player)
                .parallel(
                    t().by(0.5, { position: cc.v2(0, 200) }, { easing: 'cubicOut' }),
                    t().by(0.5, { angle: -180 })
                )
                .parallel(
                    t().by(0.5, { position: cc.v2(0, -200) }, { easing: 'cubicIn' }),
                    t().by(0.5, { angle: -180 })
                )
                .call(() => this.node.emit('stop'))
                .start()
        }, this);
    },

    start() { },

    update(dt) {

    },
});
