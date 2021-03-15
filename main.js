"use strict";
/* import { LikeComponent } from './like.component';

let component = new LikeComponent(10,true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`); */
exports.__esModule = true;
var likes_1 = require("./likes");
var myPic = new likes_1.likes(50, false);
console.log("Your picture has ");
console.log(myPic.numLikes);
myPic.add1();
console.log("Your picture has ");
console.log(myPic.numLikes);
myPic.selectButton();
