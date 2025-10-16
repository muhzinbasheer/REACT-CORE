import React from 'react'
import Counter from './Redux/counter'
import Greetings from './features/Greeting'
import SayGreet from './features/sayGreet'
import InputFocus from './Hooks/UseRef'
import Timer from './Hooks/UseRef'
import UseMemoApp from './Hooks/UseMemo'
import UseEffect from './Hooks/UseEffect'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Parent from './communication/Parent'
import Resize from './components/Resize'

const App = () => {
  return (
    <>
    {/* <Counter/> */}
    {/* <UseEffect /> */}
    {/* <Greetings/> */}
    {/* <SayGreet /> */}
    {/* <Counter /> */}
    {/* <InputFocus/> */}
    {/* <UseMemoApp /> */}
    {/* <Counter /> */}
    {/* <ProductList />
    <hr />
    <Cart />   */}
    {/* <Parent /> */}
    <Resize />
    </>
  )
}

export default App

//useMemo
//useCallback