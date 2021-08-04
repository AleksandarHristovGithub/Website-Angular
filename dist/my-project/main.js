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
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/homepage/homepage.component */ "./src/app/views/homepage/homepage.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _views_posts_stream_posts_stream_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/posts-stream/posts-stream.component */ "./src/app/views/posts-stream/posts-stream.component.ts");
/* harmony import */ var _views_post_post_new_post_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/post/post-new/post-new.component */ "./src/app/views/post/post-new/post-new.component.ts");
/* harmony import */ var _views_post_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/post/post-item/post-item.component */ "./src/app/views/post/post-item/post-item.component.ts");
/* harmony import */ var _views_post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/post/post-list/post-list.component */ "./src/app/views/post/post-list/post-list.component.ts");
/* harmony import */ var _views_community_community_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/community/community.component */ "./src/app/views/community/community.component.ts");
/* harmony import */ var _services_guest_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/guest-guard.service */ "./src/app/services/guest-guard.service.ts");
/* harmony import */ var _views_comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/comment/comment-list/comment-list.component */ "./src/app/views/comment/comment-list/comment-list.component.ts");
/* harmony import */ var _views_comment_comment_new_comment_new_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/comment/comment-new/comment-new.component */ "./src/app/views/comment/comment-new/comment-new.component.ts");
/* harmony import */ var _views_manage_manage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/manage/manage.component */ "./src/app/views/manage/manage.component.ts");
/* harmony import */ var _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/admin-guard.service */ "./src/app/services/admin-guard.service.ts");


















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'stream', component: _views_posts_stream_posts_stream_component__WEBPACK_IMPORTED_MODULE_8__["PostsStreamComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'guest', component: _views_posts_stream_posts_stream_component__WEBPACK_IMPORTED_MODULE_8__["PostsStreamComponent"], canActivate: [_services_guest_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuestGuard"]] },
    { path: 'user/posts', component: _views_post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__["PostListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'stream/new', component: _views_post_post_new_post_new_component__WEBPACK_IMPORTED_MODULE_9__["PostNewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'stream/:pid', component: _views_post_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_10__["PostItemComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'stream/:pid/comment', component: _views_comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_14__["CommentListComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'stream/:pid/comment/new', component: _views_comment_comment_new_comment_new_component__WEBPACK_IMPORTED_MODULE_15__["CommentNewComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'community', component: _views_community_community_component__WEBPACK_IMPORTED_MODULE_12__["CommunityComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'manage', component: _views_manage_manage_component__WEBPACK_IMPORTED_MODULE_16__["ManageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_17__["AdminGuard"]] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
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

module.exports = "a:hover {\n  text-decoration: none;\n}\n\n.container-align {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.container {\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.form-control {\n  margin-bottom: 5px;\n}\n\n.bc-blue {\n  background-color: #337ab7;\n}\n\n.bc-grey {\n  background-color: #d3d3d354;\n}\n\n.text-white {\n  color: white;\n}\n\n.text-blue {\n  color: #337ab7;\n}\n\n.text-grey {\n  color: grey;\n  font-weight: bold;\n}\n\n.text-black {\n  color: black;\n}\n\n.text-white-bold {\n  color: white;\n  font-weight: bold;\n}\n\nli i {\n  padding: 3px;\n  float: right;\n}\n\n.vertical-line {\n  border-left: 1px solid lightgrey;\n}\n\n.cl-list-item-borderless {\n  border-top: 0 none;\n  border-bottom: 0 none;\n  border-left: 0 none;\n  border-right: 0 none;\n}\n\n.paragraph-img {\n  height: 400px;\n  width: 1000px;\n  max-height: 30%;\n  max-width: 90%;\n}\n\n.icon-padding {\n  padding-top: 8px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyLWFsaWduIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJjLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xufVxuXG4uYmMtZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM1NDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0LWJsdWUge1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLnRleHQtZ3JleSB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtYmxhY2sge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi50ZXh0LXdoaXRlLWJvbGQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5saSBpIHtcbiAgcGFkZGluZzogM3B4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi52ZXJ0aWNhbC1saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gIGJvcmRlci10b3A6IDAgbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xuICBib3JkZXItbGVmdDogMCBub25lO1xuICBib3JkZXItcmlnaHQ6IDAgbm9uZTtcbn1cblxuLnBhcmFncmFwaC1pbWcge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMCU7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4uaWNvbi1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/header/header.component */ "./src/app/views/header/header.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/homepage/homepage.component */ "./src/app/views/homepage/homepage.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _views_posts_stream_posts_stream_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/posts-stream/posts-stream.component */ "./src/app/views/posts-stream/posts-stream.component.ts");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var _views_post_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/post/post-item/post-item.component */ "./src/app/views/post/post-item/post-item.component.ts");
/* harmony import */ var _views_post_post_new_post_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/post/post-new/post-new.component */ "./src/app/views/post/post-new/post-new.component.ts");
/* harmony import */ var _views_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/post/post-edit/post-edit.component */ "./src/app/views/post/post-edit/post-edit.component.ts");
/* harmony import */ var _views_post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/post/post-list/post-list.component */ "./src/app/views/post/post-list/post-list.component.ts");
/* harmony import */ var _services_guest_guard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/guest-guard.service */ "./src/app/services/guest-guard.service.ts");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/comment.service.client */ "./src/app/services/comment.service.client.ts");
/* harmony import */ var _views_community_community_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/community/community.component */ "./src/app/views/community/community.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_map_service_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/map.service.client */ "./src/app/services/map.service.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/comment/comment-list/comment-list.component */ "./src/app/views/comment/comment-list/comment-list.component.ts");
/* harmony import */ var _views_comment_comment_new_comment_new_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/comment/comment-new/comment-new.component */ "./src/app/views/comment/comment-new/comment-new.component.ts");
/* harmony import */ var _views_manage_manage_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/manage/manage.component */ "./src/app/views/manage/manage.component.ts");
/* harmony import */ var _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/admin-guard.service */ "./src/app/services/admin-guard.service.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _views_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _views_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _views_posts_stream_posts_stream_component__WEBPACK_IMPORTED_MODULE_16__["PostsStreamComponent"],
                _views_post_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_18__["PostItemComponent"],
                _views_post_post_new_post_new_component__WEBPACK_IMPORTED_MODULE_19__["PostNewComponent"],
                _views_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_20__["PostEditComponent"],
                _views_post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_21__["PostListComponent"],
                _views_community_community_component__WEBPACK_IMPORTED_MODULE_24__["CommunityComponent"],
                _views_comment_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_28__["CommentListComponent"],
                _views_comment_comment_new_comment_new_component__WEBPACK_IMPORTED_MODULE_29__["CommentNewComponent"],
                _views_manage_manage_component__WEBPACK_IMPORTED_MODULE_30__["ManageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_25__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD1ySa5yEqN1VPjmmyU4G5Rgb5OLokocoY'
                })
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_11__["UserService"], _services_header_service_client__WEBPACK_IMPORTED_MODULE_12__["HeaderService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_15__["SharedService"], _services_post_service_client__WEBPACK_IMPORTED_MODULE_17__["PostService"], _services_guest_guard_service__WEBPACK_IMPORTED_MODULE_22__["GuestGuard"], _services_comment_service_client__WEBPACK_IMPORTED_MODULE_23__["CommentService"], _services_map_service_client__WEBPACK_IMPORTED_MODULE_26__["MapService"], _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_31__["AdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/admin-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admin-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");





var AdminGuard = /** @class */ (function () {
    function AdminGuard(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        if (this.sharedService.user && this.sharedService.user.type === 'Admin') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // console.log(this.userService.loggedIn());
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/comment.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/comment.service.client.ts ***!
  \****************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
    }
    CommentService.prototype.createComment = function (postId, comment) {
        comment.postId = postId;
        return this.http.post(this.baseUrl + '/api/post/' + postId + '/comment-list', comment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.findAllComments = function () {
        return this.http.get(this.baseUrl + '/api/comments')
            .map(function (res) {
            return res.text() ? res.json() : [];
        });
    };
    CommentService.prototype.findAllCommentsForPost = function (postId) {
        return this.http.get(this.baseUrl + '/api/post/' + postId + '/comment-list')
            .map(function (res) {
            return res.text() ? res.json() : [];
        });
    };
    CommentService.prototype.findCommentById = function (commentId) {
        return this.http.get(this.baseUrl + '/api/comment-list/' + commentId)
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    CommentService.prototype.updateComment = function (commentId, newComment) {
        return this.http.put(this.baseUrl + '/api/comment-list/' + commentId, newComment)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService.prototype.deleteComment = function (commentId) {
        return this.http.delete(this.baseUrl + '/api/comment-list/' + commentId)
            .map(function (res) {
            return res.json();
        });
    };
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/guest-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/guest-guard.service.ts ***!
  \*************************************************/
/*! exports provided: GuestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return GuestGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");





var GuestGuard = /** @class */ (function () {
    function GuestGuard(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
    }
    GuestGuard.prototype.canActivate = function (route, state) {
        if (this.sharedService.user) {
            return false;
        }
        else {
            return true;
        }
    };
    GuestGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], GuestGuard);
    return GuestGuard;
}());



/***/ }),

/***/ "./src/app/services/header.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/header.service.client.ts ***!
  \***************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.visible = false;
    }
    HeaderService.prototype.hide = function () { this.visible = false; };
    HeaderService.prototype.show = function () { this.visible = true; };
    HeaderService.prototype.toggle = function () { this.visible = !this.visible; };
    HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/services/map.service.client.ts":
/*!************************************************!*\
  !*** ./src/app/services/map.service.client.ts ***!
  \************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MapService = /** @class */ (function () {
    function MapService(http) {
        this.http = http;
        this.loc = { location: { lat: '', lng: '', region: '', country: '' } };
    }
    MapService.prototype.ngOnInit = function () {
        // this.http.get<{ ip: string }>('https://jsonip.com')
        //     .subscribe(data => {
        //       console.log('th data', data);
        //       this.ip = data.ip;
        //       this.http.get<Location>('https://geo.ipify.org/api/v1?apiKey=at_oVTOjvWzfktZRJDeQsm1wwVWJSOLL&ipAddress=' + data.ip)
        //           .subscribe(location => {
        //             this.loc = location;
        //           });
        //     });
    };
    MapService.prototype.getLocation = function () {
        // return this.http.get<Location>('https://geo.ipify.org/api/v1?apiKey=at_oVTOjvWzfktZRJDeQsm1wwVWJSOLL&ipAddress=8.8.8.8');
    };
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/services/post.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/post.service.client.ts ***!
  \*************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl;
        this.userPosts = [];
    }
    PostService.prototype.createPost = function (userId, post) {
        post.userId = userId;
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/post', post)
            .map(function (res) {
            return res.json();
        });
    };
    PostService.prototype.findAllPosts = function () {
        return this.http.get(this.baseUrl + '/api/posts')
            .map(function (res) {
            return res.text() ? res.json() : [];
        });
    };
    PostService.prototype.findPostsByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/post')
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    PostService.prototype.findPostById = function (postId) {
        return this.http.get(this.baseUrl + '/api/post/' + postId)
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    PostService.prototype.updatePost = function (postId, newPost) {
        return this.http.put(this.baseUrl + '/api/post/' + postId, newPost)
            .map(function (res) {
            return res.json();
        });
    };
    PostService.prototype.deletePost = function (postId) {
        return this.http.delete(this.baseUrl + '/api/post/' + postId)
            .map(function (res) {
            return res.json();
        });
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shared.service.client.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UserService = /** @class */ (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.loggedInFlag = this.isLoggedIn.asObservable();
        this.uid = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.loggedInUser = this.uid.asObservable();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
    }
    UserService.prototype.loginObs = function (userId) {
        this.isLoggedIn.next(true);
        this.uid.next(userId);
    };
    UserService.prototype.logoutObs = function () {
        this.isLoggedIn.next(false);
        this.uid.next('');
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findAllUsers = function () {
        return this.http.get(this.baseUrl + '/api/users')
            .map(function (res) {
            return res.text() ? res.json() : [];
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    UserService.prototype.updateUser = function (userId, newUser) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, newUser)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, { withCredentials: true })
            .map(function (res) {
            return res.text() ? res.json() : undefined;
        });
    };
    UserService.prototype.logout = function () {
        // console.log("logout...");
        return this.http.post(this.baseUrl + '/api/logout', {}, { withCredentials: true });
    };
    UserService.prototype.register = function (username, password, email, type, firstName, lastName) {
        var user = {
            username: username,
            password: password,
            email: email,
            type: type,
            firstName: firstName,
            lastName: lastName
        };
        return this.http.post(this.baseUrl + '/api/register', user, { withCredentials: true })
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', { withCredentials: true })
            .map(function (res) {
            var user = res.json();
            // console.log(user);
            if (user != 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _shared_service_client__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/views/comment/comment-list/comment-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/comment/comment-list/comment-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1lbnQvY29tbWVudC1saXN0L2NvbW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/comment/comment-list/comment-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/comment/comment-list/comment-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<section class=\"my-5 p-5\">\n  <a routerLink=\"./new\" class=\"btn btn-primary btn-lg\">New Comment</a>\n  <a routerLink=\"/stream\" class=\"btn btn-danger btn-lg\">Back</a>\n  <hr class=\"my-5\">\n  <div *ngFor=\"let comment of comments\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"mdb-feed\">\n          <div class=\"news\">\n            <div class=\"excerpt\">\n              <div class=\"brief\">\n                <a class=\"font-weight-bold\" (click)=\"onGetUserPosts(comment.username)\">{{ comment.username }}</a>\n                commented on {{ comment.dateCreated.toString().slice(0,10) }}:\n                <p class=\"dark-grey-text\">{{ comment.content }}</p>\n              </div>\n              <div style=\"display: flex;\" *ngIf=\"userId !== null && user.type === 'Admin'\">\n                <a class=\"btn btn-danger btn-md\" (click)=\"onDelete(comment._id)\">Delete</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr class=\"my-5\" *ngIf=\"comments.length > 0\">\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/views/comment/comment-list/comment-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/comment/comment-list/comment-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CommentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListComponent", function() { return CommentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/comment.service.client */ "./src/app/services/comment.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");








var CommentListComponent = /** @class */ (function () {
    function CommentListComponent(header, postService, sharedService, router, commentService, route, userService) {
        this.header = header;
        this.postService = postService;
        this.sharedService = sharedService;
        this.router = router;
        this.commentService = commentService;
        this.route = route;
        this.userService = userService;
        this.comments = [];
    }
    CommentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header.show();
        this.user = this.sharedService.user;
        this.route.params.subscribe(function (params) {
            _this.postId = params['pid'];
        });
        this.commentService.findAllCommentsForPost(this.postId).subscribe(function (comments) {
            _this.comments = comments;
            // console.log(this.comments);
        });
    };
    CommentListComponent.prototype.onGetUserPosts = function (username) {
        var _this = this;
        this.userService.findUserByUsername(username).subscribe(function (user) {
            // console.log(user);
            if (user.type !== 'User') {
                _this.postService.findPostsByUser(user._id)
                    .subscribe(function (posts) {
                    _this.postService.userPosts = posts;
                    _this.router.navigate(['/user/posts']);
                });
            }
            else {
                alert("This user is not our community member");
                _this.router.navigate(['./'], { relativeTo: _this.route });
            }
        });
    };
    CommentListComponent.prototype.onDelete = function (commentId) {
        var _this = this;
        this.commentService.deleteComment(commentId).subscribe(function (comment) {
            _this.router.navigate(['/stream']);
        });
    };
    CommentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-list',
            template: __webpack_require__(/*! ./comment-list.component.html */ "./src/app/views/comment/comment-list/comment-list.component.html"),
            styles: [__webpack_require__(/*! ./comment-list.component.css */ "./src/app/views/comment/comment-list/comment-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_post_service_client__WEBPACK_IMPORTED_MODULE_3__["PostService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_comment_service_client__WEBPACK_IMPORTED_MODULE_6__["CommentService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
    ], CommentListComponent);
    return CommentListComponent;
}());



/***/ }),

/***/ "./src/app/views/comment/comment-new/comment-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/comment/comment-new/comment-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1lbnQvY29tbWVudC1uZXcvY29tbWVudC1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/comment/comment-new/comment-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/comment/comment-new/comment-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Comment</h5>\n          <form class=\"form-signin\" (ngSubmit)=\"onComment()\" #f='ngForm'>\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"content\" class=\"form-control\" name=\"content\" placeholder=\"{{ comment.content }}\" required [(ngModel)]=\"comment.content\" #content=\"ngModel\">\n              <label for=\"content\">Content</label>\n              <span class=\"help-block\" *ngIf=\"!content.valid && content.touched\">\n                Please enter some contents\n              </span>\n            </div>\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n            <button class=\"btn btn-lg btn-danger btn-block text-uppercase\" type=\"button\" routerLink=\"../\">Back</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/comment/comment-new/comment-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/comment/comment-new/comment-new.component.ts ***!
  \********************************************************************/
/*! exports provided: CommentNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentNewComponent", function() { return CommentNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/comment.service.client */ "./src/app/services/comment.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var CommentNewComponent = /** @class */ (function () {
    function CommentNewComponent(header, postService, sharedService, router, commentService, route) {
        this.header = header;
        this.postService = postService;
        this.sharedService = sharedService;
        this.router = router;
        this.commentService = commentService;
        this.route = route;
        this.commentForm = _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"];
        this.user = { username: '' };
        this.comment = { postId: '', content: '', username: '' };
    }
    CommentNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header.show();
        this.user = this.sharedService.user;
        this.route.params.subscribe(function (params) {
            _this.postId = params['pid'];
        });
    };
    CommentNewComponent.prototype.onComment = function () {
        var _this = this;
        this.comment.postId = this.postId;
        this.comment.username = this.user.username;
        this.commentService.createComment(this.postId, this.comment)
            .subscribe(function (comment) {
            _this.comment = comment;
        });
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentNewComponent.prototype, "commentForm", void 0);
    CommentNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-new',
            template: __webpack_require__(/*! ./comment-new.component.html */ "./src/app/views/comment/comment-new/comment-new.component.html"),
            styles: [__webpack_require__(/*! ./comment-new.component.css */ "./src/app/views/comment/comment-new/comment-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_post_service_client__WEBPACK_IMPORTED_MODULE_3__["PostService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_comment_service_client__WEBPACK_IMPORTED_MODULE_6__["CommentService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], CommentNewComponent);
    return CommentNewComponent;
}());



/***/ }),

/***/ "./src/app/views/community/community.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/community/community.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container-section {\n  overflow:hidden;\n  padding-bottom:40%;\n  position:relative;\n  height:0;\n}\n.map-container-section iframe {\n  left:0;\n  top:0;\n  height:100%;\n  width:100%;\n  position:absolute;\n}\nagm-map {\n  height: 500px;\n  width: 800px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29tbXVuaXR5L2NvbW11bml0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxNQUFNO0VBQ04sS0FBSztFQUNMLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29tbXVuaXR5L2NvbW11bml0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXItc2VjdGlvbiB7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgcGFkZGluZy1ib3R0b206NDAlO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgaGVpZ2h0OjA7XG59XG4ubWFwLWNvbnRhaW5lci1zZWN0aW9uIGlmcmFtZSB7XG4gIGxlZnQ6MDtcbiAgdG9wOjA7XG4gIGhlaWdodDoxMDAlO1xuICB3aWR0aDoxMDAlO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA4MDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/community/community.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/community/community.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<section class=\"my-5 p-5\">\n  <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Join Us</h2>\n  <p class=\"text-center w-responsive mx-auto pb-5\">Join our community and make your own contribution.</p>\n  <div class=\"row\">\n    <div class=\"col-lg-5 mb-lg-0 mb-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"md-form form-label-group\">\n            <i class=\"fas fa-user prefix grey-text\"></i>\n            <input type=\"text\" id=\"firstName\" name=\"firstName\" class=\"form-control\" [(ngModel)]=\"user.firstName\" required>\n            <label for=\"firstName\">First Name</label>\n          </div>\n          <div class=\"md-form form-label-group\">\n            <i class=\"fas fa-user prefix grey-text\"></i>\n            <input type=\"text\" id=\"lastName\" name=\"lastName\" class=\"form-control\" [(ngModel)]=\"user.lastName\" required>\n            <label for=\"lastName\">Last Name</label>\n          </div>\n          <div class=\"md-form form-label-group\">\n            <i class=\"fas fa-tag prefix grey-text\"></i>\n            <input type=\"text\" id=\"address\" name=\"address\" class=\"form-control\" [(ngModel)]=\"user.address\" required>\n            <label for=\"address\">Address</label>\n          </div>\n          <div class=\"md-form form-label-group\">\n            <i class=\"fas fa-tag prefix grey-text\"></i>\n            <input type=\"text\" id=\"state\" name=\"state\" class=\"form-control\" [(ngModel)]=\"user.state\">\n            <label for=\"state\">State</label>\n          </div>\n          <div class=\"md-form form-label-group\">\n            <i class=\"fas fa-tag prefix grey-text\"></i>\n            <input type=\"text\" id=\"country\" name=\"country\" class=\"form-control\" [(ngModel)]=\"user.country\">\n            <label for=\"country\">Country</label>\n          </div>\n          <div class=\"text-center\">\n            <button class=\"btn btn-light-blue\" (click)=\"onSubmit()\">Join</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-7\">\n      <div id=\"map-container-section\" class=\"z-depth-1-half map-container-section mb-4\" style=\"height: 500px; width: 800px;\">\n        <!--<iframe src=\"https://maps.google.com/maps?q=Manhatan&t=&z=15&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\"-->\n                <!--style=\"border:0\" allowfullscreen></iframe>-->\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n\n\n"

/***/ }),

/***/ "./src/app/views/community/community.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/community/community.component.ts ***!
  \********************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_map_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/map.service.client */ "./src/app/services/map.service.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var CommunityComponent = /** @class */ (function () {
    function CommunityComponent(header, sharedService, userService, router, mapService, http) {
        this.header = header;
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.mapService = mapService;
        this.http = http;
        this.user = { firstName: '', lastName: '', address: '', state: '', country: '', type: 'user' };
        this.lat = '';
        this.lng = '';
    }
    CommunityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header.show();
        if (this.sharedService.user) {
            this.user = this.sharedService.user;
            this.userId = this.sharedService.user._id;
        }
        // this.data = this.mapService.loc;
        // this.lat = this.data.location.lat;
        // this.lng = this.data.location.lng;
        // this.user.state = this.data.location.region;
        // this.user.country = this.data.location.country;
        // this.mapService.getLocation().subscribe((data) => {
        //   // console.log(data);
        //   this.lat = data.location.lat;
        //   this.lng = data.location.lng;
        //   this.user.state = data.location.region;
        //   this.user.country = data.location.country;
        // })
        this.http.get('https://jsonip.com')
            .subscribe(function (data) {
            // console.log('th data', data);
            _this.http.get('https://geo.ipify.org/api/v1?apiKey=at_oVTOjvWzfktZRJDeQsm1wwVWJSOLL&ipAddress=' + data.ip)
                .subscribe(function (data) {
                _this.lat = data.location.lat;
                _this.lng = data.location.lng;
                _this.user.state = data.location.region;
                _this.user.country = data.location.country;
            });
        });
        // this.http.get<Location>('https://geo.ipify.org/api/v1?apiKey=at_oVTOjvWzfktZRJDeQsm1wwVWJSOLL&ipAddress=8.8.8.8')
        //     .subscribe(data => {
        //       this.lat = data.location.lat;
        //       this.lng = data.location.lng;
        //       this.user.state = data.location.region;
        //       this.user.country = data.location.country;
        //     });
    };
    CommunityComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user.type = 'membership';
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            _this.user = user;
            _this.sharedService.user = user;
        });
        this.router.navigate(['/home']);
    };
    CommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/views/community/community.component.html"),
            styles: [__webpack_require__(/*! ./community.component.css */ "./src/app/views/community/community.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_map_service_client__WEBPACK_IMPORTED_MODULE_6__["MapService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/views/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"mb-1 navbar navbar-expand-lg navbar-dark\" style=\"background-color: #4fbee6\">\n  <a class=\"navbar-brand\" routerLink=\"/home\" style=\"color: #fff\">🐂🍺</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-333\"\n          aria-controls=\"navbarSupportedContent-333\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-333\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/stream\">Posts</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!(userId !== null && user.type === 'Admin')\">\n        <a class=\"nav-link\" routerLink=\"/community\">Community</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"userId !== null && user.type === 'Admin'\">\n        <a class=\"nav-link\" routerLink=\"/manage\">Manage</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\" *ngIf=\"!loggedInFlag\">Login</a>\n        <a class=\"nav-link\" *ngIf=\"loggedInFlag\" routerLink=\"/profile\">{{ user.username }}</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"onLogout()\" *ngIf=\"loggedInFlag\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, route, router, sharedService) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.user = { username: '', type: '' };
        this.loggedInFlag = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription1 = this.userService.loggedInFlag
            .subscribe(function (loggedInFlag) {
            _this.loggedInFlag = loggedInFlag;
        });
        this.subscription2 = this.userService.loggedInUser
            .subscribe(function (loggedInUser) {
            _this.userId = loggedInUser;
        });
        if (this.loggedInFlag) {
            // console.log(this.userId);
            this.userService.findUserById(this.userId)
                .subscribe(function (user) {
                _this.user = user;
            });
        }
        if (this.sharedService.user) {
            this.loggedInFlag = true;
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        var _this = this;
        this.userService.logoutObs();
        this.userService.logout()
            .subscribe(function (data) {
            _this.sharedService.user = null;
            // console.log("header", this.sharedService.user);
            _this.router.navigate(['/home']);
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/homepage/homepage.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pad {\n  padding: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkIHtcbiAgcGFkZGluZzogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/homepage/homepage.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<section class=\"my-5 p-5\">\n  <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Welcome to our amazing 🐂🍺 website</h2>\n  <p class=\"grey-text text-center w-responsive mx-auto mb-5\">You can post whatever you like in this website, read others' posts and even comment on them. Join our community to share your experience!</p>\n  <div style=\"text-align: center\">\n    <a routerLink=\"/guest\" *ngIf=\"user.type === ''\" class=\"btn blue-gradient btn-lg text-white\">Explore</a>\n    <a routerLink=\"/stream\" *ngIf=\"user.type !== ''\" class=\"btn blue-gradient btn-lg text-white\">Explore</a>\n    <a routerLink=\"/login\" *ngIf=\"user.type === ''\" class=\"btn aqua-gradient btn-lg text-white\">Join Us</a>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4 pad\">\n      <div class=\"card-wrapper\">\n        <div id=\"card-1\" class=\"card card-rotating text-center\">\n          <div class=\"face front\">\n            <div class=\"card-up\">\n              <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/19.jpg\" alt=\"Team member card image\">\n            </div>\n            <div class=\"avatar mx-auto white\">\n              <img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\" style=\"height: 250px; width: 250px\" class=\"rounded-circle img-fluid\"\n                   alt=\"First sample avatar image\">\n            </div>\n            <div class=\"card-body\">\n              <h4 class=\"font-weight-bold mt-1 mb-3\">Zhenyuan Xi</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-12 mb-lg-0 mb-4 pad\">\n      <div class=\"card-wrapper\">\n        <div id=\"card-2\" class=\"card card-rotating text-center\">\n          <div class=\"face front\">\n            <div class=\"card-up\">\n              <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/82.jpg\" alt=\"Team member card image\">\n            </div>\n            <div class=\"avatar mx-auto white\">\n              <img src=\"../../../assets/images/Screen%20Shot%202019-04-16%20at%207.52.28%20PM.png\" style=\"width: 250px; height: 250px;\" class=\"rounded-circle\" alt=\"Second sample avatar image\">\n            </div>\n            <div class=\"card-body\">\n              <h4 class=\"font-weight-bold mt-1 mb-3\">Yuan Cai</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-12 pad\">\n      <div class=\"card-wrapper\">\n        <div id=\"card-3\" class=\"card card-rotating text-center\">\n          <div class=\"face front\">\n            <div class=\"card-up\">\n              <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg\"\n                   alt=\"Team member card image\">\n            </div>\n            <div class=\"avatar mx-auto white\">\n              <img src=\"../../../assets/images/Screen%20Shot%202019-04-16%20at%207.52.52%20PM.png\" style=\"width: 250px; height: 250px;\" class=\"rounded-circle img-fluid\"\n                   alt=\"Third sample avatar image\">\n            </div>\n            <div class=\"card-body\">\n              <h4 class=\"font-weight-bold mt-1 mb-3\">Yiran Zhang</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/views/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(header, shareService) {
        this.header = header;
        this.shareService = shareService;
        this.user = { type: '' };
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.header.show();
        if (this.shareService.user) {
            this.user = this.shareService.user;
        }
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/views/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/views/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/views/manage/manage.component.css":
/*!***************************************************!*\
  !*** ./src/app/views/manage/manage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hbmFnZS9tYW5hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/manage/manage.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/manage/manage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<section class=\"my-5 p-5\">\n  <a routerLink=\"/home\" class=\"btn btn-danger btn-lg\">Back</a>\n  <hr class=\"my-5\">\n  <div class=\"card\">\n    <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Users</h3>\n    <div class=\"card-body\">\n      <div id=\"users\" class=\"table-editable\">\n        <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n          <tr>\n            <th class=\"text-center\">Username</th>\n            <th class=\"text-center\">First Name</th>\n            <th class=\"text-center\">Last Name</th>\n            <th class=\"text-center\">Email</th>\n            <th class=\"text-center\">State</th>\n            <th class=\"text-center\">Country</th>\n            <th class=\"text-center\">Address</th>\n            <th class=\"text-center\">Type</th>\n            <th class=\"text-center\">Option</th>\n          </tr>\n          <tr *ngFor=\"let user of users\">\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ user.username }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ user.firstName }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ user.lastName }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ user.email }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ user.state }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ user.country }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ user.address }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ user.type }}</td>\n            <td>\n              <span class=\"table-remove\"><a (click)=\"onDeleteUser(user._id)\" class=\"btn btn-danger btn-rounded btn-sm my-0\" *ngIf=\"user.type !== 'Admin'\">Delete</a></span>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <hr class=\"my-5\">\n  <div class=\"card\">\n    <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Posts</h3>\n    <div class=\"card-body\">\n      <div id=\"posts\" class=\"table-editable\">\n        <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n          <tr>\n            <th class=\"text-center\">Title</th>\n            <th class=\"text-center\">Content</th>\n            <th class=\"text-center\">Username</th>\n            <th class=\"text-center\">Image</th>\n            <th class=\"text-center\">Option</th>\n          </tr>\n          <tr *ngFor=\"let post of posts\">\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ post.title }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ post.content }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ post.username }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ post.imagePath }}</td>\n            <td>\n              <span class=\"table-remove\"><a (click)=\"onDeletePost(post._id)\" class=\"btn btn-danger btn-rounded btn-sm my-0\">Delete</a></span>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <hr class=\"my-5\">\n  <div class=\"card\">\n    <h3 class=\"card-header text-center font-weight-bold text-uppercase py-4\">Comments</h3>\n    <div class=\"card-body\">\n      <div id=\"comments\" class=\"table-editable\">\n        <table class=\"table table-bordered table-responsive-md table-striped text-center\">\n          <tr>\n            <th class=\"text-center\">Content</th>\n            <th class=\"text-center\">Username</th>\n            <th class=\"text-center\">Option</th>\n          </tr>\n          <tr *ngFor=\"let comment of comments\">\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ comment.content }}</td>\n            <td class=\"pt-3-half\" contenteditable=\"true\">{{ comment.username }}</td>\n            <td>\n              <span class=\"table-remove\"><a (click)=\"onDeleteComment(comment._id)\" class=\"btn btn-danger btn-rounded btn-sm my-0\">Delete</a></span>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <hr class=\"my-5\">\n</section>\n"

/***/ }),

/***/ "./src/app/views/manage/manage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/manage/manage.component.ts ***!
  \**************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_comment_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/comment.service.client */ "./src/app/services/comment.service.client.ts");








var ManageComponent = /** @class */ (function () {
    function ManageComponent(header, postService, sharedService, router, userService, commentService, route) {
        this.header = header;
        this.postService = postService;
        this.sharedService = sharedService;
        this.router = router;
        this.userService = userService;
        this.commentService = commentService;
        this.route = route;
        this.user = { _id: '' };
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header.show();
        this.user = this.sharedService.user;
        this.userService.findAllUsers().subscribe(function (users) {
            _this.users = users;
        });
        this.postService.findAllPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
        this.commentService.findAllComments().subscribe(function (comments) {
            _this.comments = comments;
        });
    };
    ManageComponent.prototype.onDeleteUser = function (userId) {
        if (this.user._id !== userId) {
            this.userService.deleteUser(userId).subscribe();
        }
        this.router.navigate(['/home'], { relativeTo: this.route });
    };
    ManageComponent.prototype.onDeletePost = function (postId) {
        this.postService.deletePost(postId).subscribe();
        this.router.navigate(['/home'], { relativeTo: this.route });
    };
    ManageComponent.prototype.onDeleteComment = function (commentId) {
        this.commentService.deleteComment(commentId).subscribe();
        this.router.navigate(['/home'], { relativeTo: this.route });
    };
    ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/views/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/views/manage/manage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_post_service_client__WEBPACK_IMPORTED_MODULE_3__["PostService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_6__["UserService"], _services_comment_service_client__WEBPACK_IMPORTED_MODULE_7__["CommentService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/views/post/post-edit/post-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/post/post-edit/post-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3QvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/post/post-edit/post-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/post/post-edit/post-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  post-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/post/post-edit/post-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/post/post-edit/post-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostEditComponent = /** @class */ (function () {
    function PostEditComponent() {
    }
    PostEditComponent.prototype.ngOnInit = function () {
    };
    PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-edit',
            template: __webpack_require__(/*! ./post-edit.component.html */ "./src/app/views/post/post-edit/post-edit.component.html"),
            styles: [__webpack_require__(/*! ./post-edit.component.css */ "./src/app/views/post/post-edit/post-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostEditComponent);
    return PostEditComponent;
}());



/***/ }),

/***/ "./src/app/views/post/post-item/post-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/post/post-item/post-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3QvcG9zdC1pdGVtL3Bvc3QtaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/post/post-item/post-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/post/post-item/post-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<section class=\"my-5 p-5\">\n  <h2 class=\"h1-responsive font-weight-bold text-center my-5\">{{ post.title }}</h2>\n  <div class=\"row\">\n    <div class=\"col-lg-5 text-center text-lg-left\">\n      <img class=\"img-fluid\" src=\"{{ post.imagePath }}\" alt=\"Sample image\">\n    </div>\n    <div class=\"col-lg-7\">\n      <div class=\"row mb-3\">\n        <div class=\"col-1\">\n          <i class=\"fas fa-share fa-lg indigo-text\"></i>\n        </div>\n        <div class=\"col-xl-10 col-md-11 col-10\">\n          <h5 class=\"font-weight-bold mb-3\">Content</h5>\n          <p class=\"grey-text\">{{ post.content }}</p>\n        </div>\n      </div>\n      <div class=\"row mb-3\">\n        <div class=\"col-1\">\n          <i class=\"fas fa-share fa-lg indigo-text\"></i>\n        </div>\n        <div class=\"col-xl-10 col-md-11 col-10\">\n          <h5 class=\"font-weight-bold mb-3\">Author</h5>\n          <p class=\"grey-text\">{{ post.username }}</p>\n          <p class=\"grey-text\">{{ post.dateCreated.toString().slice(0,10) }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class=\"my-5\">\n  <a routerLink=\"/stream\" class=\"btn btn-danger btn-lg\">Back</a>\n</section>\n\n"

/***/ }),

/***/ "./src/app/views/post/post-item/post-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/post/post-item/post-item.component.ts ***!
  \*************************************************************/
/*! exports provided: PostItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItemComponent", function() { return PostItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/post.service.client */ "./src/app/services/post.service.client.ts");







var PostItemComponent = /** @class */ (function () {
    function PostItemComponent(header, sharedService, userService, router, postService, route) {
        this.header = header;
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.postService = postService;
        this.route = route;
        this.post = { title: '', content: '', dateCreated: '' };
    }
    PostItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header.show();
        this.route.params.subscribe(function (params) {
            _this.postId = params['pid'];
        });
        this.postService.findPostById(this.postId)
            .subscribe(function (post) {
            _this.post = post;
        });
    };
    PostItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-item',
            template: __webpack_require__(/*! ./post-item.component.html */ "./src/app/views/post/post-item/post-item.component.html"),
            styles: [__webpack_require__(/*! ./post-item.component.css */ "./src/app/views/post/post-item/post-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_post_service_client__WEBPACK_IMPORTED_MODULE_6__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], PostItemComponent);
    return PostItemComponent;
}());



/***/ }),

/***/ "./src/app/views/post/post-list/post-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/post/post-list/post-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3QvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/post/post-list/post-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/post/post-list/post-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<section class=\"my-5 p-5\">\n\n  <h2 class=\"h1-responsive font-weight-bold text-center my-3\">Recent posts for {{ username }}</h2>\n  <p class=\"text-center dark-grey-text w-responsive mx-auto mb-5\">\n    Below is posts stream for {{ username }}!\n  </p>\n  <hr class=\"my-5\">\n  <div *ngFor=\"let post of posts\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-xl-4\">\n        <div class=\"view overlay rounded z-depth-1-half mb-lg-0 mb-4\">\n          <img class=\"img-fluid\" [src]=\"post.imagePath\" alt=\"Sample image\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-7 col-xl-8\">\n        <a style=\"cursor: pointer;\" (click)=\"onPostDetail(post._id)\">\n          <h3 class=\"font-weight-bold mb-3\"><strong>{{ post.title }}</strong></h3>\n        </a>\n        <p class=\"dark-grey-text\">{{ post.content }}</p>\n        <p>by {{ post.username }}, {{ post.dateCreated.toString().slice(0,10) }}</p>\n        <div style=\"display: flex;\">\n          <a class=\"btn btn-primary btn-md\" [routerLink]=\"['/stream', post._id]\">Read more</a>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <p class=\"align-self-center\" style=\"margin: 0; color: red;\" *ngIf=\"userId === null\">You must login to read more</p>\n        </div>\n        <br>\n        <div style=\"display: flex;\">\n          <a class=\"btn btn-primary btn-md\" [routerLink]=\"['/stream', post._id, 'comment']\">Comment</a>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <p class=\"align-self-center\" style=\"margin: 0; color: red;\" *ngIf=\"userId === null\">You must login to comment</p>\n        </div>\n      </div>\n    </div>\n    <hr class=\"my-5\" *ngIf=\"posts.length > 0\">\n  </div>\n  <a routerLink=\"/stream\" class=\"btn btn-danger btn-lg\">Back</a>\n</section>\n\n"

/***/ }),

