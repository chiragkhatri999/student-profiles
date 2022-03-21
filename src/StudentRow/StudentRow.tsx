import Student from "./../Student/Student";
import React from "react";
import NameValue from "./../NameValue/NameValue";
import styles from "./StudentRow.module.css";

type StudentRowProps = {
	student: Student;
};

class StudentRow extends React.Component<StudentRowProps, {}> {
	componentDidMount() {
		console.log(this.props.student);
	}

	render() {
		const student = this.props.student;
		const avatar = (
			<img
				className={styles.student_avatar__wrapper}
				src={student.picUrl}
				alt={student.name}
			></img>
		);
		const header = <span>{student.name}</span>;
		const emailNV = <NameValue name="Email" value={student.email} />;
		const companyNV = <NameValue name="Company" value={student.company} />;
		const skillNV = <NameValue name="Skill" value={student.skill} />;
		const studentAverageStr = student.average.toFixed(2) + "%";
		const AverageNV = (
			<NameValue name="Average" value={studentAverageStr} />
		);

		return (
			<div className={styles.student__row}>
				<div className={styles.student__avatar}>{avatar}</div>
				<div className={styles.student_info__container}>
					<div className={styles.student__header}>{header}</div>
					<div className={styles.student__info}>
						{emailNV}
						{companyNV}
						{skillNV}
						{AverageNV}
					</div>
				</div>
			</div>
		);
	}
}

export default StudentRow;
