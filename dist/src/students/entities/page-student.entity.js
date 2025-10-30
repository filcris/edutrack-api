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
exports.StudentPage = void 0;
const graphql_1 = require("@nestjs/graphql");
const student_entity_1 = require("./student.entity");
let PageInfo = class PageInfo {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], PageInfo.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], PageInfo.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], PageInfo.prototype, "total", void 0);
PageInfo = __decorate([
    (0, graphql_1.ObjectType)()
], PageInfo);
let StudentPage = class StudentPage {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.StudentPage = StudentPage;
__decorate([
    (0, graphql_1.Field)(() => [student_entity_1.Student], {}),
    __metadata("design:type", Array)
], StudentPage.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => PageInfo, {}),
    __metadata("design:type", PageInfo)
], StudentPage.prototype, "pagination", void 0);
exports.StudentPage = StudentPage = __decorate([
    (0, graphql_1.ObjectType)()
], StudentPage);
//# sourceMappingURL=page-student.entity.js.map