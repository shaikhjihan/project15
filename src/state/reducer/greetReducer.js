
export const greetReducer = (state= {selectedgreet: "Good Morning", fruit: "Apple"}, action)=>{
    switch(action.type){
        case "SELECTED_GREET":
        return{
          ...state,
          selectedgreet: action.payload
        }
        break;
       
        case "ADDFRUIT":
        return{
            ...state,
            fruit: action.payload
        }
    }
    return state
}