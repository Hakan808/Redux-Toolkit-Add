import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../features/cars/carsSlice";

function CarForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!name || !value) return;
 
    // Yapılacaklar: Arabayı store'a kaydet
       dispatch(addCar({name,value}))
    setName("");
    setValue("");
  };

  return (
    <div className="flex justify-center items-center ">
    <div className="car-form panel flex flex-col gap-2 mx-10 p-2 shadow w-screen">
      <h4 className="text-2xl font-light ">Araba Ekle</h4>
      <form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:justify-between md:items-center"
>
  <div className="flex gap-5">
     <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
    <label className="font-semibold">Marka</label>
    <input
      className="border py-1 px-2 rounded w-full sm:w-auto"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
    <label className="font-semibold">Fiyat</label>
    <input
      className="border py-1 px-2 rounded w-full sm:w-auto"
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
  </div>
  <div className="flex justify-start sm:justify-center lg:justify-end">
    <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
      Gönder
    </button>
  </div>
</form>

    </div>
    </div>
  );
}

export default CarForm;
