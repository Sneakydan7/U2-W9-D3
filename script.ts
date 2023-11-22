abstract class LavoratoriAutonomi {
  codRedd: number;
  redditoAnnuoLordo: number;
  tasseInps: number;
  tasseIrpef: number;
  constructor(
    _codRedd: number,
    _redditoAnnuoLordo: number,
    _tasseInps: number,
    _tasseIrpef: number
  ) {
    this.codRedd = _codRedd;
    this.redditoAnnuoLordo = _redditoAnnuoLordo;
    this.tasseInps = _tasseInps;
    this.tasseIrpef = _tasseIrpef;
  }

  abstract getUtileTasse(tasse: number): number;
  abstract getTasseInps(tasse: number): number;
  abstract getTasseIrpef(tasse: number): number;
  abstract getRedditoAnnuoNetto(tasse: number): number;
}

class Meccanico extends LavoratoriAutonomi {
  name: string;
  lastName: string;
  officina: string;

  constructor(
    _codRedd: number,
    _redditoAnnuoLordo: number,
    _tasseInps: number,
    _tasseIrpef: number,
    _name: string,
    _lastName: string,
    _officina: string
  ) {
    super(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef);
    this.name = _name;
    this.lastName = _lastName;
    this.officina = _officina;
  }

  getTasseInps(): number {
    return this.redditoAnnuoLordo * this.tasseInps;
  }

  getTasseIrpef(): number {
    return this.redditoAnnuoLordo * this.tasseIrpef;
  }

  getUtileTasse(tasse: number): number {
    let resultTassato = this.getTasseInps() + this.getTasseIrpef();
    return resultTassato;
  }

  getRedditoAnnuoNetto(): number {
    let redditoNetto =
      this.redditoAnnuoLordo - this.getUtileTasse(this.redditoAnnuoLordo);
    return redditoNetto;
  }
}

let alessioMeccanico = new Meccanico(
  10,
  150000,
  0.05,
  0.1,
  "Alessio",
  "Macaco",
  "Officina Alessio"
);

console.log(alessioMeccanico.getRedditoAnnuoNetto());
