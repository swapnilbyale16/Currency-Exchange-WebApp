import { useState , useEffect } from "react";
import useCurrencyinfo from "./hooks/useCurrencyinfo";
import "./App.css";
import { InputBox } from "./components";

function App() {
  const [ammount , setammount] = useState(1)
  const [from , setfrom] = useState("USD")
  const [too , setoo] = useState("INR")
  const [convertedammount , setconvertedammount] = useState()

  const convertcurrency = useCurrencyinfo(from)

  const options = Object.keys(convertcurrency)

  const swap = () => {
    setfrom(too)
    setoo(from)
    setconvertedammount(ammount)
    setammount(convertedammount)
  }

  const convert = () => {
    setconvertedammount(ammount * convertcurrency[too])
    console.log(convertcurrency.too)
    // console.log(ammount)
  }

  useEffect(() => {
    convert()
  }, [from, too , ammount , swap])
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        id="bgimage"
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-3xl p-5 backdrop-blur-sm bg-gray/30 my-2">
            <h1 className=" font-bold text-gray-900 font-mono text-3xl" >Currency Converter
             <a className=" font-bold text-sm text-gray"><i> Swapnil Byale</i></a></h1>
          </div>
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-gray/30">
            <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
             
          }}
            >
              <div className="w-full mb-1">
                <InputBox 
                lable="from"
                ammount={ammount}
                oncurrencyChange={(currency)=>setoo(currency)}
                selectCurrency={from}
                currencyOptions={options}
                onammountChange={(ammount) => setammount(ammount)}
                currencyDisable
                
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                lable="to"
                ammount= {convertedammount}
                oncurrencyChange={(currency) => setoo(currency)}
                currencyOptions={options}
                selectCurrency={too}
                
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >Convet {from.toUpperCase()} to {too.toUpperCase()} </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
