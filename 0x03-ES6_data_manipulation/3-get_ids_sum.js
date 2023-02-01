const getStudentIdsSum = (student) => {
	const studentDetails = student.map((item) => item.id)
		.reduce((idprevious, idcurrent) => idprevious + idcurrent
	);
	return studentDetails;
}
export default getStudentIdsSum;
