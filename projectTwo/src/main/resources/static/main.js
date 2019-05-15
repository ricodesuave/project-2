(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-post/user-post.component */ "./src/app/components/user-post/user-post.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/registration.component */ "./src/app/components/register/registration.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_book_lookup_book_lookup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/book-lookup/book-lookup.component */ "./src/app/components/book-lookup/book-lookup.component.ts");
/* harmony import */ var _components_club_management_view_club_management_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/club-management-view/club-management-view.component */ "./src/app/components/club-management-view/club-management-view.component.ts");
/* harmony import */ var _components_club_lookup_club_lookup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/club-lookup/club-lookup.component */ "./src/app/components/club-lookup/club-lookup.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");












var routes = [
    { path: '', component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_register_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] },
    { path: 'reviews', component: _components_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_3__["UserPostComponent"] },
    { path: 'books', component: _components_book_lookup_book_lookup_component__WEBPACK_IMPORTED_MODULE_8__["BookLookupComponent"] },
    { path: 'lookup', component: _components_club_lookup_club_lookup_component__WEBPACK_IMPORTED_MODULE_10__["ClubLookupComponent"] },
    { path: 'manage', component: _components_club_management_view_club_management_view_component__WEBPACK_IMPORTED_MODULE_9__["ClubManagementViewComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'test';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_club_creation_form_club_creation_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/club-creation-form/club-creation-form.component */ "./src/app/components/club-creation-form/club-creation-form.component.ts");
/* harmony import */ var _services_club_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/club-service.service */ "./src/app/services/club-service.service.ts");
/* harmony import */ var _services_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/reviews/reviews.service */ "./src/app/services/reviews/reviews.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user-post/user-post.component */ "./src/app/components/user-post/user-post.component.ts");
/* harmony import */ var _components_club_lookup_club_lookup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/club-lookup/club-lookup.component */ "./src/app/components/club-lookup/club-lookup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_registration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/register/registration.component */ "./src/app/components/register/registration.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_meeting_post_meeting_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/meeting-post/meeting-post.component */ "./src/app/components/meeting-post/meeting-post.component.ts");
/* harmony import */ var _components_book_lookup_book_lookup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/book-lookup/book-lookup.component */ "./src/app/components/book-lookup/book-lookup.component.ts");
/* harmony import */ var _services_club_member_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/club-member.service */ "./src/app/services/club-member.service.ts");
/* harmony import */ var _components_club_management_view_club_management_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/club-management-view/club-management-view.component */ "./src/app/components/club-management-view/club-management-view.component.ts");
/* harmony import */ var _components_club_list_club_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/club-list/club-list.component */ "./src/app/components/club-list/club-list.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_club_meeting_table_club_meeting_table_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/club-meeting-table/club-meeting-table.component */ "./src/app/components/club-meeting-table/club-meeting-table.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_club_creation_form_club_creation_form_component__WEBPACK_IMPORTED_MODULE_14__["ClubCreationFormComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
                _components_user_post_user_post_component__WEBPACK_IMPORTED_MODULE_19__["UserPostComponent"],
                _components_club_lookup_club_lookup_component__WEBPACK_IMPORTED_MODULE_20__["ClubLookupComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _components_register_registration_component__WEBPACK_IMPORTED_MODULE_22__["RegistrationComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
                _components_meeting_post_meeting_post_component__WEBPACK_IMPORTED_MODULE_26__["MeetingPostComponent"],
                _components_book_lookup_book_lookup_component__WEBPACK_IMPORTED_MODULE_27__["BookLookupComponent"],
                _components_club_management_view_club_management_view_component__WEBPACK_IMPORTED_MODULE_29__["ClubManagementViewComponent"],
                _components_club_list_club_list_component__WEBPACK_IMPORTED_MODULE_30__["ClubListComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["ProfileComponent"],
                _components_club_meeting_table_club_meeting_table_component__WEBPACK_IMPORTED_MODULE_32__["ClubMeetingTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_23__["MaterialModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"]
            ],
            providers: [_services_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_16__["ReviewsService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _services_club_service_service__WEBPACK_IMPORTED_MODULE_15__["ClubServiceService"], _services_club_member_service__WEBPACK_IMPORTED_MODULE_28__["ClubMemberService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/book-lookup/book-lookup.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/book-lookup/book-lookup.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9vay1sb29rdXAvYm9vay1sb29rdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/book-lookup/book-lookup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/book-lookup/book-lookup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table>\r\n    <thead>\r\n      <th scope=\"col\">Book Title</th>\r\n      <th scope=\"col\">Book Author</th>\r\n      <th scope=\"col\">Options</th>\r\n    </thead>\r\n    <tbody id=\"book-table-body\">\r\n      \r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/book-lookup/book-lookup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/book-lookup/book-lookup.component.ts ***!
  \*****************************************************************/
/*! exports provided: BookLookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookLookupComponent", function() { return BookLookupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_book_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/book-service.service */ "./src/app/services/book-service.service.ts");



var BookLookupComponent = /** @class */ (function () {
    function BookLookupComponent(bookService) {
        this.bookService = bookService;
    }
    BookLookupComponent.prototype.ngOnInit = function () {
    };
    BookLookupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-lookup',
            template: __webpack_require__(/*! ./book-lookup.component.html */ "./src/app/components/book-lookup/book-lookup.component.html"),
            styles: [__webpack_require__(/*! ./book-lookup.component.css */ "./src/app/components/book-lookup/book-lookup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_book_service_service__WEBPACK_IMPORTED_MODULE_2__["BookServiceService"]])
    ], BookLookupComponent);
    return BookLookupComponent;
}());



/***/ }),

/***/ "./src/app/components/club-creation-form/club-creation-form.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/club-creation-form/club-creation-form.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2x1Yi1jcmVhdGlvbi1mb3JtL2NsdWItY3JlYXRpb24tZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/club-creation-form/club-creation-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/club-creation-form/club-creation-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <h1>Club Creation Form</h1>\r\n    <form [formGroup]=\"clubFormGroup\">\r\n        <input type=\"hidden\" formControlName=\"ownerId\" value=\"9001\" readonly/>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n            <mat-label>Club Name</mat-label>\r\n            <input matInput type=\"text\" placeholder=\"Enter Club Name\" [(ngModel)]=\"value\" formControlName=\"clubName\"/>\r\n            <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-form-field>\r\n\r\n        <br>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n            <textarea matInput name=\"\" id=\"\" formControlName=\"clubDescription\"></textarea>\r\n            <!-- <textarea matInput placeholder=\"Enter Club Name\" formControlName=\"clubDescription\"></textarea> -->\r\n        </mat-form-field>\r\n\r\n        \r\n        <div>\r\n            <button type=\"button\" (click)=\"createClub()\">Create</button>\r\n        </div>\r\n\r\n        \r\n    </form>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/club-creation-form/club-creation-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/club-creation-form/club-creation-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClubCreationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubCreationFormComponent", function() { return ClubCreationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_club_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/club-service.service */ "./src/app/services/club-service.service.ts");
/* harmony import */ var src_app_models_club__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/club */ "./src/app/models/club.ts");
/* harmony import */ var src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login/auth.service */ "./src/app/services/login/auth.service.ts");






