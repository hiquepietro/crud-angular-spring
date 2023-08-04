# Documentação CRUD Angular com Spring

**Introdução e Visão Geral do projeto** 

O projeto e uma plataforma de cursos que você consegue cadastrar os cursos e adicionar em quais categorias eles se contemplam, e depois você visualiza os cursos criados podendo também adicionar remover ou cancelar.

Desenvolvi uma plataforma de cursos utilizando as tecnologias Angular e Spring, com as valiosas contribuições das dependências Lombok, H2, Web e Spring. Através dessa plataforma, os usuários têm a capacidade de cadastrar diversos cursos e associá-los a diferentes categorias conforme a sua temática.

Ao acessar a plataforma, é possível visualizar a lista completa de cursos criados, com a opção de adicionar, remover ou cancelar um curso, conforme a necessidade. Essas ações são realizadas utilizando os métodos HTTP POST, GET, PUT e DELETE, que permitem manipular os dados de forma eficiente e segura.

Dessa forma, a plataforma proporciona uma experiência completa aos usuários, facilitando o gerenciamento e a organização dos cursos disponíveis, tornando a jornada de aprendizado mais acessível e eficaz.

**Tecnologias usadas** 

Angular 16 

Spring boot 3.1.1

D**ependências :** spring-boot-starter-data-jpa, spring-boot-starter-web, lombok, boot:spring-boot-devtools, h2database, spring-boot-starter-test, spring-boot-starter-validation.

**Instalação** 

Abra o terminal (ou prompt de comando) e execute o seguinte comando para instalar o Angular CLI globalmente:

npm install -g @angular/cli@16

Sudo apt-get install nodejs

nvm use 17

Executar o projeto Angular:

ng serve

**Spring Boot** 

Acesse o Spring Initializr em **https://start.spring.io/**.

Configure o projeto selecionando as seguintes dependências:

- Spring Web
- Spring Data JPA
- H2 Database
- Lombok
- Spring Boot DevTools
- Spring Boot Starter Validation
- Spring Boot Starter Test

Selecione a opção "Gradle Project" no campo "Project".

**Estrutura do projeto Angular**

Arquitetura MVC (model-view-controller)

As camadas principais são: Controller (camada de apresentação), Service (camada de negócio) e Repository (camada de dados).

O Controller lida com as requisições HTTP, chama os serviços apropriados e retorna as respostas aos clientes.

O Service contém a lógica de negócio, manipula os dados e interage com os repositórios para persistir os dados no banco de dados.

O Repository é responsável pelo acesso direto ao banco de dados e realiza operações.



# CrudAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

