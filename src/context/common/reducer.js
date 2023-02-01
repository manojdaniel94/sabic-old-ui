export const commonReducer = (state, { type, payload, error }) => {
    switch (type) {
        case "ADD_BREAD_CRUMBS":
            let index = state.breadCrumbsList.findIndex(obj => obj.title == payload.title)
            let data;
            if (index == -1) {
                data = [...state.breadCrumbsList, { title: payload.title, key: payload.key }]
                // console.log("-1")
            }
            else {
                data = state.breadCrumbsList.slice(0, index + 1)
                // console.log("1")
                //console.log(data)
            }
            return {
                ...state,
                breadCrumbsList: data,
            };
        case "REMOVE_BREAD_CRUMBS":
            return {
                ...state,
                breadCrumbsList: state.breadCrumbsList.filter((user) => user.title !== payload),
            };
        default:
            return state;
        //throw new Error(`Unhandled action type: ${type}`);
    }
};