var ClubCreationFormComponent = /** @class */ (function () {
    function ClubCreationFormComponent(clubService, authService) {
        var _this = this;
        this.clubService = clubService;
        this.authService = authService;
        this.value = '';
        this.currentUserSub = this.authService.currentUser$.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    ClubCreationFormComponent.prototype.ngOnInit = function () {
        this.clubFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ownerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: 0 }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            clubName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            clubDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ClubCreationFormComponent.prototype.createClub = function () {
        var input = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.clubFormGroup.value);
        console.log(input);
        // const testUser: User = new User(9001, 'jose1@gmail.com', '123', 'jose', 'nunez', null);
        var val = new src_app_models_club__WEBPACK_IMPORTED_MODULE_4__["Club"](0, input.clubName, input.clubDescription, this.currentUser);
        console.log(val);
        this.clubService.save(val).subscribe(function (data) {
            console.log(data);
        });
    };
    ClubCreationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-club-creation-form',
            template: __webpack_require__(/*! ./club-creation-form.component.html */ "./src/app/components/club-creation-form/club-creation-form.component.html"),
            styles: [__webpack_require__(/*! ./club-creation-form.component.css */ "./src/app/components/club-creation-form/club-creation-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_club_service_service__WEBPACK_IMPORTED_MODULE_3__["ClubServiceService"], src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ClubCreationFormComponent);
    return ClubCreationFormComponent;
}());



/***/ }),

/***/ "./src/app/components/club-list/club-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/club-list/club-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2x1Yi1saXN0L2NsdWItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/club-list/club-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/club-list/club-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n\r\n  <mat-action-list>\r\n      <button mat-list-item (click)=\"creatingClub($event)\">\r\n          <mat-icon mat-list-icon style=\"color:rgb(50, 161, 50)\">group_add</mat-icon>\r\n          <h3 mat-line>Create New Club</h3>\r\n      </button>\r\n    <button mat-list-item *ngFor=\"let club of clubs\" (click)=\"selectingClub($event, club)\">\r\n        <mat-icon mat-list-icon>group</mat-icon>\r\n        <h3 mat-line>{{club.clubName}}</h3>\r\n    </button>\r\n  </mat-action-list>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/club-list/club-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/club-list/club-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ClubListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubListComponent", function() { return ClubListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_club_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/club-service.service */ "./src/app/services/club-service.service.ts");
/* harmony import */ var src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login/auth.service */ "./src/app/services/login/auth.service.ts");




