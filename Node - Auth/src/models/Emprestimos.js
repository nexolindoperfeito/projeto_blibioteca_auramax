class Emprestimos {
    #id_livro;
    #data_devo;
    #data_emp;
    #id_user;

    constructor (id_user = null, data_emp, data_devo, id_livro = null) {
        this.#id_livro = id_livro;
        this.#data_devo = data_devo;
        this.#data_emp = data_emp;
        this.#id_user = id_user; 
    }

    get id_user() {
        return this.#id_user;
    }

    get data_emp() {
        return this.#data_emp;
    }

    get data_devo() {
        return this.#data_devo;
    }

    get id_livro() {
        return this.#id_livro;
    }

    set id_user(newIdUser) {
        this.#id_user = newIdUser;
    }

    set data_emp(newDataEmp) {
        this.#data_emp = newDataEmp;
    }

    set data_devo(newDataDevo) {
        this.#data_devo = newDataDevo;
    }

    set id_livro(newIdLivro){
        this.#id_livro = newIdLivro;
    }

}

export default Emprestimos;