import { useEffect , useState } from "react"

function useCurrencyinfo (currency){
    const [data, setdata] = useState([])
    useEffect(()=>{
        // fetch(`https://v6.exchangerate-api.com/v6/4d93a30697c0c0a8a128c5a1/latest/${currency}`)
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res.rates))
        .catch((err) => console.log(err))
    }, 
    [currency])
    return data
}

export default useCurrencyinfo;

