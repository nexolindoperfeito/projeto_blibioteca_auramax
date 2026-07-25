class Autor {

    #id;
    nome;
    #nacionalidade;
    #dataNascimento;

    constructor(nome, nacionalidade, dataNascimento, id = null) {
        this.#id = id;
        this.nome = nome;
        this.#nacionalidade = nacionalidade;
        this.#dataNascimento = dataNascimento;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get nome() {
        return this.nome;
    }

    get nacionalidade() {
        return this.#nacionalidade;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    // Setters
    set nome(newName) {
        this.nome = newName;
    }

    set nacionalidade(newNationality) {
        this.#nacionalidade = newNationality;
    }

    set dataNascimento(newBirthdate) {
        this.#dataNascimento = newBirthdate;
    }

}

export default Autor;

