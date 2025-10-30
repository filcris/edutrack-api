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
exports.CoursesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const course_entity_1 = require("./entities/course.entity");
const courses_service_1 = require("./courses.service");
const page_course_entity_1 = require("./entities/page-course.entity");
let CoursesResolver = class CoursesResolver {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    coursesPage(skip, take, search) {
        return this.service.findAllPagedWithTotal({ skip, take, search });
    }
    createCourse(code, title, description) {
        return this.service.create({ code, title, description });
    }
};
exports.CoursesResolver = CoursesResolver;
__decorate([
    (0, graphql_1.Query)(() => [course_entity_1.Course], { name: 'courses' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => page_course_entity_1.CoursePage, { name: 'coursesPage' }),
    __param(0, (0, graphql_1.Args)('skip', { type: () => graphql_1.Int, defaultValue: 0 })),
    __param(1, (0, graphql_1.Args)('take', { type: () => graphql_1.Int, defaultValue: 20 })),
    __param(2, (0, graphql_1.Args)('search', { type: () => String, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "coursesPage", null);
__decorate([
    (0, graphql_1.Mutation)(() => course_entity_1.Course),
    __param(0, (0, graphql_1.Args)('code')),
    __param(1, (0, graphql_1.Args)('title')),
    __param(2, (0, graphql_1.Args)('description', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], CoursesResolver.prototype, "createCourse", null);
exports.CoursesResolver = CoursesResolver = __decorate([
    (0, graphql_1.Resolver)(() => course_entity_1.Course),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesResolver);
//# sourceMappingURL=courses.resolver.js.map