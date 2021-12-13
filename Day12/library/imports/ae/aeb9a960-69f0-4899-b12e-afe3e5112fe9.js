"use strict";
cc._RF.push(module, 'aeb9algafBImbEur+PlES/p', 'project');
// Animation/web-desktop/src/project.js

"use strict";

window.__require = function n(t, i, o) {
  function e(c, a) {
    if (!i[c]) {
      if (!t[c]) {
        var s = c.split("/");if (s = s[s.length - 1], !t[s]) {
          var u = "function" == typeof __require && __require;if (!a && u) return u(s, !0);if (r) return r(s, !0);throw new Error("Cannot find module '" + c + "'");
        }
      }var p = i[c] = { exports: {} };t[c][0].call(p.exports, function (n) {
        return e(t[c][1][n] || n);
      }, p, p.exports, n, t, i, o);
    }return i[c].exports;
  }for (var r = "function" == typeof __require && __require, c = 0; c < o.length; c++) {
    e(o[c]);
  }return e;
}({ animationScript: [function (n, t, i) {
    "use strict";
    cc._RF.push(t, "56d0eMh5kBHYpMohrYyFB0S", "animationScript"), cc.Class({ extends: cc.Component, properties: { animation: sp.Skeleton, footstepSound: cc.AudioSource }, _onKeyDown: function _onKeyDown(n) {
        switch (n.keyCode) {case cc.macro.KEY.space:
            this.runAnimation();}
      }, onLoad: function onLoad() {
        var n = this;this.animation.setEventListener(function (t, i) {
          n.footstepSound.play();var o = i.data;cc.log(o.name);
        }, this);
      }, runAnimation: function runAnimation() {
        var n = this;this.animation.setAnimation(0, "walk", !1), this.animation.addAnimation(0, "run", !1), this.animation.setCompleteListener(function () {
          cc.log("complete"), n.footstepSound.stop(), n.animation.setCompleteListener(function () {});
        });
      }, start: function start() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
      } }), cc._RF.pop();
  }, {}] }, {}, ["animationScript"]);

cc._RF.pop();