var ClubListComponent = /** @class */ (function () {
    function ClubListComponent(clubService, authService) {
        var _this = this;
        this.clubService = clubService;
        this.authService = authService;
        this.selectedClub = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newClub = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentUserSub = this.authService.currentUser$.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    ClubListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clubService.findAllFromUser(this.currentUser.userId).subscribe(function (data) {
            _this.clubs = data;
        });
    };
    ClubListComponent.prototype.selectingClub = function (event, selected) {
        console.log('emiting: ', selected);
        this.selectedClub.emit(selected);
    };
    ClubListComponent.prototype.creatingClub = function (event) {
        console.log('emiting', event);
        this.newClub.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ClubListComponent.prototype, "selectedClub", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ClubListComponent.prototype, "newClub", void 0);
    ClubListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-club-list',
            template: __webpack_require__(/*! ./club-list.component.html */ "./src/app/components/club-list/club-list.component.html"),
            styles: [__webpack_require__(/*! ./club-list.component.css */ "./src/app/components/club-list/club-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_club_service_service__WEBPACK_IMPORTED_MODULE_2__["ClubServiceService"], src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ClubListComponent);
    return ClubListComponent;
}());



/***/ }),

/***/ "./src/app/components/club-lookup/club-lookup.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/club-lookup/club-lookup.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\r\n    border: 1px solid black;\r\n    padding: 15px;\r\n    text-align: left\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbHViLWxvb2t1cC9jbHViLWxvb2t1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbHViLWxvb2t1cC9jbHViLWxvb2t1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/club-lookup/club-lookup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/club-lookup/club-lookup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Club Name</th>\r\n        <th scope=\"col\">Club Description</th>\r\n        <th scope=\"col\">Owner</th>\r\n        <th scope=\"col\">Options</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id=\"club-lookup-body\">\r\n      <tr *ngFor=\"let club of clubs; let i = index\" >\r\n        <td>{{club.clubName}}</td>\r\n        <td>{{club.clubDescription}}</td>\r\n        <td>{{club.owner.firstName}} {{club.owner.lastName}}</td>\r\n        <td>\r\n          <button mat-raised-button color=\"primary\" (click)=\"Subscribe($event, i)\" type=\"button\">Subscribe</button>\r\n          <button mat-raised-button color=\"warn\" (click)=\"Unsubscribe($event, i)\" type=\"button\">Unsubscribe</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/club-lookup/club-lookup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/club-lookup/club-lookup.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClubLookupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubLookupComponent", function() { return ClubLookupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_club_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/club-service.service */ "./src/app/services/club-service.service.ts");
/* harmony import */ var src_app_models_club_member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/club-member */ "./src/app/models/club-member.ts");
/* harmony import */ var src_app_services_club_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/club-member.service */ "./src/app/services/club-member.service.ts");





var ClubLookupComponent = /** @class */ (function () {
    function ClubLookupComponent(clubService, clubMemberService) {
        this.clubService = clubService;
        this.clubMemberService = clubMemberService;
    }
    ClubLookupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clubService.findAll().subscribe(function (data) {
            _this.clubs = data;
        });
    };
    ClubLookupComponent.prototype.Subscribe = function (event, i) {
        console.log(i);
        console.log(this.clubs[i].clubId);
        var clubMemberIdentity = { clubId: this.clubs[i].clubId, userId: 5 };
        var newMember = new src_app_models_club_member__WEBPACK_IMPORTED_MODULE_3__["ClubMember"](clubMemberIdentity, 'date goes here');
        this.clubMemberService.insertClubMember(newMember).subscribe(function (data) {
            console.log(data);
        });
        console.log(newMember);
    };
    ClubLookupComponent.prototype.Unsubscribe = function (event, i) {
        var clubMemberIdentity = { clubId: this.clubs[i].clubId, userId: 5 };
        var newMember = new src_app_models_club_member__WEBPACK_IMPORTED_MODULE_3__["ClubMember"](clubMemberIdentity, 'date goes here');
        this.clubMemberService.deleteClubMember(newMember);
    };
    ClubLookupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-club-lookup',
            template: __webpack_require__(/*! ./club-lookup.component.html */ "./src/app/components/club-lookup/club-lookup.component.html"),
            styles: [__webpack_require__(/*! ./club-lookup.component.css */ "./src/app/components/club-lookup/club-lookup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_club_service_service__WEBPACK_IMPORTED_MODULE_2__["ClubServiceService"], src_app_services_club_member_service__WEBPACK_IMPORTED_MODULE_4__["ClubMemberService"]])
    ], ClubLookupComponent);
    return ClubLookupComponent;
}());



