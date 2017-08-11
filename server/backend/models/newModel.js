var Singleton;
(function (Singleton) {
    var New = (function () {
        function New() {
            this._name = 'gg';
        }
        Object.defineProperty(New.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (val) {
                this._name = val;
            },
            enumerable: true,
            configurable: true
        });
        return New;
    })();
    Singleton.New = New;
})(Singleton = exports.Singleton || (exports.Singleton = {}));
//# sourceMappingURL=newModel.js.map