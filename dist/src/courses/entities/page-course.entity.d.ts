import { Course } from './course.entity';
declare class PageInfoCourse {
    skip: number;
    take: number;
    total: number;
}
export declare class CoursePage {
    data: Course[];
    pagination: PageInfoCourse;
}
export {};