/***/ }),

/***/ "./src/app/components/club-management-view/club-management-view.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/club-management-view/club-management-view.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2x1Yi1tYW5hZ2VtZW50LXZpZXcvY2x1Yi1tYW5hZ2VtZW50LXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/club-management-view/club-management-view.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/club-management-view/club-management-view.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"row\" style=\"margin:auto; width:90%; color:rgba(56, 53, 53, 0.5)\">\r\n    <div class=\"col-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-4\">\r\n                <app-club-list (selectedClub)=\"setSelectedClub($event)\" (newClub)=\"displayCreationForm($event)\"></app-club-list>\r\n            </div>\r\n            <div class=\"col-8\">\r\n                <app-club-meeting-table [selectedClub]=\"club\" *ngIf=\"displayMeetings\"></app-club-meeting-table>\r\n                <app-club-creation-form *ngIf=\"displayForm\"></app-club-creation-form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/club-management-view/club-management-view.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/club-management-view/club-management-view.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClubManagementViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubManagementViewComponent", function() { return ClubManagementViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_club__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/club */ "./src/app/models/club.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");




var ClubManagementViewComponent = /** @class */ (function () {
    function ClubManagementViewComponent() {
        this.club = new src_app_models_club__WEBPACK_IMPORTED_MODULE_2__["Club"](-1, "", "", new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"](-1, "", "", "", "", ""));
        this.displayMeetings = false;
        this.displayForm = false;
    }
    ClubManagementViewComponent.prototype.ngOnInit = function () {
    };
    ClubManagementViewComponent.prototype.setSelectedClub = function (selected) {
        console.log('set: ', selected);
        this.club = selected;
        this.displayForm = false;
        this.displayMeetings = true;
    };
    ClubManagementViewComponent.prototype.displayCreationForm = function (shouldDisplay) {
        console.log('displaying form');
        this.displayMeetings = false;
        this.displayForm = true;
    };
    ClubManagementViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-club-management-view',
            template: __webpack_require__(/*! ./club-management-view.component.html */ "./src/app/components/club-management-view/club-management-view.component.html"),
            styles: [__webpack_require__(/*! ./club-management-view.component.css */ "./src/app/components/club-management-view/club-management-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClubManagementViewComponent);
    return ClubManagementViewComponent;
}());



/***/ }),

/***/ "./src/app/components/club-meeting-table/club-meeting-table.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/club-meeting-table/club-meeting-table.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2x1Yi1tZWV0aW5nLXRhYmxlL2NsdWItbWVldGluZy10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/club-meeting-table/club-meeting-table.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/club-meeting-table/club-meeting-table.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-accordion>\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Create New meeting\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n\r\n\r\n  </mat-expansion-panel>\r\n</mat-accordion> -->\r\n\r\n<div *ngFor=\"let meeting of meetings\">\r\n\r\n  <mat-card>\r\n\r\n    <mat-card-header>\r\n      <mat-card-title>{{meeting.clubMeetingIdentity.dateTime}}</mat-card-title>\r\n      <mat-card-subtitle>{{meeting.location}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n\r\n    <mat-card-content>\r\n      <p>{{meeting.description}}</p>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions>\r\n      <button mat-stroked-button color=\"primary\">Edit</button>\r\n      <button mat-stroked-button color=\"warn\">Delete</button>\r\n    </mat-card-actions>\r\n\r\n  </mat-card>\r\n\r\n  <br>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/club-meeting-table/club-meeting-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/club-meeting-table/club-meeting-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClubMeetingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubMeetingTableComponent", function() { return ClubMeetingTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_club_meeting_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/club-meeting-service.service */ "./src/app/services/club-meeting-service.service.ts");
/* harmony import */ var src_app_models_club__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/club */ "./src/app/models/club.ts");