/***/ "./src/app/views/post/post-list/post-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/post/post-list/post-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/post.service.client */ "./src/app/services/post.service.client.ts");







var PostListComponent = /** @class */ (function () {
    function PostListComponent(header, sharedService, userService, router, postService) {
        this.header = header;
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.postService = postService;
        this.userId = null;
        this.posts = [];
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.header.show();
        if (this.sharedService.user) {
            this.userId = this.sharedService.user._id;
        }
        this.posts = this.postService.userPosts;
        if (this.posts.length > 0) {
            this.username = this.posts[0].username;
        }
    };
    PostListComponent.prototype.onPostDetail = function (postId) {
        if (this.userId !== null) {
            this.router.navigate(['/stream', postId]);
        }
        else {
            alert("You must login to see the post details");
            return false;
        }
    };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/views/post/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/views/post/post-list/post-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_post_service_client__WEBPACK_IMPORTED_MODULE_6__["PostService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/views/post/post-new/post-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/post/post-new/post-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3QvcG9zdC1uZXcvcG9zdC1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/post/post-new/post-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/post/post-new/post-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Post</h5>\n          <form class=\"form-signin\" (ngSubmit)=\"onNewPost()\" #f='ngForm'>\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"title\" class=\"form-control\" name=\"title\" placeholder=\"{{ post.title }}\" required [(ngModel)]=\"post.title\" #title=\"ngModel\">\n              <label for=\"title\">Title</label>\n              <span class=\"help-block\" *ngIf=\"!title.valid && title.touched\">\n                Please enter a valid title\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"content\" class=\"form-control\" name=\"content\" placeholder=\"{{ post.content }}\" required [(ngModel)]=\"post.content\" #content=\"ngModel\">\n              <label for=\"content\">Content</label>\n              <span class=\"help-block\" *ngIf=\"!content.valid && content.touched\">\n                Please enter some contents\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"imagePath\" class=\"form-control\" placeholder=\"{{ post.imagePath }}\" name=\"imagePath\" [(ngModel)]=\"post.imagePath\">\n              <label for=\"imagePath\">Image</label>\n            </div>\n\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!f.valid\">Create</button>\n            <button class=\"btn btn-lg btn-danger btn-block text-uppercase\" type=\"button\" routerLink=\"/stream\">Cancel</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/post/post-new/post-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/post/post-new/post-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PostNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostNewComponent", function() { return PostNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_8__);









var PostNewComponent = /** @class */ (function () {
    function PostNewComponent(header, sharedService, userService, router, postService) {
        this.header = header;
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.postService = postService;
        this.postForm = _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"];
        this.post = { userId: '', username: '', title: '', content: '', imagePath: '' };
    }
    PostNewComponent.prototype.ngOnInit = function () {
        this.userId = this.sharedService.user._id;
        this.username = this.sharedService.user.username;
        this.header.show();
    };
    PostNewComponent.prototype.onNewPost = function () {
        var _this = this;
        this.post.userId = this.userId;
        this.post.username = this.username;
        if (this.post.imagePath === '' || !this.post.imagePath) {
            this.post.imagePath = faker__WEBPACK_IMPORTED_MODULE_8__["image"].nature();
        }
        // console.log(this.post.imagePath);
        this.postService.createPost(this.userId, this.post)
            .subscribe(function () {
            _this.router.navigate(['/stream']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostNewComponent.prototype, "postForm", void 0);
    PostNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-new',
            template: __webpack_require__(/*! ./post-new.component.html */ "./src/app/views/post/post-new/post-new.component.html"),
            styles: [__webpack_require__(/*! ./post-new.component.css */ "./src/app/views/post/post-new/post-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_post_service_client__WEBPACK_IMPORTED_MODULE_7__["PostService"]])
    ], PostNewComponent);
    return PostNewComponent;
}());



/***/ }),

/***/ "./src/app/views/posts-stream/posts-stream.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/posts-stream/posts-stream.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Bvc3RzLXN0cmVhbS9wb3N0cy1zdHJlYW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/posts-stream/posts-stream.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/posts-stream/posts-stream.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<section class=\"my-5 p-5\">\n\n  <h2 class=\"h1-responsive font-weight-bold text-center my-3\">Recent posts</h2>\n  <p class=\"text-center dark-grey-text w-responsive mx-auto mb-5\">\n    Welcome to posts stream!\n  </p>\n  <hr class=\"my-5\">\n  <div *ngFor=\"let post of posts\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-xl-4\">\n        <div class=\"view overlay rounded z-depth-1-half mb-lg-0 mb-4\">\n          <img class=\"img-fluid\" [src]=\"post.imagePath\" alt=\"Sample image\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-7 col-xl-8\">\n        <a style=\"cursor: pointer;\" (click)=\"onPostDetail(post._id)\">\n          <h3 class=\"font-weight-bold mb-3\"><strong>{{ post.title }}</strong></h3>\n        </a>\n        <p class=\"dark-grey-text\">{{ post.content }}</p>\n        <p>by <a class=\"font-weight-bold\" (click)=\"onGetUserPosts(post.userId)\">{{ post.username }}</a>, {{ post.dateCreated.toString().slice(0,10) }}</p>\n        <div style=\"display: inline-flex;\">\n          <a class=\"btn btn-primary btn-md\" [routerLink]=\"['/stream', post._id]\">Read more</a>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <p class=\"align-self-center\" style=\"margin: 0; color: red;\" *ngIf=\"userId === null\">You must login to read more</p>\n        </div>\n        <br>\n        <div style=\"display: flex;\">\n          <a class=\"btn btn-primary btn-md\" [routerLink]=\"['/stream', post._id, 'comment']\">Comment</a>\n          &nbsp;&nbsp;&nbsp;&nbsp;\n          <p class=\"align-self-center\" style=\"margin: 0; color: red;\" *ngIf=\"userId === null\">You must login to comment</p>\n        </div>\n        <br>\n        <div style=\"display: flex;\" *ngIf=\"userId !== null && user.type === 'Admin'\">\n          <a class=\"btn btn-danger btn-md\" (click)=\"onDelete(post._id)\">Delete</a>\n        </div>\n      </div>\n    </div>\n    <hr class=\"my-5\" *ngIf=\"posts.length > 0\">\n  </div>\n  <div class=\"text-center\">\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"/stream/new\" *ngIf=\"userId !== null && (user.type === 'membership' || user.type === 'Admin')\">New Post</a>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/views/posts-stream/posts-stream.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/posts-stream/posts-stream.component.ts ***!
  \**************************************************************/
/*! exports provided: PostsStreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsStreamComponent", function() { return PostsStreamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _services_post_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/post.service.client */ "./src/app/services/post.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PostsStreamComponent = /** @class */ (function () {
    function PostsStreamComponent(header, postService, sharedService, router, route) {
        this.header = header;
        this.postService = postService;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        this.userId = null;
        this.user = { type: '' };
        this.posts = [];
    }
    PostsStreamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.header.show();
        if (this.sharedService.user) {
            this.userId = this.sharedService.user._id;
            this.user = this.sharedService.user;
        }
        this.postService.findAllPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsStreamComponent.prototype.onGetUserPosts = function (userId) {
        var _this = this;
        this.postService.findPostsByUser(userId)
            .subscribe(function (posts) {
            _this.postService.userPosts = posts;
            _this.router.navigate(['/user/posts']);
        });
    };
    PostsStreamComponent.prototype.onPostDetail = function (postId) {
        if (this.userId !== null) {
            this.router.navigate(['/stream', postId]);
        }
        else {
            alert("You must login to see the post details");
            return false;
        }
    };
    PostsStreamComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.postService.deletePost(postId).subscribe(function (post) {
            _this.router.navigate(['/home']);
        });
    };
    PostsStreamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts-stream',
            template: __webpack_require__(/*! ./posts-stream.component.html */ "./src/app/views/posts-stream/posts-stream.component.html"),
            styles: [__webpack_require__(/*! ./posts-stream.component.css */ "./src/app/views/posts-stream/posts-stream.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_2__["HeaderService"], _services_post_service_client__WEBPACK_IMPORTED_MODULE_3__["PostService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], PostsStreamComponent);
    return PostsStreamComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin-bottom: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Sign In</h5>\n          <form class=\"form-signin\" (ngSubmit)=\"onLogin()\" #f='ngForm'>\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required ngModel #username=\"ngModel\">\n              <label for=\"username\">Username</label>\n              <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n                Please enter a username\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required ngModel #password=\"ngModel\">\n              <label for=\"inputPassword\">Password</label>\n              <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n                Please enter a password\n              </span>\n            </div>\n\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!f.valid\">Sign in</button>\n            <button class=\"btn btn-lg btn-success btn-block text-uppercase\" type=\"button\" routerLink=\"/register\">Register</button>\n            <button class=\"btn btn-lg btn-danger btn-block text-uppercase\" type=\"button\" routerLink=\"/home\">Cancel</button>\n            <hr class=\"my-4\">\n            <!--<a class=\"btn btn-lg btn-facebook btn-block text-uppercase\" href=\"/auth/facebook?returnTo={{ '/stream' }}\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</a>-->\n            <a class=\"btn btn-lg btn-facebook btn-block text-uppercase\" href=\"/auth/facebook\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</a>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service.client */ "./src/app/services/header.service.client.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, header, userService) {
        this.router = router;
        this.route = route;
        this.header = header;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.header.hide();
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.user = user;
            if (_this.user === undefined || _this.user === null) {
                alert("Incorrect Username or Password");
                _this.router.navigate(['/login']);
                _this.userService.logoutObs();
                _this.userService.logout();
                _this.loginForm.onReset();
            }
            else {
                _this.userService.loginObs(_this.user._id);
                _this.router.navigate(['/stream']);
            }
        }, function (err) {
            alert("Incorrect Username or Password");
            _this.router.navigate(['/login']);
            _this.userService.logoutObs();
            _this.userService.logout();
            _this.loginForm.onReset();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_header_service_client__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Profile</h5>\n          <form class=\"form-signin\" (ngSubmit)=\"onUpdate()\" #f='ngForm'>\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" placeholder=\"{{ user.username }}\" required [(ngModel)]=\"user.username\" #username=\"ngModel\">\n              <label for=\"username\">Username</label>\n              <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n                Please enter a valid username\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"email\" class=\"form-control\" name=\"email\" placeholder=\"{{ user.email }}\" required [(ngModel)]=\"user.email\" #email=\"ngModel\">\n              <label for=\"email\">Email</label>\n              <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n                Please enter a valid email\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" placeholder=\"{{ user.firstName }}\" name=\"inputFirstName\" [(ngModel)]=\"user.firstName\">\n              <label for=\"inputFirstName\">First Name</label>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"inputLastName\" class=\"form-control\" placeholder=\"{{ user.lastName }}\" name=\"inputLastName\" [(ngModel)]=\"user.lastName\">\n              <label for=\"inputLastName\">Last Name</label>\n            </div>\n\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!f.valid\">Update</button>\n            <button class=\"btn btn-lg btn-danger btn-block text-uppercase\" type=\"button\" routerLink=\"/stream\">Back</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/header.service.client */ "./src/app/services/header.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(header, sharedService, userService, router) {
        this.header = header;
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.profileForm = _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"];
        this.user = { username: '', password: '', firstName: '', lastName: '', email: '' };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this.sharedService.user._id;
        this.header.show();
        return this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    ProfileComponent.prototype.onUpdate = function () {
        var _this = this;
        this.userService.updateUser(this.userId, this.user)
            .subscribe(function (user) {
            alert("Successfully update your profile");
            _this.user = user;
            _this.router.navigate(['/stream']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("f"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_header_service_client__WEBPACK_IMPORTED_MODULE_4__["HeaderService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  margin-bottom: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header.visible\">\n  <app-header></app-header>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Register</h5>\n          <form class=\"form-signin\" (ngSubmit)=\"onRegister()\" #f='ngForm'>\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required [(ngModel)]=\"regusername\" #username=\"ngModel\">\n              <label for=\"username\">Username</label>\n              <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n                Please enter a valid username\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"password\" id=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required [(ngModel)]=\"regpassword\" #password=\"ngModel\">\n              <label for=\"password\">Password</label>\n              <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n                Please enter a valid password\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"password\" id=\"verify\" class=\"form-control\" name=\"verify\" placeholder=\"Confirm Password\" required [(ngModel)]=\"regverify\" #verify=\"ngModel\">\n              <label for=\"verify\">Confirm Password</label>\n              <span class=\"help-block\" *ngIf=\"(regpassword !== regverify || !verify.valid) && verify.touched\">\n                Please enter the same password\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"email\" id=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email address\" required [(ngModel)]=\"regemail\" #email=\"ngModel\">\n              <label for=\"email\">Email address</label>\n              <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n                Please enter a valid email\n              </span>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"inputFirstName\" name=\"inputFirstName\" class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"regFirstName\">\n              <label for=\"inputFirstName\">First Name</label>\n            </div>\n\n            <div class=\"form-label-group\">\n              <input type=\"text\" id=\"inputLastName\" name=\"inputLastName\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"regLastName\">\n              <label for=\"inputLastName\">Last Name</label>\n            </div>\n\n            <span class=\"help-block\" *ngIf=\"!type.valid\">\n              Please choose one type:&nbsp;&nbsp;\n            </span>\n            <label>\n              <input type=\"radio\" [(ngModel)]=\"regtype\" name=\"type\" value=\"Admin\" required #type=\"ngModel\">Admin\n            </label>\n            <label>\n              <input type=\"radio\" [(ngModel)]=\"regtype\" name=\"type\" value=\"User\" #type=\"ngModel\">User\n            </label>\n            <hr class=\"my-4\">\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" [disabled]=\"!f.valid || regpassword !== regverify\">Register</button>\n            <button class=\"btn btn-lg btn-danger btn-block text-uppercase\" routerLink=\"/login\" type=\"button\">Cancel</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_header_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/header.service.client */ "./src/app/services/header.service.client.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, header, userService) {
        this.router = router;
        this.header = header;
        this.userService = userService;
        this.user = { username: '', password: '', email: '', firstName: '', lastName: '', type: 'user' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.header.hide();
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        this.userService.register(this.regusername, this.regpassword, this.regemail, this.regtype, this.regFirstName, this.regLastName)
            .subscribe(function (user) {
            _this.router.navigate(['/login']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "signupForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_header_service_client__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



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
var environment = {
    production: false,
    // baseUrl: 'http://localhost:3200'
    baseUrl: 'https://webdev-group.herokuapp.com'
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

module.exports = __webpack_require__(/*! /Users/stevenxi/Documents/webdev-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map