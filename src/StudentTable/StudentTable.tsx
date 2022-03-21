import React, { ReactElement } from "react";
import StudentRow from "./../StudentRow/StudentRow";
import Student from "./../Student/Student";
import styles from "./StudentTable.module.css";

type StudentTableState = {
	isLoaded: boolean;
	studentRows: Array<ReactElement>;
};

class StudentTable extends React.Component<{}, StudentTableState> {
	_dataUrl: string = "https://api.hatchways.io/assessment/students";
	studentRows: Array<ReactElement> = new Array<ReactElement>();
	studentList: Student[] = [];

	constructor(props: any) {
		super(props);
		this.state = {
			//   error: null,
			isLoaded: false,
			studentRows: [],
		};
	}

	componentDidMount() {
		this.getStudentData().then(() => {
			console.log(this.studentList);
			this.createStudentRows();
			console.log(this.studentRows);
			this.setState({
				...this.state,
				isLoaded: true,
				studentRows: this.studentRows,
			});
		});
	}

	async getStudentData() {
		const result = await fetch(this._dataUrl);
		const resultJson = await result.json();
		const studentsJson = resultJson.students;
		studentsJson.forEach((studentJson: any) => {
			const studentObj = Student.fromJson(studentJson);
			this.studentList.push(studentObj);
		});
	}

	createStudentRows() {
		this.studentList.forEach((student) => {
			this.studentRows.push(
				<div>
					<StudentRow key={student.id} student={student} />
					<hr />
				</div>
			);
		});
	}

	render(): React.ReactNode {
		const isLoaded = this.state.isLoaded;
		if (isLoaded) {
			return (
				<div className={styles.student_list__container}>
					{this.studentRows}
				</div>
			);
		} else {
			return <div>Error</div>;
		}
	}
}

export default StudentTable;
