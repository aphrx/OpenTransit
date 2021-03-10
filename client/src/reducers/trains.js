export default (trains = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return trains;
        default:
            return trains;
    }
}