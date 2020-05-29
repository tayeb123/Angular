function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/add-users/add-users.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/add-users/add-users.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserAddUsersAddUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<pre></pre>\n<mat-icon mat-list-icon><i class=\"material-icons\" (click)=\"goBack()\" routerLink=\"back\">reply_all</i></mat-icon>\n<pre></pre>\n<form (ngSubmit)=\"submit()\" #userForm=\"ngForm\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>&nbsp;&nbsp;User Name</mat-label>\n    <input #usernameNgModel=\"ngModel\" required [(ngModel)]=\"user.username\" id=\"username\" name=\"username\" matInput>\n    <mat-error *ngIf=\"usernameNgModel.invalid\">\n      <span *ngIf=\"usernameNgModel.errors.required\">Username is required</span>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>&nbsp;&nbsp;Password</mat-label>\n    <input #passwordNgModel=\"ngModel\" required minlength=\"8\" type=\"password\" [(ngModel)]=\"user.password\" id=\"password\"\n           name=\"password\" matInput>\n    <mat-error *ngIf=\"passwordNgModel.invalid\">\n      <span *ngIf=\"passwordNgModel.errors.minlength\">Password is short</span>\n      <span *ngIf=\"passwordNgModel.errors.required\">Password is required</span>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>&nbsp;&nbsp;First Name</mat-label>\n    <input required [(ngModel)]=\"user.firstName\" id=\"firstName\" name=\"firstName\" matInput>\n  </mat-form-field>\n  <br>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>&nbsp;&nbsp;Last Name</mat-label>\n    <input required [(ngModel)]=\"user.lastName\" id=\"lastName\" name=\"lastName\" matInput>\n  </mat-form-field>\n  <br>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>&nbsp;&nbsp;Email</mat-label>\n    <input required [(ngModel)]=\"user.email\" id=\"email\" name=\"email\" matInput>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-label>&nbsp;&nbsp;&nbsp;&nbsp;Role</mat-label>\n    <mat-select [(ngModel)]=\"user.role\" id=\"role\" name=\"role\" matNativeControl required>\n      <mat-option [value]=\"'ADMIN'\">&nbsp;&nbsp;Admin</mat-option>\n      <mat-option [value]=\"'RESPONSIBLE'\">&nbsp;&nbsp;Responsible</mat-option>\n      <mat-option [value]=\"'DEVELOPER'\">&nbsp;&nbsp;Developer</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <br>\n  <button [disabled]=\"userForm.invalid\" position=\"right\" type=\"submit\" mat-stroked-button color=\"primary\">\n    <span>   </span>\n    Submit\n  </button>\n  <button type=\"reset\" mat-raised-button>reset</button>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/list-users/list-users.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/list-users/list-users.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserListUsersListUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"username\">\r\n    <th mat-header-cell *matHeaderCellDef> User name</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"lastName\">\r\n    <th mat-header-cell *matHeaderCellDef> Last Name</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\r\n  </ng-container>\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"firstName\">\r\n    <th mat-header-cell *matHeaderCellDef> First Name</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"email\">\r\n    <th mat-header-cell *matHeaderCellDef> Email</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n  </ng-container>\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"role\">\r\n    <th mat-header-cell *matHeaderCellDef> Role</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.role}} </td>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"action\">\r\n    <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <button mat-icon-button color=\"accent\" [routerLink]=\"'/users/edit/'+element.id\" >\r\n        <mat-icon>create</mat-icon>\r\n      </button>\r\n     <!-- <button mat-icon-button color=\"accent\" (click)=\"openDialog(element.id)\" >\r\n        <mat-icon>delete</mat-icon>\r\n      </button>-->\r\n    </td>\r\n  </ng-container>\r\n\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<mat-list>\n  <pre>  </pre>\n  <mat-icon mat-list-icon><i class=\"material-icons\"></i></mat-icon>\n\n  <mat-icon mat-list-icon><i class=\"material-icons\" (click)=\"goBack()\"  routerLink=\"/home\">reply_all</i></mat-icon>\n  <pre></pre>\n\n  <mat-list-item routerLink=\"list\">&nbsp;&nbsp;&nbsp;&nbsp;Users list</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item routerLink=\"add\">&nbsp;&nbsp;&nbsp;&nbsp;Add User</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item routerLink=\"view\">&nbsp;&nbsp;&nbsp;&nbsp;View Users</mat-list-item>\n</mat-list>\n<!--\n<mat-expansion-panel>\n\n  <mat-expansion-panel-header>\n\n    <mat-panel-title routerLink=\"list\">\n      User List\n    </mat-panel-title>\n    <mat-panel-description>\n      Details\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <p>...</p>\n</mat-expansion-panel><mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title routerLink=\"add\">\n      Add User\n    </mat-panel-title>\n    <mat-panel-description>\n      Details\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <p>...</p>\n</mat-expansion-panel><mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title routerLink=\"view\">\n      View User\n    </mat-panel-title>\n    <mat-panel-description>\n      Details\n    </mat-panel-description>\n  </mat-expansion-panel-header>\n  <p>...</p>\n</mat-expansion-panel>-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/view-users/view-users.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/view-users/view-users.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesUserViewUsersViewUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>view-users works!</p>\n";
    /***/
  },

  /***/
  "./src/app/core/models/user.ts":
  /*!*************************************!*\
    !*** ./src/app/core/models/user.ts ***!
    \*************************************/

  /*! exports provided: User */

  /***/
  function srcAppCoreModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(username, password, firstName, lastName, email, role) {
      _classCallCheck(this, User);

      this.username = username;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.role = role;
    };
    /***/

  },

  /***/
  "./src/app/core/services/user/user.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/services/user/user.service.ts ***!
    \****************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppCoreServicesUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(httpc) {
        _classCallCheck(this, UserService);

        this.httpc = httpc;
      }

      _createClass(UserService, [{
        key: "getAllUsers",
        value: function getAllUsers() {
          //const observable=this.httpClient.get<any>()
          //return this.httpc.get<any>(api).pipe(map((result=>result._embedded.users)));
          return this.httpc.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "users")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result._embedded.users;
          }));
        }
        /*
          public addUser(user: User) {
            return this.httpc.post(`${environment.urlBackend}users`, user).subscribe();
          }
        
          public findById(id: string): Observable<User> {
        
            return this.httpc.get<User>(`${environment.urlBackend}users/${id}`);
          }
        
          public editById(id: string, user: User): Observable<User> {
        
            return this.httpc.patch<User>(`${environment.urlBackend}users/${id}`, user);
          }
        
          public delete(id: string): Observable<any> {
        
            return this.httpc.delete(`${environment.urlBackend}users/${id}`);
        
          }*/

      }, {
        key: "addUser",
        value: function addUser(user) {
          return this.httpc.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "users"), user);
        }
      }, {
        key: "findById",
        value: function findById(id) {
          return this.httpc.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "users/").concat(id));
        }
      }, {
        key: "editById",
        value: function editById(id, user) {
          return this.httpc.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "users/").concat(id), user);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.httpc.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlBackend, "users/").concat(id));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/modules/user/add-users/add-users.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/user/add-users/add-users.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserAddUsersAddUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9hZGQtdXNlcnMvYWRkLXVzZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/user/add-users/add-users.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/user/add-users/add-users.component.ts ***!
    \***************************************************************/

  /*! exports provided: AddUsersComponent */

  /***/
  function srcAppModulesUserAddUsersAddUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUsersComponent", function () {
      return AddUsersComponent;
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


    var _core_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/models/user */
    "./src/app/core/models/user.ts");
    /* harmony import */


    var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/user/user.service */
    "./src/app/core/services/user/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddUsersComponent =
    /*#__PURE__*/
    function () {
      function AddUsersComponent(userService, location, router, activatedRoute) {
        _classCallCheck(this, AddUsersComponent);

        this.userService = userService;
        this.location = location;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.user = new _core_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', '', '', '');
      }

      _createClass(AddUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.params.subscribe(function (params) {
            _this.id = params.id;

            if (_this.id) {
              _this.userService.findById(_this.id).subscribe(function (user) {
                return _this.user = user;
              });
            }
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          if (this.id) {
            delete this.user.password;
            this.userService.editById(this.id, this.user).subscribe(function (user) {
              return _this2.router.navigate(['/users']);
            });
          } else {
            console.log(this.user);
            this.userService.addUser(this.user).subscribe(function (user) {
              return _this2.router.navigate(['/users']);
            });
          }
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
          console.log('Go back');
        }
      }]);

      return AddUsersComponent;
    }();

    AddUsersComponent.ctorParameters = function () {
      return [{
        type: _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    AddUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/add-users/add-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-users.component.scss */
      "./src/app/modules/user/add-users/add-users.component.scss")).default]
    })], AddUsersComponent);
    /***/
  },

  /***/
  "./src/app/modules/user/list-users/list-users.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/user/list-users/list-users.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserListUsersListUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL2xpc3QtdXNlcnMvQzpcXFVzZXJzXFxUYXllYlxcRGVza3RvcFxcSUlUXFxBbmd1bGFyXFxwcm9qZXRBbmd1bGFyMjAyMFxcZnJvbnRFbmQvc3JjXFxhcHBcXG1vZHVsZXNcXHVzZXJcXGxpc3QtdXNlcnNcXGxpc3QtdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdXNlci9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXIvbGlzdC11c2Vycy9saXN0LXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/user/list-users/list-users.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/user/list-users/list-users.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ListUsersComponent */

  /***/
  function srcAppModulesUserListUsersListUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUsersComponent", function () {
      return ListUsersComponent;
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


    var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/services/user/user.service */
    "./src/app/core/services/user/user.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ListUsersComponent =
    /*#__PURE__*/
    function () {
      function ListUsersComponent(userSerivce) {
        _classCallCheck(this, ListUsersComponent);

        this.userSerivce = userSerivce;
        this.displayedColumns = ['username', 'firstName', 'lastName', 'email', 'role'];
      }
      /* openDialog(id): void {
         const dialogRef = this.dialog.open(AreYouSureComponent, {
           width: '250px',
           data: 'Delete item ?'
         });
      
         dialogRef.afterClosed().subscribe(result => {
           if (result) {
             this.delete(id);
           }
         });
       }*/


      _createClass(ListUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.userSerivce.getAllUsers().subscribe(function (users) {
            _this3.users = users, _this3.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this3.users);
          }); //this.userSerivce.getAllUsers().subscribe((result)=>this.users=result);
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          var _this4 = this;

          this.userSerivce.getAllUsers().subscribe(function (users) {
            return _this4.users = users;
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this5 = this;

          this.userSerivce.delete(id).subscribe(function () {
            return _this5.loadUsers();
          });
        }
      }]);

      return ListUsersComponent;
    }();

    ListUsersComponent.ctorParameters = function () {
      return [{
        type: _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ListUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/list-users/list-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-users.component.scss */
      "./src/app/modules/user/list-users/list-users.component.scss")).default]
    })], ListUsersComponent);
    /***/
  },

  /***/
  "./src/app/modules/user/user-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/user/user-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppModulesUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
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


    var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/modules/user/user.component.ts");
    /* harmony import */


    var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-users/list-users.component */
    "./src/app/modules/user/list-users/list-users.component.ts");
    /* harmony import */


    var _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-users/add-users.component */
    "./src/app/modules/user/add-users/add-users.component.ts");
    /* harmony import */


    var _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-users/view-users.component */
    "./src/app/modules/user/view-users/view-users.component.ts");

    var routes = [{
      path: '',
      component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
    }, {
      path: 'list',
      component: _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_4__["ListUsersComponent"]
    }, {
      path: 'add',
      component: _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_5__["AddUsersComponent"]
    }, {
      path: 'view/:id',
      component: _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_6__["ViewUsersComponent"]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/user/user.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/modules/user/user.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyL0M6XFxVc2Vyc1xcVGF5ZWJcXERlc2t0b3BcXElJVFxcQW5ndWxhclxccHJvamV0QW5ndWxhcjIwMjBcXGZyb250RW5kL3NyY1xcYXBwXFxtb2R1bGVzXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/user/user.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/user/user.component.ts ***!
    \************************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppModulesUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
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

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent(location) {
        _classCallCheck(this, UserComponent);

        this.location = location;
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
          console.log('goBack()');
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.scss */
      "./src/app/modules/user/user.component.scss")).default]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/app/modules/user/user.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/user/user.module.ts ***!
    \*********************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppModulesUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/modules/user/user-routing.module.ts");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.component */
    "./src/app/modules/user/user.component.ts");
    /* harmony import */


    var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-users/list-users.component */
    "./src/app/modules/user/list-users/list-users.component.ts");
    /* harmony import */


    var _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-users/add-users.component */
    "./src/app/modules/user/add-users/add-users.component.ts");
    /* harmony import */


    var _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view-users/view-users.component */
    "./src/app/modules/user/view-users/view-users.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"], _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_5__["ListUsersComponent"], _add_users_add_users_component__WEBPACK_IMPORTED_MODULE_6__["AddUsersComponent"], _view_users_view_users_component__WEBPACK_IMPORTED_MODULE_7__["ViewUsersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/app/modules/user/view-users/view-users.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/user/view-users/view-users.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesUserViewUsersViewUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci92aWV3LXVzZXJzL3ZpZXctdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/user/view-users/view-users.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/user/view-users/view-users.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ViewUsersComponent */

  /***/
  function srcAppModulesUserViewUsersViewUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUsersComponent", function () {
      return ViewUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewUsersComponent =
    /*#__PURE__*/
    function () {
      function ViewUsersComponent() {
        _classCallCheck(this, ViewUsersComponent);
      }

      _createClass(ViewUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewUsersComponent;
    }();

    ViewUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/view-users/view-users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-users.component.scss */
      "./src/app/modules/user/view-users/view-users.component.scss")).default]
    })], ViewUsersComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-user-user-module-es5.js.map