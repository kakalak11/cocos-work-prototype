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
        nodePrefab: cc.Prefab,
    },

    ctor: function () {
        this.list = new Array();
    },

    _createNode() {
        for (let i = 0; i < 3; i++) {
            this.nodeInstance = cc.instantiate(this.nodePrefab);
            this.node.addChild(this.nodeInstance);
            this.script = this.nodeInstance.getComponent('nodeScript');
            Emitter.instance.registerEvent('move', this.script._onMove.bind(this.script));
            this.script._index = [i, 0];
            this.list.push({ node: this.nodeInstance, script: this.script });
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => { event.keyCode === cc.macro.KEY.space ? Emitter.instance.emit('move') : null }, this);
        Emitter.instance = new Emitter();
        this._createNode();
        // Emitter.instance.emit('move', 'no work yet, just say hi');
    },

    start() {
    },

    // update (dt) {},
});
