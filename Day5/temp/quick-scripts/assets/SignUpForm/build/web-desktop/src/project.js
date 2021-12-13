(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/SignUpForm/build/web-desktop/src/project.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '12da2iy1h1AbKi/yMbqmaHT', 'project', __filename);
// SignUpForm/build/web-desktop/src/project.js

"use strict";

window.__require = function e(t, s, i) {
  function n(a, c) {
    if (!s[a]) {
      if (!t[a]) {
        var o = a.split("/");if (o = o[o.length - 1], !t[o]) {
          var f = "function" == typeof __require && __require;if (!c && f) return f(o, !0);if (r) return r(o, !0);throw new Error("Cannot find module '" + a + "'");
        }
      }var u = s[a] = { exports: {} };t[a][0].call(u.exports, function (e) {
        return n(t[a][1][e] || e);
      }, u, u.exports, e, t, s, i);
    }return s[a].exports;
  }for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) {
    n(i[a]);
  }return n;
}({ mainForm: [function (e, t, s) {
    "use strict";
    cc._RF.push(t, "18d42ASHGtASa+Y39j+2P2l", "mainForm", __filename);var i = e("utils");cc.Class({ extends: cc.Component, properties: { userNameBox: cc.EditBox, userNameMessage: cc.Node, emailBox: cc.EditBox, emailMessage: cc.Node, passWordBox: cc.EditBox, passWordMessage: cc.Node, confirmBox: cc.EditBox, confirmMessage: cc.Node, signUpButton: cc.Button, congratulation: cc.Node, congratulationLabel: cc.RichText, list: cc.Node, listContent: cc.Node, listPrefab: cc.Prefab, _checkingUserName: null, _checkingEmail: null, _checkingPassWord: null, _checkingConfirm: null, _userNameList: [] }, onUserNameInputBegan: function onUserNameInputBegan() {
        this.userNameMessage.parent.active = !1, this._checkingUserName = !1;
      }, onUserNameInputEnded: function onUserNameInputEnded() {
        this._checkingUserName = !0;
      }, onEmailInputBegan: function onEmailInputBegan() {
        this.emailMessage.parent.active = !1, this._checkingEmail = !1;
      }, onEmailInputEnded: function onEmailInputEnded() {
        this._checkingEmail = !0;
      }, onPassWordInputBegan: function onPassWordInputBegan() {
        this.passWordMessage.parent.active = !1, this._checkingPassWord = !1;
      }, onPassWordInputEnded: function onPassWordInputEnded() {
        this._checkingPassWord = !0;
      }, onConfirmInputBegan: function onConfirmInputBegan() {
        this.confirmMessage.parent.active = !1, this._checkingConfirm = !1;
      }, onConfirmInputEnded: function onConfirmInputEnded() {
        this._checkingConfirm = !0;
      }, _checkUserName: function _checkUserName() {
        if (this._checkingUserName) return i.checkStringLength(this.userNameBox.string, 6) ? i.userNameCheck(this.userNameBox.string) ? i.checkUserNameAvailable(this.userNameBox.string, this._userNameList) ? (i.displayCorrect(this.userNameMessage, "//This username can be used"), !0) : (i.displayError(this.userNameMessage, "//This username is already taken"), !1) : (i.displayError(this.userNameMessage, "//Username must not contain special characters"), !1) : (i.displayError(this.userNameMessage, "//Username must have atleast 6 characters"), !1);
      }, _checkEmail: function _checkEmail() {
        if (this._checkingEmail) return i.emailCheck(this.emailBox.string) ? (i.displayCorrect(this.emailMessage, "//This email can be used"), !0) : (i.displayError(this.emailMessage, "//Please input correct email format"), !1);
      }, _checkPassWord: function _checkPassWord() {
        if (this._checkingPassWord) return i.checkStringLength(this.passWordBox.string, 8) ? i.passWordCheck(this.passWordBox.string) ? (i.displayCorrect(this.passWordMessage, "//This password can be used"), !0) : (i.displayError(this.passWordMessage, "//Password must have atleast 1 uppercase and 1 lowercase"), !1) : (i.displayError(this.passWordMessage, "//Password must have atleast 8 characters"), !1);
      }, _checkConfirm: function _checkConfirm() {
        if (this._checkingConfirm) return this.passWordBox.string !== this.confirmBox.string ? (i.displayError(this.confirmMessage, "//The passwords dont match"), !1) : (i.displayCorrect(this.confirmMessage, "//The passwords are matched !!!"), !0);
      }, _appendAccountDetails: function _appendAccountDetails() {
        var e = cc.instantiate(this.listPrefab);this.listContent.addChild(e), e.getComponent("cc.Label").string = this.userNameBox.string + ":" + this.emailBox.string + ":" + this.passWordBox.string;
      }, _reset: function _reset() {
        this.userNameBox.string = "", this.passWordBox.string = "", this.emailBox.string = "", this.confirmBox.string = "", this._checkingUserName = null, this._checkingEmail = null, this._checkingPassWord = null, this._checkingConfirm = null, this.userNameMessage.parent.active = !1, this.emailMessage.parent.active = !1, this.passWordMessage.parent.active = !1, this.confirmMessage.parent.active = !1;
      }, onClickSignUpButton: function onClickSignUpButton() {
        this._userNameList.push(this.userNameBox.string + ":" + this.emailBox.string + ":" + this.passWordBox.string), this.congratulation.active = !0, this.congratulationLabel.string = i.generateRainbowText(this.userNameBox.string), this._appendAccountDetails(), this._reset();
      }, onClickReturn: function onClickReturn() {
        this.congratulation.active = !1;
      }, onClickAccountDetails: function onClickAccountDetails() {
        this.list.active ? this.list.active = !1 : this.list.active = !0;
      }, onLoad: function onLoad() {
        this.signUpButton.node.on("click", this.onClickSignUpButton, this);
      }, start: function start() {}, update: function update(e) {
        this._checkUserName() && this._checkEmail() && this._checkPassWord() && this._checkConfirm() ? this.signUpButton.interactable = !0 : this.signUpButton.interactable = !1;
      } }), cc._RF.pop();
  }, { utils: "utils" }], utils: [function (e, t, s) {
    "use strict";
    cc._RF.push(t, "d94adBbLD5NNa7TtzbbJSCy", "utils", __filename), console.log("Utilities");var i = { check: function check() {
        return console.log("utilities has run");
      }, passWordCheck: function passWordCheck(e) {
        var t = e.split(""),
            s = 0,
            i = 0;if (!function (e) {
          return e.forEach(function (e) {
            parseInt(e) || e === e.toUpperCase() && s++;
          }), !!s;
        }(t) || !function (e) {
          return e.forEach(function (e) {
            parseInt(e) || e === e.toLowerCase() && i++;
          }), !!i;
        }(t)) return !1;return !0;
      }, userNameCheck: function userNameCheck(e) {
        return !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(e);
      }, checkUserNameAvailable: function checkUserNameAvailable(e, t) {
        var s = !0;return t.forEach(function (t) {
          t.split(":")[0] === e && (s = !1);
        }), !!s;
      }, emailCheck: function emailCheck(e) {
        var t = e.slice(e.indexOf("@"));return ["@gmail.com", "@yahoo.com"].includes(t);
      }, checkStringLength: function checkStringLength(e, t) {
        return !(e.length < t);
      }, displayError: function displayError(e, t) {
        e.color = cc.Color.RED, e.parent.active = !0, e.getComponent("cc.Label").string = t;
      }, displayCorrect: function displayCorrect(e, t) {
        e.color = cc.Color.GREEN, e.parent.active = !0, e.getComponent("cc.Label").string = t;
      }, primeNumber: function primeNumber(e) {
        for (var t = Array(e).fill(!0), s = [], i = 2; i < e; i++) {
          if (!0 === t[i]) {
            s.push(i);for (var n = i * i; n < e; n += i) {
              t[n] = 0;
            }
          }
        }return s;
      }, factorial: function factorial(e) {
        return 0 === e || 1 === e ? 1 : e * this.factorial(e - 1);
      }, generateRainbowText: function generateRainbowText(e) {
        var t = ["#ff0000", "#ff4000", "#ff8000", "#ffbf00", "#ffff00", "#bfff00", "#80ff00", "#40ff00", "#00ff00", "#00ff40", "#00ff80", "#00ffbf", "#00ffff", "#00bfff", "#0080ff", "#0040ff", "\t#0000ff", "#4000ff", "#8000ff", "#bf00ff", "#ff00ff", "#ff00bf", "#ff0080", "#ff0040", "#ff0000"],
            s = "";return e.split("").forEach(function (e, i) {
          s += "<color=" + t[i % t.length] + ">" + e + "</c>";
        }), s;
      } };t.exports = i, cc._RF.pop();
  }, {}] }, {}, ["mainForm", "utils"]);

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
        