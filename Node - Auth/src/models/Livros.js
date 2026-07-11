class Livros {

    #id;
    #titulo;
    #ISBN;
    #ano;
    #qtd_disponivel;
    #id_autor

    constructor(titulo, ISBN, ano, qtd_disponivel, id_autor, id = null) {
        this.#id = id;
        this.#titulo = titulo;
        this.#ISBN = ISBN;
        this.#ano = ano;
        this.#qtd_disponivel = qtd_disponivel;
        this.#id_autor = id_autor;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get titulo() {
        return this.#titulo;
    }

    get ISBN() {
        return this.#ISBN;
    }

    get ano() {
        return this.#ano;
    }

    get qtd_disponivel() {
        return this.#qtd_disponivel;
    }

    get id_autor() {
        return this.#id_autor;
    }

    // Setters

    set titulo(novoTitulo) {
        this.#titulo = novoTitulo;
    }

    set ISBN(novoISBN) {
        this.#ISBN = novoISBN;
    }

    set ano(novoAno) {
        this.#ano = novoAno;
    }

    set qtd_disponivel(novoQtd_disponivel) {
        this.#qtd_disponivel = novoQtd_disponivel;
    }
    
    set id_autor(novoId_autor) {
        this.#id_autor = novoId_autor;
    }

}

export default Livros;

