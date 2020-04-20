export class Personne {

  private static _count?: number = 0;
  private _id: number;
  private _nom: string;
  private _prenom: string;

  constructor( nom?: string, prenom?: string) {
    this._id = ++Personne._count;
    this._nom = nom;
    this._prenom = prenom;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(_nom: string) {
    this._nom = _nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(_prenom: string) {
    this._prenom = _prenom;
  }
}
