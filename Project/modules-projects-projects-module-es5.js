function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-projects-projects-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/add-projects/add-projects.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/add-projects/add-projects.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjectsAddProjectsAddProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"formGroup\">\n    <mat-form-field appearance=\"fill\">\n    <mat-label>Name</mat-label>\n    <input  id=\"name\" formControlName=\"name\" matInput>\n  </mat-form-field>\n  <br>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Description</mat-label>\n    <input  id=\"description\" formControlName=\"description\" matInput>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>Responsible</mat-label>\n    <mat-select [value]=\"null\" id=\"responsible\" formControlName=\"responsible\"  required>\n      <mat-option *ngFor=\"let responsible of managers\" [value]=\"responsible.username\">{{responsible.username}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>Team</mat-label>\n    <mat-select [value]=\"[]\" id=\"team\" formControlName=\"team\" multiple  required>\n      <mat-option *ngFor=\"let developer of developers\" [value]=\"developer.username\">{{developer.username}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/list-projects/list-projects.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/list-projects/list-projects.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjectsListProjectsListProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>list-projects works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<ul>\n  <li routerLink=\"list\">Project list</li>\n  <li routerLink=\"add\">Add Project</li>\n  <li routerLink=\"view\">View Projects</li>\n</ul>-->\n<mat-list>\n  <pre>  </pre>\n  <mat-icon mat-list-icon><i class=\"material-icons\"></i></mat-icon>\n\n  <mat-icon mat-list-icon><i class=\"material-icons\" (click)=\"goBack()\"  routerLink=\"/home\">reply_all</i></mat-icon>\n  <pre></pre>  <mat-list-item  routerLink=\"list\">&nbsp;&nbsp;&nbsp;&nbsp;Project list</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item routerLink=\"add\">&nbsp;&nbsp;&nbsp;&nbsp;Add Project</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item routerLink=\"view\">&nbsp;&nbsp;&nbsp;&nbsp;View Project</mat-list-item>\n</mat-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/view-projects/view-projects.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/view-projects/view-projects.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesProjectsViewProjectsViewProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>view-projects works!</p>\n";
    /***/
  },

  /***/
  "./src/app/core/services/project/project.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/services/project/project.service.ts ***!
    \**********************************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppCoreServicesProjectProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProjectService =
    /*#__PURE__*/
    function () {
      function ProjectService(httpClient) {
        _classCallCheck(this, ProjectService);

        this.httpClient = httpClient;
      }

      _createClass(ProjectService, [{
        key: "add",
        value: function add(project) {
          return this.httpClient.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "projects"), project);
        }
      }, {
        key: "update",
        value: function update(id, project) {
          return this.httpClient.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "projects/").concat(id), project);
        }
      }, {
        key: "findById",
        value: function findById(id) {
          return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "projects/").concat(id));
        }
      }, {
        key: "findManager",
        value: function findManager(id) {
          return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "projects/").concat(id, "/manager"));
        }
      }, {
        key: "findDevelopers",
        value: function findDevelopers(id) {
          return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "projects/").concat(id, "/developers")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result._embedded.users;
          }));
          ;
        }
      }, {
        key: "getAllProjects",
        value: function getAllProjects() {
          return this.httpClient.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "projects")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result._embedded.projects;
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.httpClient.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "users/").concat(id));
        }
      }]);

      return ProjectService;
    }();

    ProjectService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectService);
    /***/
  },

  /***/
  "./src/app/modules/projects/add-projects/add-projects.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/projects/add-projects/add-projects.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjectsAddProjectsAddProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvYWRkLXByb2plY3RzL2FkZC1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/projects/add-projects/add-projects.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/projects/add-projects/add-projects.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AddProjectsComponent */

  /***/
  function srcAppModulesProjectsAddProjectsAddProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProjectsComponent", function () {
      return AddProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/project/project.service */
    "./src/app/core/services/project/project.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddProjectsComponent =
    /*#__PURE__*/
    function () {
      function AddProjectsComponent(formBuilder, userService, projectService, activatedRoute) {
        _classCallCheck(this, AddProjectsComponent);

        this.formBuilder = formBuilder;
        this.userService = userService;
        this.projectService = projectService;
        this.activatedRoute = activatedRoute;
        this.managers = [''];
        this.developers = [''];
        this.formGroup = this.formBuilder.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          description: [''],
          managers: [''],
          devolopers: ['']
        });
      }

      _createClass(AddProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userService.getAllUsers()._subscribe(function (users) {
            _this.developers = users.filter(function (user) {
              return user.role === 'DEVELOPER';
            });
            _this.managers = users.filter(function (user) {
              return user.role === 'PROJECT_MANAGER';
            });
          });

          this.activatedRoute.params.subscribe(function (params) {
            var id = params.id;

            if (id) {
              _this.id = id;

              _this.projectService.findById(_this.id).subscribe(function (project) {
                _this.formGroup.patchValue(project);

                _this.projectService.findManager(_this.id).subscribe(function (manager) {
                  _this.formGroup.patchValue({
                    manager: '/users/' + manager.username
                  });
                });

                _this.projectService.findDevelopers(_this.id).subscribe(function (developers) {
                  _this.formGroup.patchValue({
                    developers: developers.map(function (developer) {
                      return '/users/' + developer.username;
                    })
                  });
                });
              });
            }
          });
        }
      }]);

      return AddProjectsComponent;
    }();

    AddProjectsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, null, {
        type: _core_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    AddProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/add-projects/add-projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-projects.component.scss */
      "./src/app/modules/projects/add-projects/add-projects.component.scss")).default]
    })], AddProjectsComponent);
    /***/
  },

  /***/
  "./src/app/modules/projects/list-projects/list-projects.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/projects/list-projects/list-projects.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjectsListProjectsListProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvbGlzdC1wcm9qZWN0cy9saXN0LXByb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/projects/list-projects/list-projects.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/projects/list-projects/list-projects.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ListProjectsComponent */

  /***/
  function srcAppModulesProjectsListProjectsListProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListProjectsComponent", function () {
      return ListProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ListProjectsComponent =
    /*#__PURE__*/
    function () {
      function ListProjectsComponent() {
        _classCallCheck(this, ListProjectsComponent);
      }

      _createClass(ListProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListProjectsComponent;
    }();

    ListProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/list-projects/list-projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-projects.component.scss */
      "./src/app/modules/projects/list-projects/list-projects.component.scss")).default]
    })], ListProjectsComponent);
    /***/
  },

  /***/
  "./src/app/modules/projects/projects-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/projects/projects-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ProjectsRoutingModule */

  /***/
  function srcAppModulesProjectsProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function () {
      return ProjectsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects.component */
    "./src/app/modules/projects/projects.component.ts");
    /* harmony import */


    var _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-projects/list-projects.component */
    "./src/app/modules/projects/list-projects/list-projects.component.ts");
    /* harmony import */


    var _add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-projects/add-projects.component */
    "./src/app/modules/projects/add-projects/add-projects.component.ts");
    /* harmony import */


    var _view_projects_view_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-projects/view-projects.component */
    "./src/app/modules/projects/view-projects/view-projects.component.ts");

    var routes = [{
      path: '',
      component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"]
    }, {
      path: 'list',
      component: _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_4__["ListProjectsComponent"]
    }, {
      path: 'add',
      component: _add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectsComponent"]
    }, {
      path: 'view/:id',
      component: _view_projects_view_projects_component__WEBPACK_IMPORTED_MODULE_6__["ViewProjectsComponent"]
    }];

    var ProjectsRoutingModule = function ProjectsRoutingModule() {
      _classCallCheck(this, ProjectsRoutingModule);
    };

    ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectsRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/projects/projects.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modules/projects/projects.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/projects/projects.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/projects/projects.component.ts ***!
    \********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppModulesProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent(location) {
        _classCallCheck(this, ProjectsComponent);

        this.location = location;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/modules/projects/projects.component.scss")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/modules/projects/projects.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/projects/projects.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectsModule */

  /***/
  function srcAppModulesProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsModule", function () {
      return ProjectsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects-routing.module */
    "./src/app/modules/projects/projects-routing.module.ts");
    /* harmony import */


    var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./projects.component */
    "./src/app/modules/projects/projects.component.ts");
    /* harmony import */


    var _add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-projects/add-projects.component */
    "./src/app/modules/projects/add-projects/add-projects.component.ts");
    /* harmony import */


    var _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-projects/list-projects.component */
    "./src/app/modules/projects/list-projects/list-projects.component.ts");
    /* harmony import */


    var _view_projects_view_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view-projects/view-projects.component */
    "./src/app/modules/projects/view-projects/view-projects.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ProjectsModule = function ProjectsModule() {
      _classCallCheck(this, ProjectsModule);
    };

    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _add_projects_add_projects_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectsComponent"], _list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_6__["ListProjectsComponent"], _view_projects_view_projects_component__WEBPACK_IMPORTED_MODULE_7__["ViewProjectsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]]
    })], ProjectsModule);
    /***/
  },

  /***/
  "./src/app/modules/projects/view-projects/view-projects.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/projects/view-projects/view-projects.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesProjectsViewProjectsViewProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvdmlldy1wcm9qZWN0cy92aWV3LXByb2plY3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/projects/view-projects/view-projects.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/projects/view-projects/view-projects.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ViewProjectsComponent */

  /***/
  function srcAppModulesProjectsViewProjectsViewProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProjectsComponent", function () {
      return ViewProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewProjectsComponent =
    /*#__PURE__*/
    function () {
      function ViewProjectsComponent() {
        _classCallCheck(this, ViewProjectsComponent);
      }

      _createClass(ViewProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewProjectsComponent;
    }();

    ViewProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/view-projects/view-projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-projects.component.scss */
      "./src/app/modules/projects/view-projects/view-projects.component.scss")).default]
    })], ViewProjectsComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-projects-projects-module-es5.js.map