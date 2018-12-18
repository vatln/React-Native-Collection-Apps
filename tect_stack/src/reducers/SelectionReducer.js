export default (state = null, action) => {
    // console.log(action);
    //reducer tidak bisa return kosong, harus return sesuatu
    // return null;

    switch (action.type) {
        case 'select_library':
            return action.payload;
        default: 
            return state;
    }
};
