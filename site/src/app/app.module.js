"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
require("rxjs/Rx"); // get everything from Rx
var app_component_1 = require("./app.component");
var packageDataService_1 = require("./common/packageDataService");
var extensionMethodSample_component_1 = require("./common/extensionMethodSample.component");
var printclassinstance_component_1 = require("./printclassinstance/printclassinstance.component");
var extensionMethod_component_1 = require("./printclassinstance/extensionMethod.component");
var simplesalesforceconnect_component_1 = require("./simplesalesforceconnect/simplesalesforceconnect.component");
var simpleblackboardconnect_component_1 = require("./simpleblackboardconnect/simpleblackboardconnect.component");
var apiauthenticate_component_1 = require("./apiauthenticate/apiauthenticate.component");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routes_1.Routing],
        declarations: [app_component_1.AppComponent,
            printclassinstance_component_1.PrintClassInstanceComponent,
            extensionMethod_component_1.ExtensionMethodComponent,
            extensionMethodSample_component_1.ExtensionMethodSampleComponent,
            simplesalesforceconnect_component_1.SimpleSalesforceConnectComponent,
            simpleblackboardconnect_component_1.SimpleBlackboardConnectComponent,
            apiauthenticate_component_1.ApiAuthenticateComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [packageDataService_1.PackageDataService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map