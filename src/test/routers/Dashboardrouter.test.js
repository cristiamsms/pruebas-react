const { shallow } = require("enzyme")
const { Dashboardrouter } = require("../../routers/Dashboardrouter")
import React from 'react';
describe('pruebas en el dashboard', () => {
    test('prueba 1', () => {
        const wrapper =shallow(<Dashboardrouter/>)
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
