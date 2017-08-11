export namespace Singleton {
    export class New {

        private _name: string = 'gg';
        get name(): string { // при выводе видоизменеят
            return this._name
        }

        set name(val: string) { // при записи видоизменяет видоизменеят
            this._name = val;
        }

    }

}