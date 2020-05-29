(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-projects-projects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/add-projects/add-projects.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/add-projects/add-projects.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"formGroup\">\n    <mat-form-field appearance=\"fill\">\n    <mat-label>Name</mat-label>\n    <input  id=\"name\" formControlName=\"name\" matInput>\n  </mat-form-field>\n  <br>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Description</mat-label>\n    <input  id=\"description\" formControlName=\"description\" matInput>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>Responsible</mat-label>\n    <mat-select [value]=\"null\" id=\"responsible\" formControlName=\"responsible\"  required>\n      <mat-option *ngFor=\"let responsible of managers\" [value]=\"responsible.username\">{{responsible.username}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>Team</mat-label>\n    <mat-select [value]=\"[]\" id=\"team\" formControlName=\"team\" multiple  required>\n      <mat-option *ngFor=\"let developer of developers\" [value]=\"developer.username\">{{developer.username}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/list-projects/list-projects.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/list-projects/list-projects.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>list-projects works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ul>\n  <li routerLink=\"list\">Project list</li>\n  <li routerLink=\"add\">Add Project</li>\n  <li routerLink=\"view\">View Projects</li>\n</ul>-->\n<mat-list>\n  <pre>  </pre>\n  <mat-icon mat-list-icon><i class=\"material-icons\"></i></mat-icon>\n\n  <mat-icon mat-list-icon><i class=\"material-icons\" (click)=\"goBack()\"  routerLink=\"/home\">reply_all</i></mat-icon>\n  <pre></pre>  <mat-list-item  routerLink=\"list\">&nbsp;&nbsp;&nbsp;&nbsp;Project list</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item routerLink=\"add\">&nbsp;&nbsp;&nbsp;&nbsp;Add Project</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item routerLink=\"view\">&nbsp;&nbsp;&nbsp;&nbsp;View Project</mat-list-item>\n</mat-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/view-projects/view-projects.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/view-projects/view-projects.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>view-projects works!</p>\n");

/***/ }),

/***/ "./src/app/core/services/project/project.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/project/project.service.ts ***!
  \**********************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ProjectService = class ProjectService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    add(project) {
        return this.httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend}projects`, project);
    }
    update(id, project) {
        return this.httpClient.patch(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend}projects/${id}`, project);
    }
    findById(id) {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend}projects/${id}`);
    }
    findManager(id) {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend}projects/${id}/manager`);
    }
    findDevelopers(id) {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend}projects/${id}/developers`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result._embedded.users));
        ;
    }
    getAllProjects() {
        return this.httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend}projects`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => result._embedded.projects));
    }
    delete(id) {
        return this.httpClient.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend}users/${id}`);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ "./src/app/modules/projects/add-projects/add-projects.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/projects/add-projects/add-projects.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvYWRkLXByb2plY3RzL2FkZC1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/projects/add-projects/add-projects.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/projects/add-projects/add-projects.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectsComponent", function() { return AddProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/project/project.service */ "./src/app/core/services/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddProjectsComponent = class AddProjectsComponent {
    constructor(formBuilder, userService, projectService, activatedRoute) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.projectService = projectService;
        this.activatedRoute = activatedRoute;
        this.managers = [''];
        this.developers = [''];
        this.formGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['',],
            managers: [''],
            devolopers: ['']
        });
    }
    ngOnInit() {
        this.userService.getAllUsers()._subscribe(users => {
            this.developers = users.filter(user => user.role === 'DEVELOPER');
            this.managers = users.filter(user => user.role === 'PROJECT_MANAGER');
        });
        this.activatedRoute.params.subscribe(params => {
            const id = params.id;
            if (id) {
                this.id = id;
                this.projectService.findById(this.id).subscribe(project => {
                    this.formGroup.patchValue(project);
                    this.projectService.findManager(this.id).subscribe(manager => {
                        this.formGroup.patchValue({ manager: '/users/' + manager.username });
                    });
                    this.projectService.findDevelopers(this.id).subscribe(developers => {
                        this.formGroup.patchValue({ developers: developers.map(developer => '/users/' + developer.username) });
                    });
                });
            }
        });
    }
};
AddProjectsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    null,
    { type: _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/add-projects/add-projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-projects.component.scss */ "./src/app/modules/projects/add-projects/add-projects.component.scss")).default]
    })
], AddProjectsComponent);



/***/ }),

/***/ "./src/app/modules/projects/list-projects/list-projects.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/projects/list-projects/list-projects.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvbGlzdC1wcm9qZWN0cy9saXN0LXByb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/projects/list-projects/list-projects.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/projects/list-projects/list-projects.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProjectsComponent", function() { return ListProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListProjectsComponent = class ListProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ListProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/list-projects/list-projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-projects.component.scss */ "./src/app/modules/projects/list-projects/list-projects.component.scss")).default]
    })
], ListProjectsComponent);



/***/ }),

/***/ "./src/app/modules/projects/projects-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/projects/projects-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/modules/projects/projects.component.ts");
/* harmony import */ var _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-projects/list-projects.component */ "./src/app/modules/projects/list-projects/list-projects.component.ts");
/* harmony import */ var _add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-projects/add-projects.component */ "./src/app/modules/projects/add-projects/add-projects.component.ts");
/* harmony import */ var _view_projects_view_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-projects/view-projects.component */ "./src/app/modules/projects/view-projects/view-projects.component.ts");







const routes = [{ path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: 'list', component: _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_4__["ListProjectsComponent"] },
    { path: 'add', component: _add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectsComponent"] },
    { path: 'view/:id', component: _view_projects_view_projects_component__WEBPACK_IMPORTED_MODULE_6__["ViewProjectsComponent"] }
];
let ProjectsRoutingModule = class ProjectsRoutingModule {
};
ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProjectsRoutingModule);



/***/ }),

/***/ "./src/app/modules/projects/projects.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ProjectsComponent = class ProjectsComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.scss */ "./src/app/modules/projects/projects.component.scss")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/modules/projects/projects.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/projects/projects.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/modules/projects/projects-routing.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/modules/projects/projects.component.ts");
/* harmony import */ var _add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-projects/add-projects.component */ "./src/app/modules/projects/add-projects/add-projects.component.ts");
/* harmony import */ var _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-projects/list-projects.component */ "./src/app/modules/projects/list-projects/list-projects.component.ts");
/* harmony import */ var _view_projects_view_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-projects/view-projects.component */ "./src/app/modules/projects/view-projects/view-projects.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");










let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectsComponent"], _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_6__["ListProjectsComponent"], _view_projects_view_projects_component__WEBPACK_IMPORTED_MODULE_7__["ViewProjectsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]
        ]
    })
], ProjectsModule);



/***/ }),

/***/ "./src/app/modules/projects/view-projects/view-projects.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/projects/view-projects/view-projects.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvdmlldy1wcm9qZWN0cy92aWV3LXByb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/projects/view-projects/view-projects.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/projects/view-projects/view-projects.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProjectsComponent", function() { return ViewProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewProjectsComponent = class ViewProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/view-projects/view-projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-projects.component.scss */ "./src/app/modules/projects/view-projects/view-projects.component.scss")).default]
    })
], ViewProjectsComponent);



/***/ })

}]);
//# sourceMappingURL=modules-projects-projects-module-es2015.js.map