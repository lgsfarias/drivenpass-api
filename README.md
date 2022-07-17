# <p align = "center"> DrivenPass API </p>

<p align="center">
   <img src="./info/README.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-lgsfarias-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/lgsfarias/drivenpass-api?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição

Neste projeto, foi desenvolvido o DrivenPass, um gerenciador de senhas! Com ele é possível armazenar senhas, notas seguras, cartões e muito mais. Os usuários podem acessar-las, de forma segura, pois o sistema utiliza um algoritmo de criptografia para armazenar as senhas.

---

## :computer: Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- Postgres and Prisma

---

## :rocket: Rotas

```yml
POST /auth/signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum"
}
```

```yml
POST /auth/signin
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```

```yml
POST /credential
    - Rota para cadastrar uma nova credencial
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
    "label" : "Lorem ipsum",
    "url": "https://www.loremipsum.com",
    "username": "lorem",
    "password": "loremipsum"
    }
```

```yml
GET /credential
    - Rota para listar todas as credenciais
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
GET /credential/:id
    - Rota para listar uma credencial
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
DELETE /credential/:id
    - Rota para deletar uma credencial
    - headers: {
        "Authorization": "Bearer <token>"
    }
```

```yml
POST /note
    - Rota para cadastrar uma nova nota
    - headers: {
        "Authorization": "Bearer <token>"
    }
    - body: {
    "label" : "Lorem ipsum",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna massa, mollis id facilisis ut, tristique convallis dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas a egestas sapien, lacinia iaculis nisi. Nam molestie fringilla egestas. Vestibulum pulvinar consequat arcu a varius. Vestibulum nec finibus enim. In at lobortis elit. Mauris imperdiet neque quis imperdiet ornare. Maecenas non nulla orci. Vestibulum tempor vitae tortor eget lobortis. Integer sapien eros, condimentum sit amet est at, vulputate efficitur elit. Praesent in velit pharetra, commodo libero a, egestas leo. Sed nunc enim, sodales vel pretium at, sodales a magna. Mauris nec nibh at enim venenatis faucibus. Duis bibendum commodo mattis. Phasellus luctus felis varius porta lacinia.
    }
```

```yml
GET /note
  - Rota para listar todas as notas
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
GET /note/:id
  - Rota para listar uma nota
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
DELETE /note/:id
  - Rota para deletar uma nota
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
POST /card
  - Rota para cadastrar um novo cartão
  - headers: {
      "Authorization": "Bearer <token>"
  }
  - body: {
  "label" : "Lorem ipsum",
  "number": "123456789",
  "name": "Lorem ipsum",
  "securityCode": "123",
  "expiryDate": "12/20",
  "password": "loremipsum",
  "isVirtual": true,
  "type": "credit" | "debit" | "both"
  }
```

```yml
GET /card
  - Rota para listar todos os cartões
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
GET /card/:id
  - Rota para listar um cartão
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
DELETE /card/:id
  - Rota para deletar um cartão
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
POST /wifi
  - Rota para cadastrar um novo wifi
  - headers: {
      "Authorization": "Bearer <token>"
  }
  - body: {
  "label" : "Lorem ipsum",
  "ssid": "Lorem ipsum",
  "password": "loremipsum",
  }
```

```yml
GET /wifi
  - Rota para listar todos os wifis
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
GET /wifi/:id
  - Rota para listar um wifi
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
DELETE /wifi/:id
  - Rota para deletar um wifi
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
POST /document
  - Rota para cadastrar um novo documento
  - headers: {
      "Authorization": "Bearer <token>"
  }
  - body: {
  "type": "RG" | "CNH",
  "number": "123456789",
  "name": "Lorem ipsum",
  "expirationDate": "12/20",
  "issueDate": "12/20",
  "issuer": "Lorem ipsum"
  }
```

```yml
GET /document
  - Rota para listar todos os documentos
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
GET /document/:id
  - Rota para listar um documento
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

```yml
DELETE /document/:id
  - Rota para deletar um documento
  - headers: {
      "Authorization": "Bearer <token>"
  }
```

---

## 🏁 Rodando a aplicação

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/lgsfarias/drivenpass-api
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor

```
npm run dev
```
