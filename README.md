Um simples, mais muito simples mesmo, Single Page Application, para quem quer aprender com Baby Steps.

## Como Funciona?

Para tornar este simple SPA possivel, foi utilizado o grandioso [NodeJs](http://nodejs.org/) junto com [AngularJs](https://angularjs.org/)

## Primeiros Passos

1. Instale o poderoso Nodejs

2. Instale o Npm

3. Instale o Git

4. Clone o projeto com o comando

  ```sh
  $ git clone https://github.com/weslley39/Angular-SPA.git
  ```

5. Entre na pasta do projeto
6. Instale os pacotes necessários para a execução do projeto
  ```sh
  $ npm install
  ```
7. Rode o Node e deixe ele fazer tudo por você
  ```sh
  $ npm start
  ```
E finalmente você terá acesso ao website aceessando `localhost:8000` :D

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Estrutura
Abaixo esta descrita a estrutura básica do projeto
```
.
├── public/
│   ├── app/
│   ├── controllers/
│   └── js/
├── views/
│   └── *
│   _server.js

```

### public
Todos os arquivo externos relacionados ao site
### public/app
Configuração basica do app, ou seja, configuração do AngularJs

### public/controllers
Controllers utilizados na view
###public/js
Todos os arquivos javascripts utilizados no projeto, como o Angularjs.js
### views
Todas as views .html


## Licença

[MIT License](http://mit-license.org/) © Weslley Neri
