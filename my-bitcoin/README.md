# Projeto My Bitcoin
- Router e BrowserRouter são componentes dentro do compormente React-Router-Dom que serve para rotas dentro do React
- Todos os componentes que vão ser "tocados" pela rota precisam estar dentro do componente BrowserRouter, ele deve estar no "index"
- Quando usar o componente Route, para carregar a rota, pode-se usar o exact para só carregar quando a rota por exatament igual
- Para indicar o link para abrir as rotas, pode-se usar o Link ou NavLink, a diferença é que o NavLink adiciona a class css quando Active
- Quando as rotas estão dentro do componente Switch, a primeira rota que "dá match" é carregada

# REDUX
Para instalar
npm install --save redux react-redux redux-logger redux-thunk

redux = pacote do redux
react-redux = pacote para usar o Redux no React
redux-logger = pacote para log de actions do Redux (auxiliar)
redux-thunk = possibilita actions asyn (auxiliar)

Instalar os Types do TS
npm install --save @types/react-redux
npm install --save @types/redux-logger

## Recursos do REDUX
- STORE: onde estão os dados, é reativa
- ACTIONS: são as mensagens enviadas para a mudança
- REDUCERS: são os listeners, para mudança de state

## Recursos do REACT-REDUX
- CONNECT: liga o componente React com um Redux
- PROVIDER: liga um STORE com um App React