var ClubMeetingTableComponent = /** @class */ (function () {
    function ClubMeetingTableComponent(clubMeetingService) {
        this.clubMeetingService = clubMeetingService;
    }
    ClubMeetingTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clubMeetingService.findAllFromClub(this.selectedClub.clubId).subscribe(function (data) {
            console.log(data);
            _this.meetings = data;
        });
    };
    ClubMeetingTableComponent.prototype.ngOnChanges = function (change) {
        console.log('changed');
        this.reloadData();
    };
    ClubMeetingTableComponent.prototype.reloadData = function () {
        var _this = this;
        this.clubMeetingService.findAllFromClub(this.selectedClub.clubId).subscribe(function (data) {
            console.log(data);
            _this.meetings = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_club__WEBPACK_IMPORTED_MODULE_3__["Club"])
    ], ClubMeetingTableComponent.prototype, "selectedClub", void 0);
    ClubMeetingTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-club-meeting-table',
            template: __webpack_require__(/*! ./club-meeting-table.component.html */ "./src/app/components/club-meeting-table/club-meeting-table.component.html"),
            styles: [__webpack_require__(/*! ./club-meeting-table.component.css */ "./src/app/components/club-meeting-table/club-meeting-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_club_meeting_service_service__WEBPACK_IMPORTED_MODULE_2__["ClubMeetingServiceService"]])
    ], ClubMeetingTableComponent);
    return ClubMeetingTableComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userPost{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: none;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n.meetingPost{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: none;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJQb3N0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tZWV0aW5nUG9zdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\">\r\n    <mat-tab label=\"Reviews\" class=\"userPost\">\r\n        <div class=\"userPost\">\r\n            <app-user-post></app-user-post>\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Meetings\">\r\n        <div class=\"meetingPost\">\r\n                <app-meeting-post></app-meeting-post>\r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Welcome, Readers</h1>\r\n    <p class=\"lead\">Review Books, Create Clubs, and Connect</p>\r\n    <hr class=\"my-4\">\r\n    <h5>Sign up now to Connect with other Book Lovers!</h5>\r\n    <p>P.S We make it a point not to invade your privacy like others ;)</p>\r\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"/register\" role=\"button\">Register Now</a>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/auth.service */ "./src/app/services/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingComponent = /** @class */ (function () {
    function LandingComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        if (this.authService.currentUserValue) {
            this.router.navigate(['/home']);
        }
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form{\r\n    min-width: 150px;\r\n    max-width: 300px;\r\n    width: 250px;\r\n}\r\n.full-width {\r\n    width: 300px;\r\n    display: block;\r\n}\r\n.loginDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybXtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG59XHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9naW5EaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginDiv\">\r\n<mat-card-content>\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit\">\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n            <label for=\"email\">Email Address</label>\r\n            <input matInput placeholder=\"Enter Your Email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.email.errors }\" />\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n            <label for=\"password\">Password</label>\r\n            <input matInput placeholder=\"Enter Your Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.password.errors }\" />\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </mat-form-field>\r\n    </form>\r\n</mat-card-content>\r\n<mat-card-actions>\r\n    <button mat-raised-button (click)=\"onSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n    <a routerLink=\"/register\" class=\"btn btn-link\">Register</a>\r\n</mat-card-actions>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/login/auth.service */ "./src/app/services/login/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.hide = true;
        this.loading = false;
        this.submitted = false;
        // if already logged in, procede to home
        if (this.authService.currentUserValue) {
            this.router.navigate(['/home']);
        }
        console.log('Login instatiation complete.');
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "form", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.form.email.value);
        if (this.loginForm.invalid) {
            console.log('Invalid Form');
            return;
        }
        this.loading = true;
        console.log('Attempting to log in');
        this.authService.login(this.form.email.value, this.form.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            console.log('Logged in');
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log('Error Logging in');
            _this.loading = false;
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/meeting-post/meeting-post.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/meeting-post/meeting-post.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-card{\r\n    margin: 5px;\r\n    width: 350px;\r\n}\r\n\r\nli{\r\n    list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWV0aW5nLXBvc3QvbWVldGluZy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVldGluZy1wb3N0L21lZXRpbmctcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtY2FyZHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/meeting-post/meeting-post.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/meeting-post/meeting-post.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divCard\">\r\n  <ul>\r\n      <li *ngFor=\"let meeting of meetings\" class=\"post-card\">\r\n          <mat-card class=\"card\">\r\n              <mat-card-header>\r\n                <mat-card-title>{{ meeting.clubName }}</mat-card-title>\r\n                <mat-card-subtitle>{{ meeting.Location }} {{ meeting.date }}</mat-card-subtitle>\r\n              </mat-card-header>\r\n              <mat-card-content>\r\n                <p>{{ meeting.description }}</p>\r\n              </mat-card-content>\r\n            </mat-card>\r\n      </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/meeting-post/meeting-post.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/meeting-post/meeting-post.component.ts ***!
  \*******************************************************************/
/*! exports provided: MeetingPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPostComponent", function() { return MeetingPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_meeting_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/meeting-post.service */ "./src/app/services/meeting-post.service.ts");
/* harmony import */ var src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login/auth.service */ "./src/app/services/login/auth.service.ts");




var MeetingPostComponent = /** @class */ (function () {
    function MeetingPostComponent(meetingPostService, authService) {
        var _this = this;
        this.meetingPostService = meetingPostService;
        this.authService = authService;
        this.currentUserSub = this.authService.currentUser$.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    MeetingPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.meetingPostService.getAll(this.currentUser.userId).subscribe(function (data) {
            _this.meetings = data;
        });
    };
    MeetingPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meeting-post',
            template: __webpack_require__(/*! ./meeting-post.component.html */ "./src/app/components/meeting-post/meeting-post.component.html"),
            styles: [__webpack_require__(/*! ./meeting-post.component.css */ "./src/app/components/meeting-post/meeting-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_meeting_post_service__WEBPACK_IMPORTED_MODULE_2__["MeetingPostService"], src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MeetingPostComponent);
    return MeetingPostComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form{\r\n    min-width: 150px;\r\n    max-width: 300px;\r\n    width: 100%;\r\n}\r\n.full-width {\r\n    width: 250px;\r\n    display: block;\r\n}\r\n.profileDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybXtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wcm9maWxlRGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark static-top\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">Bookz In Da Club </a>\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbar\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n\r\n      <li>\r\n          <div *ngIf=\"currentUser\" ngbDropdown class=\"nav-item dropdown\">\r\n              <span ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"booksDropdown\">Books</span>\r\n              <div ngbDropdownMenu  class=\"dropdown-menu\" aria-labelledby=\"booksDropdown\">\r\n                <a *ngIf=\"currentUser\" class=\"dropdown-item\" routerLink=\"/books\">Lookup</a>\r\n              </div>\r\n          </div>\r\n        </li>\r\n\r\n      <li>\r\n        <div *ngIf=\"currentUser\" ngbDropdown class=\"nav-item dropdown\">\r\n            <span ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"clubsDropdown\">Clubs</span>\r\n            <div ngbDropdownMenu  class=\"dropdown-menu\" aria-labelledby=\"clubsDropdown\">\r\n              <a *ngIf=\"currentUser\" class=\"dropdown-item\" routerLink=\"/lookup\">Lookup</a>\r\n              <a *ngIf=\"currentUser\" class=\"dropdown-item\" routerLink=\"/manage\">Manage</a>\r\n            </div>\r\n        </div>\r\n      </li>\r\n\r\n      <li  ngbDropdown class=\"nav-item dropdown\">\r\n        <span ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"settingsDropdown\">Setting</span>\r\n        <div ngbDropdownMenu  class=\"dropdown-menu\" aria-labelledby=\"settingsDropdown\">\r\n          <a *ngIf=\"!currentUser\" class=\"dropdown-item\" routerLink=\"/login\">Login</a>\r\n          <a *ngIf=\"!currentUser\" class=\"dropdown-item\" routerLink=\"/register\">Register</a>\r\n          <a *ngIf=\"currentUser\" class=\"dropdown-item\" routerLink=\"/profile\">Profile</a>\r\n          <a *ngIf=\"currentUser\" class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/auth.service */ "./src/app/services/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.currentUserSub = this.authService.currentUser$.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.currentUserSub.unsubscribe();
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form{\r\n    min-width: 150px;\r\n    max-width: 300px;\r\n    width: 100%;\r\n}\r\n.full-width {\r\n    width: 250px;\r\n    display: block;\r\n}\r\n.profileDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvZmlsZURpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profileDiv\">\r\n<mat-card-content>\r\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\">\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n            <mat-label>Email Address</mat-label>\r\n            <input matInput placeholder=\"Email Address\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.email.errors }\"/>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n            <mat-label>Password</mat-label>\r\n            <input matInput placeholder=\"Enter Your Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.password.errors }\" />\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </mat-form-field>\r\n    </form>\r\n</mat-card-content>\r\n<mat-card-actions>\r\n    <button mat-raised-button (click)=\"onSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary\">Update Profile</button>\r\n</mat-card-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login/auth.service */ "./src/app/services/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, formBuilder, userService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.hide = true;
        this.loading = false;
        this.submitted = false;
        this.currentUserSub = this.authService.currentUser$.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.profileForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "form", {
        get: function () {
            return this.profileForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Submitting Form');
        this.submitted = true;
        console.log('Checking validity');
        if (this.profileForm.invalid) {
            console.log('Form Invalid');
            return;
        }
        console.log('Form Valid');
        this.loading = true;
        console.log(this.currentUser.firstName);
        this.currentUser.email = this.form.email.value;
        this.currentUser.password = this.form.password.value;
        this.userService.update(this.currentUser)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            console.log('Update successful');
            console.dir(data);
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log('An error has occured.');
            console.dir(error);
            _this.loading = false;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/registration.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/register/registration.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form{\r\n    min-width: 150px;\r\n    max-width: 300px;\r\n    width: 100%;\r\n}\r\n.full-width {\r\n    width: 250px;\r\n    display: block;\r\n}\r\n.registrationDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uRGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/register/registration.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/register/registration.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registrationDiv\">\r\n    <mat-card-content>\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n            <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n    \r\n                <mat-label>First Name</mat-label>\r\n                <input matInput placeholder=\"Enter Your First Name\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.firstName.errors }\" />\r\n            </mat-form-field>\r\n    \r\n            <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-label>Last Name</mat-label>\r\n                <input matInput placeholder=\"Enter Your Last Name\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.lastName.errors }\" />\r\n            </mat-form-field>\r\n    \r\n            <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-label>Email Address</mat-label>\r\n                <input matInput placeholder=\"Enter Your Email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.email.errors }\" />\r\n            </mat-form-field>\r\n    \r\n            <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                <mat-label>Password</mat-label>\r\n                <input matInput placeholder=\"Enter Your Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.password.errors }\" />\r\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n                    <mat-label>Date Of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"myDatepicker\" placeholder=\"Choose a date\" formControlName=\"dateOfBirth\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && form.dateOfBirth.errors }\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #myDatepicker></mat-datepicker>\r\n                </mat-form-field>\r\n                \r\n        </form>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n    <button mat-raised-button (click)=\"onSubmit()\" [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n    </mat-card-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/registration.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/register/registration.component.ts ***!
  \***************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login/auth.service */ "./src/app/services/login/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, router, authService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.hide = true;
        this.loading = false;
        this.submitted = false;
        if (this.authService.currentUserValue) {
            this.router.navigate(['/home']);
        }
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    Object.defineProperty(RegistrationComponent.prototype, "form", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('Submitting Form');
        this.submitted = true;
        console.log('Checking validity');
        if (this.registerForm.invalid) {
            console.log('Form Invalid');
            return;
        }
        console.log('Form Valid');
        console.log(this.form.dateOfBirth.value);
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
            console.log('Registration successful');
            console.dir(data);
            _this.router.navigate(['/login']);
        }, function (error) {
            console.log('An error has occured.');
            console.dir(error);
            _this.loading = false;
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/register/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/register/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_login_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/user-post/user-post.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-post/user-post.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-card{\r\n    margin: 5px;\r\n    width: 350px;\r\n}\r\n\r\nli{\r\n    list-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBvc3QvdXNlci1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wb3N0L3VzZXItcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtY2FyZHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user-post/user-post.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-post/user-post.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divCard\">\r\n    <ul>\r\n        <li *ngFor=\"let review of reviews\" class=\"post-card\">\r\n            <mat-card class=\"card\">\r\n                <mat-card-header>\r\n                  <mat-card-title>{{ review.title }}</mat-card-title>\r\n                  <mat-card-subtitle>{{ review.firstName }} {{ review.lastName }}</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <mat-card-content>\r\n                  <p>{{ review.reviewDescription }}</p>\r\n                </mat-card-content>\r\n              </mat-card>\r\n        </li>\r\n      </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-post/user-post.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-post/user-post.component.ts ***!
  \*************************************************************/
/*! exports provided: UserPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostComponent", function() { return UserPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/reviews/reviews.service */ "./src/app/services/reviews/reviews.service.ts");



var UserPostComponent = /** @class */ (function () {
    function UserPostComponent(reviewService) {
        this.reviewService = reviewService;
    }
    UserPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reviewService.getAll().subscribe(function (data) {
            console.log(data);
            _this.reviews = data;
        });
    };
    UserPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-post',
            template: __webpack_require__(/*! ./user-post.component.html */ "./src/app/components/user-post/user-post.component.html"),
            styles: [__webpack_require__(/*! ./user-post.component.css */ "./src/app/components/user-post/user-post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_reviews_reviews_service__WEBPACK_IMPORTED_MODULE_2__["ReviewsService"]])
    ], UserPostComponent);
    return UserPostComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/club-member.ts":
/*!***************************************!*\
  !*** ./src/app/models/club-member.ts ***!
  \***************************************/
/*! exports provided: ClubMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubMember", function() { return ClubMember; });
var ClubMember = /** @class */ (function () {
    function ClubMember(clubMemberIdentity, joinDate) {
        this.clubMemberIdentity = clubMemberIdentity;
        this.joinDate = joinDate;
    }
    return ClubMember;
}());



/***/ }),

/***/ "./src/app/models/club.ts":
/*!********************************!*\
  !*** ./src/app/models/club.ts ***!
  \********************************/
/*! exports provided: Club */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Club", function() { return Club; });
var Club = /** @class */ (function () {
    function Club(clubId, clubName, clubDescription, owner) {
        this.clubId = clubId;
        this.clubName = clubName;
        this.clubDescription = clubDescription;
        this.owner = owner;
    }
    return Club;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(userId, email, password, firstName, lastName, dateOfBirth) {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/book-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/book-service.service.ts ***!
  \**************************************************/
/*! exports provided: BookServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookServiceService", function() { return BookServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");




var BookServiceService = /** @class */ (function () {
    function BookServiceService(http) {
        this.http = http;
    }
    BookServiceService.prototype.findAll = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/books/books");
    };
    BookServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookServiceService);
    return BookServiceService;
}());



/***/ }),

/***/ "./src/app/services/club-meeting-service.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/club-meeting-service.service.ts ***!
  \**********************************************************/
/*! exports provided: ClubMeetingServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubMeetingServiceService", function() { return ClubMeetingServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");




var ClubMeetingServiceService = /** @class */ (function () {
    function ClubMeetingServiceService(http) {
        this.http = http;
    }
    ClubMeetingServiceService.prototype.findAllFromClub = function (clubId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('clubId', clubId.toString());
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/clubmeetings/club", { params: params });
        ;
    };
    ClubMeetingServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClubMeetingServiceService);
    return ClubMeetingServiceService;
}());



/***/ }),

/***/ "./src/app/services/club-member.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/club-member.service.ts ***!
  \*************************************************/
/*! exports provided: ClubMemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubMemberService", function() { return ClubMemberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");




var ClubMemberService = /** @class */ (function () {
    function ClubMemberService(http) {
        this.http = http;
    }
    ClubMemberService.prototype.insertClubMember = function (clubMember) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/clubmembers/save", clubMember);
    };
    ClubMemberService.prototype.deleteClubMember = function (clubMember) {
        this.http.delete(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/clubmembers/delete");
    };
    ClubMemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClubMemberService);
    return ClubMemberService;
}());



/***/ }),

/***/ "./src/app/services/club-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/club-service.service.ts ***!
  \**************************************************/
/*! exports provided: ClubServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubServiceService", function() { return ClubServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment.prod */ "./src/environments/environment.prod.ts");




var ClubServiceService = /** @class */ (function () {
    function ClubServiceService(http) {
        this.http = http;
    }
    ClubServiceService.prototype.findAll = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/clubs/clubs");
    };
    ClubServiceService.prototype.findAllFromUser = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('ownerId', userId.toString());
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/clubs/owner", { params: params });
    };
    ClubServiceService.prototype.save = function (club) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/clubs/save", club);
    };
    ClubServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClubServiceService);
    return ClubServiceService;
}());



