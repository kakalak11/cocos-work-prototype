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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // ctor() {
    //     cc.log('run A');
    // },

    editor: {
        disallowMultiple: true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // cc.log(cc.js.getClassName(this));

        var classB = cc.Class({
            // name: 'ClassB',
            // ctor() {
            //     cc.log('run B');
            // },

            __ctor__(string) {
                // cc.log(string);
                this.nameObj = string;
            },

            print: function () {
                cc.log('hello');
                cc.log(this.nameObj);
            },

            funcA: function (string) {
                cc.log('hello');
                cc.log(string);
            },
        });

        var classC = cc.Class({
            extends: classB,
            __ctor__(string) {
                // cc.log(string);
                // classB.call(this, string);
            },

            print() {
                this._super();
                cc.log('regard');
            },

            funcA: function (string) {
                this._super(string);
            },
        });

        var objectB = new classB('kakalak');
        // objectB.print();
        objectB.funcA('booker');
        var objectC = new classC('kakalak11');
        // objectC.print();
        objectC.funcA('kakalak22');
    },

    start() {

    },

    // update (dt) {},
});