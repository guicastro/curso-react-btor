import { createStore, Action, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'; /*COMPONENTE DE LOGGER*/

interface State {
    counter: number;
}


function reducer(state: State = { counter:0 }, action: Action) : State {

    if(action.type == 'COUNTER_ADD') {
        return { counter: state.counter + 1 }; /*NESTE EXEMPLO CRIA-SE UM NOVO STATE E NÃO ALTERA O EXISTENTE*/
    }

    if(action.type == 'COUNTER_SUBTRACT'){
        return { counter: state.counter - 1};
    }

    return state;
}


const store = createStore(reducer, applyMiddleware(createLogger()));

/*applyMiddleware = FUNÇÃO PARA FAZER O DEBUG USANDO O LOGGER, É O SEGUNDO PARÂMETRO DO createStore*/

export default store;