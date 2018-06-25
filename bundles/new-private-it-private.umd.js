(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@new-private/it-private', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['new-private'] = global['new-private'] || {}, global['new-private']['it-private'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MainComponent = (function () {
        function MainComponent() {
        }
        /**
         * @return {?}
         */
        MainComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MainComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'new-private-main',
                        template: "<p>\n  main works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        MainComponent.ctorParameters = function () { return []; };
        return MainComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ItPrivateModule = (function () {
        function ItPrivateModule() {
        }
        ItPrivateModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [MainComponent],
                        exports: [MainComponent]
                    },] },
        ];
        return ItPrivateModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.ItPrivateModule = ItPrivateModule;
    exports.MainComponent = MainComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXByaXZhdGUtaXQtcHJpdmF0ZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BuZXctcHJpdmF0ZS9pdC1wcml2YXRlL2xpYi9tYWluL21haW4uY29tcG9uZW50LnRzIiwibmc6Ly9AbmV3LXByaXZhdGUvaXQtcHJpdmF0ZS9saWIvaXQtcHJpdmF0ZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmV3LXByaXZhdGUtbWFpbicsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIG1haW4gd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW01haW5Db21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtNYWluQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJdFByaXZhdGVNb2R1bGUge1xufVxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFZRTtTQUFpQjs7OztRQUVqQixnQ0FBUTs7O1lBQVI7YUFDQzs7b0JBYkZBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUsNEJBR1g7d0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO3FCQUNiOzs7OzRCQVREOzs7Ozs7O0FDQUE7Ozs7b0JBSUNDLGFBQVEsU0FBQzt3QkFDTixPQUFPLEVBQUUsQ0FBQ0MsbUJBQVksQ0FBQzt3QkFDdkIsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO3dCQUM3QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7cUJBQzNCOzs4QkFSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9