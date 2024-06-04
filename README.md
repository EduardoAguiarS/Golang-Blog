![](https://draft.dev/learn/assets/posts/golang.png)

<center><h1>Blog Pessoal Acadêmico</h1></center>

### Descrição

Este projeto consiste na criação de um blog pessoal com foco na publicação de conteúdos acadêmicos. O blog não possui um objetivo específico definido no momento, mas será utilizado para compartilhar pesquisas, artigos, reflexões e outros materiais relacionados à área acadêmica.

### Tecnologias Utilizadas

**Backend:**

- **Go:** Linguagem de programação utilizada para o desenvolvimento do backend do blog.
- **Fiber:** Framework web leve e performante para Go.
- **GORM:** Biblioteca ORM para Go que facilita o mapeamento entre objetos e bancos de dados.
- **MySQL:** Banco de dados relacional utilizado para armazenar os dados do blog.

**Frontend:**

- **JavaScript:** Linguagem de programação utilizada para o desenvolvimento do frontend do blog.
- **React:** Biblioteca JavaScript para criar interfaces de usuário.
- **Tailwind CSS:** Framework CSS que facilita a criação de interfaces responsivas e personalizadas.

### Links Úteis

- **Go:** [https://go.dev/](https://go.dev/)
- **Fiber:** [https://docs.gofiber.io/](https://docs.gofiber.io/)
- **GORM:** [https://gorm.io/](https://gorm.io/)
- **MySQL:** [https://www.mysql.com/](https://www.mysql.com/)
- **JavaScript:** [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **React:** [https://pt-br.legacy.reactjs.org/](https://pt-br.legacy.reactjs.org/)
- **Tailwind CSS:** [https://tailwindcss.com/](https://tailwindcss.com/)

### Como rodar o projeto

#### Backend

- Instalando o Golang na maquina
- Instalar o MySQL e Configurar o MySQL
- Clonar o projeto: `git clone git@github.com:EduardoAguiarS/Golang-Blog.git`
- Acessar o projeto: `cd Golang-Blog`
- Criar um arquivo de configuração: `.env` e configurar as variáveis de ambiente conforme o arquivo .env.example
- Acessar a pasta server: `cd server` e instalar as dependências: `go get`
- Rodar o projeto: `go run server.go`

#### Frontend

- Instalar o NodeJS na versão LTS
- Acessar o projeto: `cd client`
- Instalar as dependências: `npm install`
- Rodar o projeto: `npm start`

#### Dicas para testar as rotas no VSCode

- Nas extensões do VSCode busque por ```humao.rest-client```
- Na raiz do projeto busque pela pasta rest e acesso o arquivo `routes example.http`
- Agora com o backend rodando basta clicar nas opções de send request.

## Observações

- Este projeto ainda está em desenvolvimento e pode sofrer alterações no futuro.
- O blog não possui um objetivo específico definido no momento, mas será utilizado para compartilhar pesquisas, artigos, reflexões e outros materiais relacionados à área acadêmica.
- As tecnologias utilizadas podem ser alteradas conforme as necessidades do projeto.
