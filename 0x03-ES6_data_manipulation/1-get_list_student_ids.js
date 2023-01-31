function getListStudentIds(arr) {
    if (!Array.isArray(arr)){
        return [];
    }

    const studentDetails = arr.map((item) => item.id);

     return studentDetails;
   
}
export default getListStudentIds;
