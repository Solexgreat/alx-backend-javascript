const updateStudentGradeByCity = (student, city, score) => {
    const studentDetails = new Map(student, score);
	if (!studentDetails.grade){
 	     const listedDetails = studentDetails.filter((data) => data.location === city )
	     return listedDetails;
	}
	else{
		const listedDetails = studentDetails.filter((data) => data.location === city)
		return listedDetails.push("grade", 'N/A')
	}

}
export default updateStudentGradeByCity;
