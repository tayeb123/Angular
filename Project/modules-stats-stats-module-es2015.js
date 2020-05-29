(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-stats-stats-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/stats/stats.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/stats/stats.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>stats works!</p>\n");

/***/ }),

/***/ "./src/app/modules/stats/stats-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/stats/stats-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: StatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsRoutingModule", function() { return StatsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stats.component */ "./src/app/modules/stats/stats.component.ts");




const routes = [{ path: '', component: _stats_component__WEBPACK_IMPORTED_MODULE_3__["StatsComponent"] }];
let StatsRoutingModule = class StatsRoutingModule {
};
StatsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StatsRoutingModule);



/***/ }),

/***/ "./src/app/modules/stats/stats.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/stats/stats.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhdHMvc3RhdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/stats/stats.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/stats/stats.component.ts ***!
  \**************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatsComponent = class StatsComponent {
    constructor() { }
    ngOnInit() {
    }
};
StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/stats/stats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stats.component.scss */ "./src/app/modules/stats/stats.component.scss")).default]
    })
], StatsComponent);



/***/ }),

/***/ "./src/app/modules/stats/stats.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/stats/stats.module.ts ***!
  \***********************************************/
/*! exports provided: StatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsModule", function() { return StatsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _stats_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stats-routing.module */ "./src/app/modules/stats/stats-routing.module.ts");
/* harmony import */ var _stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stats.component */ "./src/app/modules/stats/stats.component.ts");





let StatsModule = class StatsModule {
};
StatsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_stats_component__WEBPACK_IMPORTED_MODULE_4__["StatsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _stats_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatsRoutingModule"]
        ]
    })
], StatsModule);



/***/ })

}]);
//# sourceMappingURL=modules-stats-stats-module-es2015.js.map