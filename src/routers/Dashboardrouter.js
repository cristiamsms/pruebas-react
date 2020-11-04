import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/Ui/Navbar'

export const Dashboardrouter = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-4 ml-4">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} /> 
                    <Route exact path="/hero/:heroeId" component={HeroesScreen} /> 
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/Search" component={SearchScreen} />  
                    <Redirect to="/marvel"/> 
                </Switch>
            </div>
        </>
    )
}
