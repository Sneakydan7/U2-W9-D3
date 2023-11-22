var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoriAutonomi = /** @class */ (function () {
    function LavoratoriAutonomi(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    return LavoratoriAutonomi;
}());
var Meccanico = /** @class */ (function (_super) {
    __extends(Meccanico, _super);
    function Meccanico(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef, _name, _lastName, _officina) {
        var _this = _super.call(this, _codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) || this;
        _this.name = _name;
        _this.lastName = _lastName;
        _this.officina = _officina;
        return _this;
    }
    Meccanico.prototype.getTasseInps = function () {
        return this.redditoAnnuoLordo * this.tasseInps;
    };
    Meccanico.prototype.getTasseIrpef = function () {
        return this.redditoAnnuoLordo * this.tasseIrpef;
    };
    Meccanico.prototype.getUtileTasse = function (tasse) {
        var resultTassato = this.getTasseInps() + this.getTasseIrpef();
        return resultTassato;
    };
    Meccanico.prototype.getRedditoAnnuoNetto = function () {
        var redditoNetto = this.redditoAnnuoLordo - this.getUtileTasse(this.redditoAnnuoLordo);
        return redditoNetto;
    };
    return Meccanico;
}(LavoratoriAutonomi));
var alessioMeccanico = new Meccanico(10, 150000, 0.05, 0.1, "Alessio", "Macaco", "Officina Alessio");
console.log(alessioMeccanico.getRedditoAnnuoNetto());
