export class NewSubjectCardDTO {
  group_name: string = '';
  student_uuid: string = '';
  subject_uuid: string = '';


  constructor( group_name: string, student_uuid: string, subject_uuid: string)
  {
    this.group_name = group_name;
    this.student_uuid = student_uuid;
    this.subject_uuid = subject_uuid;
  }
}
