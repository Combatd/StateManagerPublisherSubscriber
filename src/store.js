class Store {
    constructor(rootReducer) {
        this.rootReducer = rootReducer;
        this.globalState = {

        };
    }
    /*
    #getState
    returns a shallow copy of the global state.
    May be refactored later to not contain pointers to the same attribute
    values of the global state.
    */
    getState = function() {
        return Object.assign(this.globalState);
    }
}