import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from "./constants";

console.log("Reducer.js called");

const initialStateSearch = {
    searchField : ''
}

console.log("Reducer.js called after initialsearch")
export const searchRobots = ( state = initialStateSearch, action = {} )=>{
    console.log("Search robots in reducer.js");
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            console.log("Changed the search field");
            return Object.assign({},state,{searchField:action.payload})
        
        default:
            console.log("Default state returned of search robots")
            return state;
    }
}
console.log("Reducer.js called after search robots");

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}
console.log("Reducer.js called initialStateRobots");

export const requestRobots = (state=initialStateRobots, action={}) => {
    console.log("Request robots in reducers.js");
    switch(action.type)
    {
        case REQUEST_ROBOTS_PENDING:
            console.log("Request Robots pending");
            return Object.assign({}, state, {isPending : true })
        case REQUEST_ROBOTS_SUCCESS:
            console.log("Request robots success");
            return Object.assign({}, state, { robots:action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            console.log("Request robots failed");
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            console.log("Default State returned of request robots")
            return state;
    }
}


console.log("Reducer.js executed full");
