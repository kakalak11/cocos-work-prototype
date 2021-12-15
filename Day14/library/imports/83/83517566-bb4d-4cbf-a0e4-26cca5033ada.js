"use strict";
cc._RF.push(module, '83517Vmu01Mv6DkJsylAzra', 'project');
// build/web-desktop/src/project.js

"use strict";

window.__require = function n(t, i, o) {
  function e(s, a) {
    if (!i[s]) {
      if (!t[s]) {
        var r = s.split("/");if (r = r[r.length - 1], !t[r]) {
          var l = "function" == typeof __require && __require;if (!a && l) return l(r, !0);if (c) return c(r, !0);throw new Error("Cannot find module '" + s + "'");
        }
      }var u = i[s] = { exports: {} };t[s][0].call(u.exports, function (n) {
        return e(t[s][1][n] || n);
      }, u, u.exports, n, t, i, o);
    }return i[s].exports;
  }for (var c = "function" == typeof __require && __require, s = 0; s < o.length; s++) {
    e(o[s]);
  }return e;
}({ bullet: [function (n, t, i) {
    "use strict";
    cc._RF.push(t, "90440okT1VCjrScS70TgRZv", "bullet"), cc.Class({ extends: cc.Component, properties: { _direction: null, _speed: 1e3 }, onLoad: function onLoad() {}, start: function start() {}, update: function update(n) {
        this.node.x += this._speed, cc.log("bullet flying");
      } }), cc._RF.pop();
  }, {}], objectFalling: [function (n, t, i) {
    "use strict";
    cc._RF.push(t, "da4420NSyZPDK+3Kt/hlibQ", "objectFalling"), cc.Class({ extends: cc.Component, properties: {}, onCollisionEnter: function onCollisionEnter(n, t) {
        cc.log("on collision enter");
      }, onCollisionStay: function onCollisionStay(n, t) {
        1 === t.tag && 1 === n.tag && (cc.log(t.node), t.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.5, 2), cc.fadeOut(.5, 0)), cc.callFunc(function () {
          return t.node.destroy();
        }))), n.node.destroy());
      }, onCollisionExit: function onCollisionExit(n, t) {
        console.log("on collision exit");
      }, onLoad: function onLoad() {
        var n = this;this.node.on("shoot", function () {
          return n._shoot = !0;
        }, this);
      }, start: function start() {} }), cc._RF.pop();
  }, {}], spaceboy: [function (n, t, i) {
    "use strict";
    cc._RF.push(t, "88b9frFMkRF4ZI9LNqbfOwK", "spaceboy"), cc.Class({ extends: cc.Component, properties: { _animating: !1, _moving: null, _direction: 1, _canShoot: null, bulletPrefab: cc.Prefab }, _jump: function _jump() {
        var n = this;this.jumpThrough = !0, this._moving = !0, this.animation.setAnimation(0, "jump", !1), this.node.runAction(cc.moveBy(1, 120 * this._direction, 0)), this.animation.setCompleteListener(function () {
          n.animation.setCompleteListener(function () {}), n.animation.setAnimation(0, "idle", !0), n.jumpThrough = !1, n._moving = !1;
        });
      }, _move: function _move(n) {
        var t = this;this._direction = n, this._moving || (this._moving = !0, this.action = cc.sequence(cc.spawn(cc.moveBy(.5, 60 * this._direction, 0).easing(cc.easeSineInOut(.5)), cc.scaleTo(0, .1 * this._direction, .1), cc.callFunc(function () {
          return t.animation.setAnimation(0, "run", !0);
        })), cc.callFunc(function () {
          return t._moving = !1;
        }), cc.callFunc(function () {
          return t.animation.addAnimation(0, "idle", !0);
        })), this.node.runAction(this.action));
      }, _shoot: function _shoot() {
        var n = this;this.bullet = cc.instantiate(this.bulletPrefab), this.node.parent.addChild(this.bullet), this.bullet.setPosition(cc.v2(this.node.getPosition(cc.v2()))), this.bullet.y += 25, this.bullet.scale = .1, this.script = this.bullet.getComponent("bullet"), this.script.direction = this._direction, this.animation.setAnimation(0, "shoot", !1), this.animation.setCompleteListener(function () {
          n.animation.setCompleteListener(function () {}), n.animation.setAnimation(0, "idle", !0);
        });
      }, _onKeyDown: function _onKeyDown(n) {
        switch (cc.log("key down"), n.keyCode) {case cc.macro.KEY.space:
            this._shoot();break;case cc.macro.KEY.a:
            this._move(-1);break;case cc.macro.KEY.d:
            this._move(1);break;case cc.macro.KEY.w:
            this._jump();}
      }, onCollisionEnter: function onCollisionEnter(n, t) {
        cc.log("on collision enter");
      }, onCollisionStay: function onCollisionStay(n, t) {
        this.jumpThrough || (t.node.x += 2 * -this._direction, this.node.stopAction(this.action), this.animation.setAnimation(0, "idle", !0), this._moving = !1);
      }, onCollisionExit: function onCollisionExit(n, t) {
        console.log("on collision exit"), this._canShoot = !1;
      }, onLoad: function onLoad() {
        this.animation = this.node.getComponent("sp.Skeleton");var n = cc.director.getCollisionManager();n.enabled = !0, n.enabledDebugDraw = !0, cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._onKeyDown, this);
      }, start: function start() {
        this.node.emit("test");
      }, update: function update(n) {} }), cc._RF.pop();
  }, {}] }, {}, ["bullet", "objectFalling", "spaceboy"]);

cc._RF.pop();