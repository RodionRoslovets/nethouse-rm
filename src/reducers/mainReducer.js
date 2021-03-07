export function reducer(state, action){
    switch (action.type){
        case "INIT":
            return action.payload
        case "LOADMORE" :
            return {
                info:{...action.payload.info},
                results:[...state.results, ...action.payload.results]
            }
        default:
            return state
    }
}