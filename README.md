# API de Games

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

API RESTful desenvolvida com o objetivo de gerenciar uma coleção de jogos. O projeto utiliza **Node.js**, **Express** e **MongoDB Atlas** seguindo a arquitetura MVC.

---

## Funcionalidades

- **CRUD Completo:**
  - **Criar:** Cadastrar novos jogos.
  - **Ler:** Listar todos os jogos ou buscar por ID.
  - **Atualizar:** Editar informações de um jogo.
  - **Deletar:** Remover jogos do banco de dados.
- **Middlewares:**
  - **ErrorHandler:** Tratamento centralizado de erros (IDs inválidos, campos obrigatórios).
  - **Logger:** Registro automático de requisições no terminal.

---

## Como Rodar o Projeto

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina.

### 2. Instalação
Clone este repositório e instale as dependências:

```bash
# Clone o repositório
git clone https://github.com/fer-oliveiraa/API_Games.git
```

### 3. Entre na pasta
```bash
cd api-games
```

### 4. Instale as dependências
```bash
npm install
```

## Configuração (.env)
O projeto precisa de variáveis de ambiente. Crie um arquivo .env na raiz do projeto (baseado no .env.example) e adicione sua string de conexão:
```bash
MONGO_URI=sua_string_de_conexao_mongodb_aqui
PORT=3000
```

## Execução
Para rodar a API:
```bash
# Iniciar o servidor
node src/server.js
```
O servidor iniciará em: ```http://localhost:3000```

## Rotas da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/games` | Cadastra um novo game |
| **GET** | `/games` | Lista todos os games |
| **GET** | `/games/:id` | Busca um game pelo ID |
| **PUT** | `/games/:id` | Atualiza os dados de um game |
| **DELETE** | `/games/:id` | Remove um game |

## Exemplo de JSON (Para criar um jogo)
Use este corpo na requisição POST:
```bash
{
  "titulo": "The Legend of Zelda: Ocarina of Time",
  "genero": "Aventura",
  "plataforma": "Nintendo 64",
  "lancamento": 1998
}
```
> Desenvolvido por Fernanda como parte da disciplina de Programação para Internet II.
