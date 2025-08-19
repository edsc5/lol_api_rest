###Visualizador de Campeões - League of Legends
Autor: Erick Douglas Silva Campos

###Descrição e Objetivo do Projeto
Este projeto é uma aplicação web dinâmica desenvolvida para consultar informações sobre os campeões do jogo League of Legends. O principal objetivo foi construir uma interface interativa que consome dados de uma API pública e, ao mesmo tempo, simular um ambiente de API local para realizar operações de CRUD (Create, Read, Update, Delete) através de múltiplos métodos de requisição HTTP.

###A aplicação permite ao usuário:

##Visualizar todos os campeões do jogo.
##Pesquisar campeões específicos pelo nome.
##Consultar informações detalhadas de cada campeão, como sua história (lore) e atributos, diretamente da API Data Dragon da Riot Games.
##Visualizar builds de itens e runas (a partir de dados locais).
##Adicionar, visualizar e apagar anotações pessoais para cada campeão, funcionalidade que utiliza uma API local simulada com json-server para demonstrar o uso das ##requisições GET, POST e DELETE.

###Tecnologias Utilizadas
##Frontend: HTML5, CSS3, JavaScript (Vanilla JS), Fetch API com Async/Await para requisições assíncronas

###Ambiente de Desenvolvimento:
##Node.js, json-server para simulação de uma API REST local., live-server para servir os arquivos estáticos em um ambiente de desenvolvimento local.

###Tabela de Requisições
##A tabela abaixo detalha os tipos de requisições HTTP e os endpoints utilizados em cada página da aplicação.
##Página	    Tipo da Requisição	    Endpoint	                                            Descrição
##index.html	GET	                    .../cdn/{version}/data/pt_BR/champion.json	            Busca a lista completa de campeões da API da Riot.
##info.html	    GET	                    .../cdn/{version}/data/pt_BR/champion/{id}.json	        Busca os dados detalhados de um campeão específico na API da Riot.
##info.html	    GET	                    http://localhost:3000/notes?championId={id}	            Busca as anotações de um campeão na API local.
##info.html	    POST	                http://localhost:3000/notes	                            Adiciona uma nova anotação na API local.
##info.html	    DELETE	                http://localhost:3000/notes/{noteId}	                Apaga uma anotação específica na API local.

###Como Executar o Projeto
##Para executar este projeto em seu ambiente local, siga os passos abaixo:
##Clone o repositório:
##Bash
##git clone https://github.com/edsc5/api_rest.git
##cd api_rest
##Instale as dependências globais (caso não as tenha):
##Bash
##npm install -g json-server live-server
##Inicie a API local (json-server):
##Abra um terminal na pasta do projeto e execute:
##Bash
##json-server --watch db.json
##Deixe este terminal aberto.
##Inicie o servidor do projeto (live-server):
##Abra um segundo terminal na pasta do projeto e execute:
##Bash
##npx live-server
##O live-server abrirá automaticamente o projeto no seu navegador padrão.

###Créditos e Fontes
Riot Games Data Dragon API: Todas as informações oficiais dos campeões, como imagens, lore e atributos, foram obtidas através da API Data Dragon.