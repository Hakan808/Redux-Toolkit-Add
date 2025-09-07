import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../features/cars/carsSlice";
function CarList() {
  // Yapılacaklar: store'dan arabaları alın
  const cars = useSelector((state) => state.cars.card);
  console.log(cars)
  const dispatch = useDispatch();
  const onClick = (id) => {
    // Yapılacak: Arabayı silin
    dispatch(removeCar(id));
  }

  const renderedCars = cars.map((car, i) => {
    return (
      <div key={i} className='flex justify-between px-2  py-5 shadow mx-10 items-center'>
        <p className="text-xl font-light">
          {car.name} - ${car.value}
        </p>
        <button className='bg-red-500 text-white px-6 rounded-sm py-1' onClick={() => onClick(car.id)}>
          Sil
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className='mx-10 px-2 font-semibold'>Başlamak için araba ekleyin</div>
      )}
    </div>
  )
}

export default CarList
