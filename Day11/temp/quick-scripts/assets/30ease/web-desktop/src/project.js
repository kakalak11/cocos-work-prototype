(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/30ease/web-desktop/src/project.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9c23210NtRP9J9iEmJVPXyj', 'project', __filename);
// 30ease/web-desktop/src/project.js

"use strict";

window.__require = function n(t, i, o) {
  function e(a, s) {
    if (!i[a]) {
      if (!t[a]) {
        var r = a.split("/");if (r = r[r.length - 1], !t[r]) {
          var u = "function" == typeof __require && __require;if (!s && u) return u(r, !0);if (c) return c(r, !0);throw new Error("Cannot find module '" + a + "'");
        }
      }var d = i[a] = { exports: {} };t[a][0].call(d.exports, function (n) {
        return e(t[a][1][n] || n);
      }, d, d.exports, n, t, i, o);
    }return i[a].exports;
  }for (var c = "function" == typeof __require && __require, a = 0; a < o.length; a++) {
    e(o[a]);
  }return e;
}({ "30easeScript": [function (require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec34fzgy0dKPq9njdd2/xaM", "30easeScript", __filename), cc.Class({ extends: cc.Component, properties: { object: cc.Node, action: null }, onClick: function onClick(event, message) {
        this.object.setPosition(cc.v2(-300, 150)), eval("this.object.runAction(cc.moveBy(2, 600, 0).easing(cc." + message + "(2)));"), cc.log(message);
      }, onBound: function onBound() {
        this.object.setPosition(cc.v2(-300, 150));var n = cc.spawn(cc.moveBy(2, 600, 0), cc.sequence(cc.moveBy(1, 0, 100), cc.moveBy(1, 0, -100)).easing(cc.easeBounceInOut(2)));this.object.runAction(n);
      }, onReset: function onReset() {
        this.object.setPosition(cc.v2(-300, 150));
      }, onLoad: function onLoad() {}, start: function start() {} }), cc._RF.pop();
  }, {}], HelloWorld: [function (n, t, i) {
    "use strict";
    cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld", __filename), cc.Class({ extends: cc.Component, properties: { label: { default: null, type: cc.Label }, text: "Hello, World!" }, onLoad: function onLoad() {
        this.label.string = this.text;
      }, update: function update(n) {} }), cc._RF.pop();
  }, {}], animationScript: [function (n, t, i) {
    "use strict";
    cc._RF.push(t, "cae8822MO5AQZar4yzRJbMO", "animationScript", __filename), cc.Class({ extends: cc.Component, properties: { animation: sp.Skeleton }, onLoad: function onLoad() {
        this.animation.setEventListener(function (n, t) {
          var i = t.data;cc.log(i.name);
        });
      }, start: function start() {
        this.animation.setAnimation(0, "aim", !1), this.animation.addAnimation(0, "death", !1), this.animation.addAnimation(0, "hoverboard", !1), this.animation.addAnimation(0, "idle", !1), this.animation.addAnimation(0, "idle-turn", !1), this.animation.addAnimation(0, "portal", !1), this.animation.addAnimation(0, "run", !1), this.animation.addAnimation(0, "run-to-idle", !1), this.animation.addAnimation(0, "shoot", !1), this.animation.addAnimation(0, "walk", !1);
      } }), cc._RF.pop();
  }, {}] }, {}, ["30easeScript", "HelloWorld", "animationScript"]);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=project.js.map
        