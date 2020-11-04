const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../type/types");

describe('pruebas en authReducer', () => {

    test('prueba 1', () => {
        const state= authReducer({logged: false},{});
        expect(state).toEqual({logged:false});
    })
    test('prueba 2', () => {
        const action={
            type: types.login,
            payload:{name:'cristian'}
        };
        const state= authReducer({logged: false},action);
        expect(state).toEqual({logged:true,name:'cristian'});
        
    })
    test('prueba 3', () => {
        const action={
            type: types.logout
        };
        const state= authReducer({logged: true},action);
        expect(state).toEqual({logged:false});
    })
    
    
    
    
})
