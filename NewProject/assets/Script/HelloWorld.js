var StateMachine = require('javascript-state-machine');

cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
        cc.log(StateMachine);
        cc.log(fsm.state);
        fsm.onMelt();
        cc.log(fsm.state);
    },

    // called every frame
    update: function (dt) {

    },
});

var fsm = new StateMachine({
    init: 'solid',
    transitions: [
        { name: 'melt', from: 'solid', to: 'liquid' },
        { name: 'freeze', from: 'liquid', to: 'solid' },
        { name: 'vaporize', from: 'liquid', to: 'gas' },
        { name: 'condense', from: 'gas', to: 'liquid' }
    ],
    methods: {
        onMelt: function () { console.log('I melted') },
        onFreeze: function () { console.log('I froze') },
        onVaporize: function () { console.log('I vaporized') },
        onCondense: function () { console.log('I condensed') }
    }
});