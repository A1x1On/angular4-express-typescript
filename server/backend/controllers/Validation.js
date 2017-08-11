var UserNamespace;
(function (UserNamespace) {
    var User = (function () {
        function User(id, name) {
            this._id = id;
            this._name = name;
        }
        User.prototype.displayInfo = function () {
            console.log("id: " + this._id + "; name: " + this._name);
        };
        return User;
    })();
    UserNamespace.User = User;
    var defaultUser = new User(2, "Tom");
})(UserNamespace || (UserNamespace = {}));
//# sourceMappingURL=Validation.js.map