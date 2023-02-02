const updateUniqueItems = (map) => {
    
    const mapList = new Map(map);
    const clonemap = new Map(mapList);

    for (const elem of clonemap.key){
        if (elem.value === 1){
            elem.value = 100;
        }
    }
    
    return mapList && clonemap;
    
    
} 
export default updateUniqueItems;