export default class Building{
    constructor(sqft= 0){
        if (constructor.Building !== evacuationWarningMessage && typeof this.evacuationWarningMessage !== 'function'){
            throw new TypeError("Class extending Building must override evacuationWarningMessage")
        }
        this.sqft = sqft;
    }
    get () {
        return this._sqft;
    }

}