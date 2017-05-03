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
    var WeatherComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shared_service_1_1) {
                shared_service_1 = shared_service_1_1;
            }],
        execute: function() {
            WeatherComponent = (function () {
                function WeatherComponent(_sharedService) {
                    this._sharedService = _sharedService;
                    this.id_city = "";
                    this.id_state = "";
                    this.op_city = "";
                    this.op_region = "";
                    this.op_country = "";
                    this.op_date = "";
                    this.op_text = "";
                    this.op_temp = "";
                }
                WeatherComponent.prototype.ngOnInit = function () {
                };
                WeatherComponent.prototype.callWeatherService = function () {
                    var _this = this;
                    this._sharedService.findWeather(this.id_city, this.id_state)
                        .subscribe(function (lstresult) {
                        _this.op_city = lstresult["query"]["results"]["channel"]["location"]["city"];
                        _this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
                        _this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
                        _this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
                        _this.op_text = lstresult["query"]["results"]["channel"]["item"]["condition"]["text"];
                        _this.op_temp = lstresult["query"]["results"]["channel"]["item"]["condition"]["temp"];
                    }, function (error) {
                        console.log("Error. The findWeather result JSON value is as follows:");
                        console.log(error);
                    });
                };
                WeatherComponent = __decorate([
                    core_1.Component({
                        selector: 'app-weather',
                        templateUrl: '/app/weather/weather.component.html',
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [shared_service_1.SharedService])
                ], WeatherComponent);
                return WeatherComponent;
            }());
            exports_1("WeatherComponent", WeatherComponent);
        }
    }
});
//# sourceMappingURL=weather.component.js.map