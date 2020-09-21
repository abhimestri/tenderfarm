const initialState = {
    showSideDrawer : true
}

const reducer = (state = initialState , action) => {
    if(action.type === "SHOW_SIDEDRAWER"){
        return {
            ...state,
            showSideDrawer : action.status
        }
    }
    return state;
}

export default reducer