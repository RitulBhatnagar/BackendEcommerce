"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const payment_module_1 = require("../payment/payment.module");
const orders_controller_1 = require("./orders.controller");
const orders_service_1 = require("./orders.service");
let OrdersModule = class OrdersModule {
};
OrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, payment_module_1.PaymentModule],
        controllers: [
            orders_controller_1.OrdersController,
            orders_controller_1.OrderStatusController,
            orders_controller_1.OrderFilesController,
            orders_controller_1.OrderExportController,
            orders_controller_1.DownloadInvoiceController,
        ],
        providers: [orders_service_1.OrdersService],
        exports: [orders_service_1.OrdersService],
    })
], OrdersModule);
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map