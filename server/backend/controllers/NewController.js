/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var NewRepository = require("../repositories/NewRepository");
var NewController = (function () {
    function NewController() {
        this._newRepository = new NewRepository();
        //this._newRepository.findById(5);
    }
    NewController.prototype.retrieve = function (req, res) {
        try {
            // var _newRepository: INew;
            // _newRepository = new NewRepository();
            console.log('-------------------------------');
            this._newRepository.findById(2, function (error, user) {
                console.log('-----------findByIdfindByIdfindByIdfindById--------------------');
                res.send({ "error": "error in your request" });
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    return NewController;
})();
Object.seal(NewController);
module.exports = NewController;
//# sourceMappingURL=NewController.js.map