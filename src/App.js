import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, About, Error, Auth,  Cart, Products, Checkout, SingleProduct } from './pages'



function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
      <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/auth'>
          <Auth />
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />} />
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
