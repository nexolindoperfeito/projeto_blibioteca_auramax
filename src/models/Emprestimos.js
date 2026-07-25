class Emprestimos {
    #id;
    #dt_emprestimo;
    #dt_devolucao;
    #id_livro;
    #id_usuario;

    constructor (dt_emprestimo, dt_devolucao, id_livro, id_usuario, id = null) {
        this.#id = id;
        this.#dt_emprestimo = dt_emprestimo;
        this.#dt_devolucao = dt_devolucao;
        this.#id_livro = id_livro;
        this.#id_usuario = id_usuario; 
    }

     get id() {
        return this.#id;
    }

    get dt_emprestimo() {
        return this.#dt_emprestimo;
    }

    get dt_devolucao() {
        return this.#dt_devolucao;
    }

    get id_livro() {
        return this.#id_livro;
    }

    get id_usuario() {
        return this.#id_usuario;
    }


    set dt_emprestimo(newDataEmp) {
        this.#dt_emprestimo = newDataEmp;
    }

    set dt_devolucao(newDataDevo) {
        this.#dt_devolucao = newDataDevo;
    }

    set id_livro(newIdLivro){
        this.#id_livro = newIdLivro;
    }
    
    set id_usuario(newIdUser) {
        this.#id_usuario = newIdUser;
    }
}

export default Emprestimos;