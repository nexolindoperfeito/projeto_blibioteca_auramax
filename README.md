# Projeto blibioteca Auramax// Sistema de gerenciamento de blibioteca

## Descrição 
Esse projeto baseia-se em uma API Back-End para gerencimento de uma blibioteca. O sistema permite cadastrar autores, 
livros e usuários. Além de controlar empréstimos e devoluções.

## Tecnologias Utilizadas
- Node.js
- Express.js
- MySQL
- Insomnia
- MariaDB

## Funcionalidades 
- Cadastro de autores
- Cadastro de livros
- Cadrasto de usuários
- Registro de empréstimos
- Registro de devoluções
- Consulta de livros
- Consulta de histórico de empréstimos

## Instalação
1. Clonar repositório:
git clone

2. Entre na pasta:
cd projeto-blibioteca-auramax

3. Instalar dependências:
npm i

4. Configurar arquivo '.env'

5. Executar:
npm run dev



## Banco de Dados
Entidades do sistema:
- Autor
- Livro
- Usuário
- Empréstimo

Relacionamentos:
- Um autor pode possuir vários livros.
- Um livro pertence a um autor.
- Um usuário pode realizar vários empréstimos.
- Um empréstimos pertence a um usuário e a um livro.

## Endpoints
### Autores
- GET /autores
- POST /autores
- PUT /autores/:id
- DELETE /autores/:id

### Livros
- GET /Livros
- POST /Livros
- PUT /Livros/:id
- DELETE /Livros/:id

### Usuários
- GET /Usuários
- POST /Usuários
- PUT /Usuários/:id
- DELETE /Usuários/:id

### Empréstimos
- GET /Usuários
- POST /Usuários
- PUT /emprestimos/:id
- DELETE /emprestimos/:id

## Autores
Nicolas Vieira, Emilly Florentino, Tiago Prado
