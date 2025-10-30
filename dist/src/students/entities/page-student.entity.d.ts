import { Student } from './student.entity';
declare class PageInfo {
    skip: number;
    take: number;
    total: number;
}
export declare class StudentPage {
    data: Student[];
    pagination: PageInfo;
}
export {};
