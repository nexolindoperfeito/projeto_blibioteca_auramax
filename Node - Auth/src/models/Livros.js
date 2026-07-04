class Autor {

    #id;
    titulo;
    #id_ISBN;
    dataAno;
    qtd_Disp;
    #id_Autor;

    constructor(titulo, id_ISBN, dataAno, qtd_Disp, id_Autor,  id = null) {
        this.#id = id;
        this.titulo = titulo;
        this.#id_ISBN = id_ISBN;
        this.dataAno = dataAno;
        this.qtd_Disp = qtd_Disp;
        this.#id_Autor = id_Autor;
    }

    // Getters
    get id() {
        return this.#id;
    }

    get titulo() {
        return this.titulo;
    }

    get id_ISBN() {
        return this.#id_ISBN;
    }

    get dataAno() {
        return this.dataAno;
    }
    
    get qtd_Disp() {
        return this.qtd_Disp;
    }

    get id_Autor() {
        return this.#id_Autor;
    }

    // Setters
    set titulo(newTitle) {
        this.titulo = newTitle;
    }

    set id_ISBN(newISBN) {
        this.#id_ISBN = newISBN;
    }

    set dataAno(newYear) {
        this.dataAno = newYear;
    }
    
    set qtd_Disp(newAvailability) {
        this.qtd_Disp = newAvailability;
    }

    set id_Autor(newAuthor) {
        this.#id_Autor = newAuthor;
    }

}

export default Livros;

