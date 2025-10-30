"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const students_service_1 = require("./students.service");
const student_entity_1 = require("./entities/student.entity");
const page_student_entity_1 = require("./entities/page-student.entity");
let StudentsResolver = class StudentsResolver {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    studentsPage(skip, take, search) {
        return this.service.findAllPagedWithTotal({ skip, take, search });
    }
    createStudent(email, name) {
        return this.service.create({ email, name });
    }
};
exports.StudentsResolver = StudentsResolver;
__decorate([
    (0, graphql_1.Query)(() => [student_entity_1.Student], { name: 'students' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => page_student_entity_1.StudentPage, { name: 'studentsPage' }),
    __param(0, (0, graphql_1.Args)('skip', { type: () => graphql_1.Int, defaultValue: 0 })),
    __param(1, (0, graphql_1.Args)('take', { type: () => graphql_1.Int, defaultValue: 20 })),
    __param(2, (0, graphql_1.Args)('search', { type: () => String, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "studentsPage", null);
__decorate([
    (0, graphql_1.Mutation)(() => student_entity_1.Student),
    __param(0, (0, graphql_1.Args)('email')),
    __param(1, (0, graphql_1.Args)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StudentsResolver.prototype, "createStudent", null);
exports.StudentsResolver = StudentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => student_entity_1.Student),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsResolver);
//# sourceMappingURL=students.resolver.js.map