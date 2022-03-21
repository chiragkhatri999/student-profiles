class Student {
	city: string;
	company: string;
	email: string;
	firstName: string;
	grades: number[];
	id: number;
	lastName: string;
	picUrl: string;
	skill: string;

	constructor(
		city: string,
		company: string,
		email: string,
		firstName: string,
		grades: number[],
		id: number,
		lastName: string,
		picUrl: string,
		skill: string
	) {
		this.city = city;
		this.company = company;
		this.email = email;
		this.firstName = firstName;
		this.grades = grades;
		this.id = id;
		this.lastName = lastName;
		this.picUrl = picUrl;
		this.skill = skill;
	}

	get name() {
		return `${this.firstName} ${this.lastName}`;
	}

	get average(): number {
		if (this.grades.length > 0) {
			const gradeSum = this.grades.reduce((sum: number, num: number) => {
				return (sum += num);
			});
			return gradeSum / this.grades.length;
		} else {
			return 0;
		}
	}

	static fromJson(student: any) {
		const city = student.city;
		const company = student.company;
		const email = student.email;
		const firstName = student.firstName;
		const grades = student.grades.map(function (grade: string) {
			return Number.parseInt(grade);
		});
		const id = Number.parseInt(student.id);
		const lastName = student.lastName;
		const picUrl = student.pic;
		const skill = student.skill;

		const studentObj = new Student(
			city,
			company,
			email,
			firstName,
			grades,
			id,
			lastName,
			picUrl,
			skill
		);
		return studentObj;
	}
}

export default Student;
