const initialState ={
    userInput: []
    
}

const reducer =(state = initialState, action) => {
    switch(action.type){
        case "SAVE_LABOR" :
        return{
            ...state,
            userInput : state.userInput.concat(action.payload)
        }
        case "SAVE_TRAVEL" :
        return {
            ...state,
            userInput : state.userInput.concat(action.payload)
        }
        case "SAVE_MATERIALS" :

        if(action.payload.titlem !== '' ){
            return {
                ...state,
                userInput : state.userInput.concat(action.payload)
            }
        }
        
        
    }

    return state
}


export default reducer