/***/ }),

/***/ "./src/app/services/login/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/login/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('current-user')));
        this.currentUser$ = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        console.log('login function');
        console.log(email);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/auth/login", { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (currentUser) {
            if (currentUser) {
                localStorage.setItem('current-user', JSON.stringify(currentUser));
                _this.currentUserSubject.next(currentUser);
            }
            return currentUser;
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('current-user');
        this.currentUserSubject.next(null);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/meeting-post.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/meeting-post.service.ts ***!
  \**************************************************/
/*! exports provided: MeetingPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingPostService", function() { return MeetingPostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var MeetingPostService = /** @class */ (function () {
    function MeetingPostService(http) {
        this.http = http;
    }
    MeetingPostService.prototype.getAll = function (userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/clubmeetings/clubmeetings?userId=" + userId);
    };
    MeetingPostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingPostService);
    return MeetingPostService;
}());



/***/ }),

/***/ "./src/app/services/reviews/reviews.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/reviews/reviews.service.ts ***!
  \*****************************************************/
/*! exports provided: ReviewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsService", function() { return ReviewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ReviewsService = /** @class */ (function () {
    function ReviewsService(http) {
        this.http = http;
    }
    ReviewsService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/review/reviews");
    };
    ReviewsService.prototype.getById = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/review/review");
    };
    ReviewsService.prototype.save = function (review) {
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/review/save", review);
    };
    ReviewsService.prototype.update = function (review) {
        this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/review/update", review);
    };
    ReviewsService.prototype.delete = function (review) {
        this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/review/delete");
    };
    ReviewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReviewsService);
    return ReviewsService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/user/users");
    };
    UserService.prototype.getById = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/user/user");
    };
    UserService.prototype.save = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/user/save", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/user/update", user);
    };
    UserService.prototype.delete = function (user) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/user/delete");
    };
    UserService.prototype.register = function (user) {
        console.log('Service: Register');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/user/save", user);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// this is used to commnunicate with JAVA app
var environment = {
    production: true,
    baseUrl: "http://localhost:8080"
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//Mock data with JSON-SERVER
var environment = {
    production: false,
    baseUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jose Nunez\Desktop\Git_Repos\ProjectTwo\project-2\projectTwo\Bookzindaclub\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map