import React from 'react'
import Header from './Header'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* <Route exact path='/' component={TicketList} />
        <Route exact path='/newticket' component={NewTicketForm} /> */}
      </Switch>
    </div>
  )
}

export default App
