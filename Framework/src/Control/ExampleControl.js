let Control = require('./Control')

class ExampleControl extends Control {
    //Example = require("../Database/Tables/Example")
    getDocument = () => {
        this.res.render('document')
    }
}

module.exports = ExampleControl;