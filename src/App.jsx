import CarForm from './components/CarForm'
import CarList from './components/CarList'

export default function App() {
  return (
    <div className='container'>
      <CarForm />
      <h3 className='mx-10 p-2 text-2xl font-semibold'>Arabalarım</h3>
      <CarList />
    </div>
  )
}
