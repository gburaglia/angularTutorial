export class likes {
    constructor(private _numLikes: number, private _buttonState:boolean)
    {
    }
   
    add1() {
        this._numLikes = this._numLikes + 1;
    } 

    selectButton(){
        if(this._buttonState == true)
        {
            this._buttonState = false;
        }
        else 

            this._buttonState = true;
    }

    get numLikes()
    {
        return this._numLikes;
    }

    get buttonState()
    {
        return this._buttonState;
    }

    
}