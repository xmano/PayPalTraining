System.register(['@angular/core', "./../shared.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shared_service_1;
    var MovieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_service_1_1) {
                shared_service_1 = shared_service_1_1;
            }],
        execute: function() {
            MovieComponent = (function () {
                function MovieComponent(_sharedService) {
                    this._sharedService = _sharedService;
                    this.id_movie = "";
                    this.mv_Title = "";
                    this.mv_Rated = "";
                    this.mv_Released = "";
                    this.mv_Director = "";
                    this.mv_Actors = "";
                    this.mv_Plot = "";
                    this.mv_Poster = "";
                }
                MovieComponent.prototype.ngOnInit = function () {
                };
                MovieComponent.prototype.callMovieService = function () {
                    var _this = this;
                    this._sharedService.findMovie(this.id_movie)
                        .subscribe(function (lstresult) {
                        _this.mv_Title = lstresult["Title"];
                        _this.mv_Rated = lstresult["Rated"];
                        _this.mv_Released = lstresult["Released"];
                        _this.mv_Director = lstresult["Director"];
                        _this.mv_Actors = lstresult["Actors"];
                        _this.mv_Plot = lstresult["Plot"];
                        _this.mv_Poster = lstresult["Poster"];
                    }, function (error) {
                        console.log("Error. The findMovie result JSON value is as follows:");
                        console.log(error);
                    });
                };
                MovieComponent = __decorate([
                    core_1.Component({
                        selector: 'movie',
                        templateUrl: '/app/movie/movie.component.html',
                    }), 
                    __metadata('design:paramtypes', [shared_service_1.SharedService])
                ], MovieComponent);
                return MovieComponent;
            }());
            exports_1("MovieComponent", MovieComponent);
        }
    }
});
//# sourceMappingURL=movie.component.js.map