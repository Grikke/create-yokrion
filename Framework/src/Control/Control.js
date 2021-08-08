class Control {
    htmlspecialchars = require("htmlspecialchars");
    System = require('yokrion').System
    Log = require('yokrion').Log
    constructor(req, res, method) {
        this.req = req;
        this.res = res;
        if (method !== "get")
            this.clearRequest();
    }
    clearRequest() {
        if (this.req.body) {
            this.req.body.forEach((key, value) => {
                if (typeof value === "string")
                    this.req.body[key] = this.htmlspecialchars(value.trim());
            });
        }
        else if (this.req.query) {
            this.req.query.forEach((key, value) => {
                if (typeof value === "string")
                    this.req.query[key] = this.htmlspecialchars(value.trim());
            })
        }
    }
}

module.exports = Control;