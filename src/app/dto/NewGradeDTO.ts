export class NewGradeDTO {
  student_uuid: string = '';
  subject_uuid: string = '';
  grade: string = '';
  grade_weight: string = '';
  grade_type: string = '';
  grade_description: string = '';


  constructor(student_uuid: string, subject_uuid: string, grade: string, grade_weight: string,
              grade_type: string,grade_description: string)
  {
    this.student_uuid = student_uuid;
    this.subject_uuid = subject_uuid;
    this.grade = grade;
    this.grade_weight = grade_weight;
    this.grade_type = grade_type;
    this.grade_description = grade_description;
  }
}
