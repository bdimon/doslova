webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_infinite_scroll_infinite_scroll__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.items = [];
        this.post = [];
        this.isLoading = false;
        this.comments = [];
        this.page = 1;
        this.infiniteScroll = __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_infinite_scroll_infinite_scroll__["a" /* InfiniteScroll */];
        // private sort:string='1';
        this.showMore = false;
        this.post = navParams.get('post');
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        this.getComments();
    };
    DetailPage.prototype.getComments = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        this.showMore = true;
        if (!this.isLoading) {
            this.isLoading = true;
            var url = 'comments?_embed&page=' + this.page + '&post=' + this.post.id;
            this.api.get(url).
                subscribe(function (resp) {
                _this.isLoading = false;
                _this.comments = _this.comments.concat(resp);
                _this.page++;
                if (infiniteScroll != null) {
                    infiniteScroll.complete();
                    _this.isLoading = true;
                }
            }, function (error) {
                _this.isLoading = false;
                console.log('error');
            });
        }
        this.isLoading = true;
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"F:\projects\doslova\src\pages\detail\detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<img  src = "{{post._embedded[\'wp:featuredmedia\'][0].media_details.sizes[\'aqueduct-large\'].source_url}}"/>\n\n\n\n<div padding>\n\n    <h1 text-center [innerHTML]= "post.title.rendered"></h1>\n\n    <ion-row>\n\n      <ion-badge color="secondary">\n\n        {{api.getCatName(post.categories[0])}}\n\n      </ion-badge>\n\n      <ion-badge color="light">\n\n        <ion-icon name= "time"></ion-icon>\n\n        {{post.date | date: "dd.MM.yyyy / HH:mm"}}\n\n      </ion-badge>\n\n      <ion-badge color="light">\n\n        <ion-icon name="person"></ion-icon>\n\n        {{post._embedded.author[0].name}}\n\n      </ion-badge>\n\n    </ion-row>\n\n    <div padding [innerHTML]= "post.content.rendered"></div>\n\n  </div>\n\n  \n\n  <div *ngIf ="this.comments">\n\n    <ion-item-divider>Comments</ion-item-divider>\n\n    <ion-list text-wrap *ngFor="let comment of comments">\n\n      <ion-avatar>\n\n        <img src="{{comment.author_avatar_urls[24]}}"/>\n\n      </ion-avatar>\n\n      <h4>{{comment.author_name}}</h4>\n\n      <h5 light>{{comment.date | date: "dd.MM.yyy / HH:mm"}}</h5>\n\n      <p [innerHtml]="comment.content.rendered"></p>\n\n    </ion-list>\n\n  </div>\n\n  <div *ngIf="isLoading&&page==1"  text-center padding>\n\n    <ion-infinite-scroll (ionInfinite)="getComments($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</div>\n\n  </ion-content>\n\n    \n\n    \n\n  \n\n   \n\n  \n\n'/*ion-inline-end:"F:\projects\doslova\src\pages\detail\detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, api, navPar) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.navPar = navPar;
        this.items = [];
        this.page = 1;
        // private showMore:boolean = false;
        this.isLoading = false;
        this.category_id = 0;
        this.sort = '0';
        if (this.navPar.get('cat_id') != null && this.navPar.get('cat_id') != undefined) {
            this.category_id = this.navPar.get('cat_id');
        }
        this.getPosts();
    }
    HomePage.prototype.getPosts = function (infiniteScroll) {
        var _this = this;
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (!(this.isLoading)) {
            this.isLoading = true;
            if (infiniteScroll != null && infiniteScroll.ionRefresh) {
                this.page = 1;
            }
            var url = 'posts?_embed&page=' + this.page;
            url += this.category_id != 0 ? '&categories=' + this.category_id : '';
            url += this.sort == '1' ? '&order=asc' : this.sort == '2' ? '&orderby=title&order=asc' : this.sort == '3' ? '&orderby=title&order=desc' : '';
            this.api.get(url)
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.items = infiniteScroll != null && infiniteScroll.ionRefresh ? data : _this.items.concat(data);
                if (data.length === 10) {
                    _this.page++;
                }
                if (infiniteScroll != null) {
                    infiniteScroll.complete();
                }
            }, function (error) {
                _this.isLoading = false;
                if (infiniteScroll != null) {
                    infiniteScroll.complete();
                }
            });
        }
    };
    HomePage.prototype.changeSort = function () {
        // console.log(this.sort);
        this.items = [];
        this.page = 1;
        // this.showMore=false;
        this.getPosts();
    };
    HomePage.prototype.openDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { post: item });
    };
    HomePage.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\projects\doslova\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Recent Posts</ion-title>\n\n    <ion-buttons end>\n\n      <button icon-only ion-button (click)= "openSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-item>\n\n    <ion-label text-right>Sort</ion-label>\n\n    <ion-select [(ngModel)]="sort" (ionChange)="changeSort()">\n\n      <ion-option value="0">New to old</ion-option>\n\n      <ion-option value="1">Old to new</ion-option>\n\n      <ion-option value="2">A to Z</ion-option>\n\n      <ion-option value="3">Z to A</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  </ion-row>\n\n  <ion-refresher (ionRefresh)="getPosts($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card *ngFor = "let item of items" (click)="openDetail(item)" >\n\n   <img  src = "{{item._embedded[\'wp:featuredmedia\'][0].source_url}}"/>\n\n  <ion-card-content>\n\n	\n\n    <ion-card-title align="center" [innerHTML]= "item.title.rendered"></ion-card-title>\n\n    <ion-row >\n\n      <ion-badge color="secondary">\n\n        {{api.getCatName(item.categories[0])}}\n\n      </ion-badge>\n\n      <ion-badge color="light">\n\n        <ion-icon name= "time"></ion-icon>\n\n        {{item.date | date: "dd.MM.yyyy / HH:mm"}}\n\n      </ion-badge>\n\n    </ion-row>\n\n		\n\n  </ion-card-content>\n\n</ion-card>\n\n<div *ngIf="isLoading && page==1"  text-center padding>\n\n  <ion-spinner></ion-spinner>\n\n</div>\n\n<ion-infinite-scroll (ionInfinite)="getPosts($event)">\n\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\projects\doslova\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.items = [];
        this.per_page = 5;
        this.page = 1;
        this.isLoading = false;
        this.searchQuery = '';
    }
    SearchPage.prototype.ionViewDidLoad = function () {
    };
    SearchPage.prototype.getPosts = function () {
        var _this = this;
        if (!(this.isLoading) && this.searchQuery.length > 0) {
            this.isLoading = true;
            this.api.get('posts?_embed&per_page=' + this.per_page + '&page=' + this.page + '&search=' + this.searchQuery)
                .subscribe(function (data) {
                _this.isLoading = false;
                _this.items = _this.items.concat(data);
                if (data.length === _this.per_page) {
                    _this.showMore = true;
                    _this.page++;
                }
                else {
                    _this.showMore = false;
                }
            }, function (error) {
                _this.isLoading = false;
                if (error.error.code === 'rest_post_invalid_page_number') {
                    _this.showMore = false;
                }
                console.log(error);
            });
        }
    };
    SearchPage.prototype.onSearch = function () {
        this.items = [];
        this.getPosts();
        // console.log(this.searchQuery);
    };
    SearchPage.prototype.clearSearch = function () {
        this.searchQuery = '';
        this.items = [];
        this.page = 1;
        this.showMore = false;
    };
    SearchPage.prototype.openDetail = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { post: item });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"F:\projects\doslova\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-input type="search" [(ngModel)]="searchQuery" (change)="onSearch()" placeholder="Search..."></ion-input>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="clearSearch()" *ngIf="searchQuery.length>3">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor = "let item of items" (click)="openDetail(item)">\n\n    <!-- <img  src = "{{item._embedded[\'wp:featuredmedia\'][0].media_details.sizes.thumbnail.source_url}}"/> -->\n\n   <ion-card-content>\n\n     <ion-card-title align="center" [innerHTML]= "item.title.rendered"></ion-card-title>\n\n     <ion-row>\n\n       <ion-badge color="secondary">\n\n         {{api.getCatName(item.categories[0])}}\n\n       </ion-badge>\n\n       <ion-badge color="light">\n\n         <ion-icon name= "time"></ion-icon>\n\n         {{item.date | date: "dd.MM.yyy / HH:mm"}}\n\n       </ion-badge>\n\n     </ion-row>\n\n   </ion-card-content>\n\n </ion-card>\n\n <div *ngIf="isLoading" text-center padding>\n\n   <ion-spinner></ion-spinner>\n\n </div>\n\n <!-- <button *ngIf="showLoadMore" ion-button full (click) = "getPosts()">Load More </button> -->\n\n</ion-content>\n\n'/*ion-inline-end:"F:\projects\doslova\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, api) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.api = api;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.api.getCategories();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (cat_id) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], { cat_id: cat_id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\projects\doslova\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="primary">\n\n      <ion-title>Category</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item (click)="openPage(0)">\n\n        All\n\n      </button>\n\n      <button menuClose ion-item *ngFor="let cat of api.Categories" (click)="openPage(cat.id)">\n\n        {{cat.name}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\projects\doslova\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.API_URL = 'http://doslova.com/wp-json/wp/v2/';
        this.Categories = [];
        this.comments = [];
        this.post = [];
    }
    ApiProvider.prototype.get = function (query) {
        if (query === void 0) { query = ''; }
        return this.http.get(this.API_URL + query);
    };
    ApiProvider.prototype.getCategories = function () {
        var _this = this;
        this.get('categories').subscribe(function (data) {
            _this.Categories = data;
        });
    };
    ApiProvider.prototype.getCatName = function (cat_id) {
        var cat_name = '';
        this.Categories.forEach(function (element) {
            if (element.id === cat_id) {
                cat_name = element.name;
            }
        });
        return cat_name;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map