namespace UserNamespace {

    export interface IUser {

        displayInfo();
    }

    export class User implements IUser {

        private _id: number;
        private _name: string;
        constructor(id: number, name: string) {

            this._id = id;
            this._name = name;
        }
        displayInfo() {

            console.log("id: " + this._id + "; name: " + this._name);
        }
    }

    let defaultUser: IUser = new User(2, "Tom");
}