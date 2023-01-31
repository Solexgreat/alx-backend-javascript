const getStudentsByLocation = (arr, city) => {
    const studentDetails = arr.filter((item) => item.location === city
    );
	return studentDetails;
}
export default getStudentsByLocation;
