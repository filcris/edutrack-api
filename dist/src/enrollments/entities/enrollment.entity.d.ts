import { Student } from '../../students/entities/student.entity';
import { Course } from '../../courses/entities/course.entity';
export declare class Enrollment {
    id: string;
    student: Student;
    course: Course;
}
