const { mount } = require("enzyme")
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';
describe('pruebas en el app router', () => {
    
    const value ={
        dispatch: jest.fn(),
        user:{logged:false}
    }
    
    test('prueba 1', () => {

       const wrapper=mount(
           <AuthContext.Provider value={value}>
  
            <AppRouter/>

           </AuthContext.Provider>
         
       )
        expect(wrapper).toMatchSnapshot();
    });
    test('prueba 2', () => {
        const value ={
            dispatch: jest.fn(),
            user:{logged:true,
            name:'cristian'}
        }
        

        const wrapper=mount(
           <AuthContext.Provider value={value}>
  
            <AppRouter/>

           </AuthContext.Provider>
         
       )
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })
    
    
})
