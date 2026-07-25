class User {

    #id;
    #name;
    #email;
    #telefone;

    constructor(name, email, telefone, id = null) {
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#telefone = telefone;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get telefone() {
        return this.#telefone;
    }

    // Setters
    set name(newName) {
        this.#name = newName;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }

    set telefone(newTelefone) {
        this.#telefone = newTelefone;
    }

}

export default User;

