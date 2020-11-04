const { mount } = require("enzyme")
const { PrivateRouter } = require("../../routers/PrivateRouter")
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
describe('pruebas en private route', () => {
    const args={
        location:{pathname:'/marvel'}
    }
    Storage.prototype.setItem=jest.fn();
    test('prueba 1', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                 <PrivateRouter
                    isAuthenticated={true}
                    component={()=><span>List</span>}
                    {...args}/>

            </MemoryRouter>
           
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');

    });
    test('tarea 1', () => {
        const wrapper = mount(
            <MemoryRouter>
                 <PrivateRouter
                    isAuthenticated={false}
                    component={()=><span>List</span>}
                    {...args}/>

            </MemoryRouter>
           
        );

        expect(wrapper.find('span').exists()).toBe(false);
    })
    
    
})
