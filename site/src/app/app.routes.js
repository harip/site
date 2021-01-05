"use strict";
var router_1 = require("@angular/router");
var printclassinstance_component_1 = require("./printclassinstance/printclassinstance.component");
var simplesalesforceconnect_component_1 = require("./simplesalesforceconnect/simplesalesforceconnect.component");
var simpleblackboardconnect_component_1 = require("./simpleblackboardconnect/simpleblackboardconnect.component");
var apiauthenticate_component_1 = require("./apiauthenticate/apiauthenticate.component");
exports.routes = [
    { path: 'printclassinstance', component: printclassinstance_component_1.PrintClassInstanceComponent },
    { path: 'simplesalesforceconnect', component: simplesalesforceconnect_component_1.SimpleSalesforceConnectComponent },
    { path: 'simpleblackboardconnect', component: simpleblackboardconnect_component_1.SimpleBlackboardConnectComponent },
    { path: 'apiauthenticate', component: apiauthenticate_component_1.ApiAuthenticateComponent }
];
exports.Routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map