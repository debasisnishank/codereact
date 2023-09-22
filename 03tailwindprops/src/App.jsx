import Card from './components/Card'


import './App.css'

function App() {


  return (
    <>
      <h1 className="bg-sky-400 rounded-xl text-yellow-200 mb-4">Tailwind Test</h1>
      <Card hername="neha" btnText="click me" content="Hey i am neha, from kerala" />
      <br />
      <Card hername="simmy" btnText="visit me" content="Hey i am simmy, from Pakistan" />
    </>
  )
}

export default App
