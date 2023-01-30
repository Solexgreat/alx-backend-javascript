// Extend Buildinf
import Building from './5-building';

/**
 * Define Class
 *
 * @class SkyHighBuilding
 */
class SkyHighBuilding extends Building
{
    constructor(sqft = 0, floors = 0){
        super(sqft)
        this._floors = floors;
    }

    get() {
        return this._floors;
    }

    evacuationWarningMessage (){
        super.evacuationWarningMessage()
        console.log(`Evacuate slowly the '${this.floors}' floors`)
    }
}

export default SkyHighBuilding;