function calculateNumber(type, a, b){
    const aRound = Math.round(a);
    const bRound = Math.round(b);
    if (typeof type == 'string') {
        switch (type) {
            case 'SUM':
                return aRound + bRound;
            case 'SUBTRACT':
                return bRound - aRound;
            case 'DIVIDE':
                if (bRound != 0) {
                    return aRound / bRound;
                }
                else{
                    console.log(`Error`)
                }
            default:
                break;
        }
    }
}

module.exports = calculateNumber;