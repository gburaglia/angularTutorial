"use strict";
exports.__esModule = true;
exports.likes = void 0;
var likes = /** @class */ (function () {
    function likes(_numLikes, _buttonState) {
        this._numLikes = _numLikes;
        this._buttonState = _buttonState;
    }
    likes.prototype.add1 = function () {
        this._numLikes = this._numLikes + 1;
    };
    likes.prototype.selectButton = function () {
        if (this._buttonState == true) {
            this._buttonState = false;
        }
        else
            this._buttonState = true;
    };
    Object.defineProperty(likes.prototype, "numLikes", {
        get: function () {
            return this._numLikes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(likes.prototype, "buttonState", {
        get: function () {
            return this._buttonState;
        },
        enumerable: false,
        configurable: true
    });
    return likes;
}());
exports.likes = likes;
