"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EReports = exports.EStatus = exports.ETypes = void 0;
var ETypes;
(function (ETypes) {
    ETypes["events"] = "Event";
    ETypes["downloads"] = "Downloads";
    ETypes["news"] = "News";
    ETypes["projects"] = "Projects";
})(ETypes || (exports.ETypes = ETypes = {}));
// Status of the projects
var EStatus;
(function (EStatus) {
    EStatus["ongoing"] = "Ongoing";
    EStatus["planning"] = "Planning";
    EStatus["completed"] = "Completed";
})(EStatus || (exports.EStatus = EStatus = {}));
// types of the reports
var EReports;
(function (EReports) {
    EReports["annual"] = "Annual";
    EReports["semi_annual"] = "Semi-annual";
    EReports["financial"] = "Financial";
})(EReports || (exports.EReports = EReports = {}));
//# sourceMappingURL=FileTypes.enum.js.map