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
exports.EnrollmentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const enrollment_entity_1 = require("./entities/enrollment.entity");
const enrollments_service_1 = require("./enrollments.service");
let EnrollmentsResolver = class EnrollmentsResolver {
    constructor(service) {
        this.service = service;
    }
    list() {
        return this.service.list();
    }
    enroll(studentId, courseId) {
        return this.service.enroll({ studentId, courseId });
    }
};
exports.EnrollmentsResolver = EnrollmentsResolver;
__decorate([
    (0, graphql_1.Query)(() => [enrollment_entity_1.Enrollment], { name: 'enrollments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "list", null);
__decorate([
    (0, graphql_1.Mutation)(() => enrollment_entity_1.Enrollment),
    __param(0, (0, graphql_1.Args)('studentId')),
    __param(1, (0, graphql_1.Args)('courseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], EnrollmentsResolver.prototype, "enroll", null);
exports.EnrollmentsResolver = EnrollmentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => enrollment_entity_1.Enrollment),
    __metadata("design:paramtypes", [enrollments_service_1.EnrollmentsService])
], EnrollmentsResolver);
//# sourceMappingURL=enrollments.resolver.js.map