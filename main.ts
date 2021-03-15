import { LikeComponent } from './like.component';

let component = new LikeComponent(10,true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`); 

/* import { likes } from './likes';

let myPic = new likes(50,false);
console.log("Your picture has ");
console.log(myPic.numLikes);
myPic.add1();
console.log("Your picture has ");
console.log(myPic.numLikes);
myPic.selectButton(); */