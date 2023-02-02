class HolbertonClass{
    constructor(size = 0, location = ''){
        this.size = size;
        this.location = location;
    }
    get size(){
        return this._size
    }
    set size(value){
        if (typeof value !== size){
            throw new TypeError("The size must be a number")
        }

        this._size = size
    }
    
    
}