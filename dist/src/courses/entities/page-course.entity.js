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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursePage = void 0;
const graphql_1 = require("@nestjs/graphql");
const course_entity_1 = require("./course.entity");
let PageInfoCourse = class PageInfoCourse {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], PageInfoCourse.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], PageInfoCourse.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], PageInfoCourse.prototype, "total", void 0);
PageInfoCourse = __decorate([
    (0, graphql_1.ObjectType)()
], PageInfoCourse);
let CoursePage = class CoursePage {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.CoursePage = CoursePage;
__decorate([
    (0, graphql_1.Field)(() => [course_entity_1.Course], {}),
    __metadata("design:type", Array)
], CoursePage.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => PageInfoCourse, {}),
    __metadata("design:type", PageInfoCourse)
], CoursePage.prototype, "pagination", void 0);
exports.CoursePage = CoursePage = __decorate([
    (0, graphql_1.ObjectType)()
], CoursePage);
//# sourceMappingURL=page-course.entity.js.map