function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tasks-tasks-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tasks/tasks.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tasks/tasks.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTasksTasksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>tasks works!</p>\n";
    /***/
  },

  /***/
  "./src/app/modules/tasks/tasks-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/tasks/tasks-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: TasksRoutingModule */

  /***/
  function srcAppModulesTasksTasksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function () {
      return TasksRoutingModule;
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


    var _tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tasks.component */
    "./src/app/modules/tasks/tasks.component.ts");

    var routes = [{
      path: '',
      component: _tasks_component__WEBPACK_IMPORTED_MODULE_3__["TasksComponent"]
    }];

    var TasksRoutingModule = function TasksRoutingModule() {
      _classCallCheck(this, TasksRoutingModule);
    };

    TasksRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TasksRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/tasks/tasks.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/modules/tasks/tasks.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTasksTasksComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/tasks/tasks.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/tasks/tasks.component.ts ***!
    \**************************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppModulesTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TasksComponent =
    /*#__PURE__*/
    function () {
      function TasksComponent() {
        _classCallCheck(this, TasksComponent);
      }

      _createClass(TasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TasksComponent;
    }();

    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/tasks/tasks.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasks.component.scss */
      "./src/app/modules/tasks/tasks.component.scss")).default]
    })], TasksComponent);
    /***/
  },

  /***/
  "./src/app/modules/tasks/tasks.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/tasks/tasks.module.ts ***!
    \***********************************************/

  /*! exports provided: TasksModule */

  /***/
  function srcAppModulesTasksTasksModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksModule", function () {
      return TasksModule;
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


    var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tasks-routing.module */
    "./src/app/modules/tasks/tasks-routing.module.ts");
    /* harmony import */


    var _tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tasks.component */
    "./src/app/modules/tasks/tasks.component.ts");

    var TasksModule = function TasksModule() {
      _classCallCheck(this, TasksModule);
    };

    TasksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tasks_routing_module__WEBPACK_IMPORTED_MODULE_3__["TasksRoutingModule"]]
    })], TasksModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-tasks-tasks-module-es5.js.map