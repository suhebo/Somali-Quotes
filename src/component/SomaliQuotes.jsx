import { useState } from "react"

function SomaliQuotes (){

const [index, setIndex] = useState(0)


const maahmaaah = [
    "1. Hubsiimo hal baa la siista",
    "2. Abaal qof galay waaala arkay lakiin qof gudaase yar",
    "3. Aaddane eed ma waayo ",
    "4. Iskaashato ma kufto",
    "5. Far kaliya fool ma dhaqdo",
    "6. Af daboolan waa dahab ",
    "7. Talo xumo tog baas bay kaa riddaa",
    "8. Alla aamin ma iisho",
    "9. Af jooga looma adeego",
    "10. Af macaan garan macaan baa dhaanta. "
    
]
const nextBtn = () => {
 if (index <maahmaaah.length -1){
    setIndex(index + 1)
 }
}

const prevBtn = () => {
   if (index > 0){
    setIndex(index - 1)
   }
}



return <div className="text-center ">
    
    <p style={{display: index == maahmaaah.length -1 ? "block" : "none"}} className="text-2xl text-red-400 font-bold ">Dhamaad</p>
    <h1 style={{color: index == 2 ? "red" : "" }} className="font-bold text-3xl mt-20"> {maahmaaah [index]  } </h1>
    <button onClick={prevBtn} className="bg-blue-300 px-6 py-4 rounded-xl text-2xl text-white mt-10">Previous</button>
    <button onClick={nextBtn} className="bg-blue-300 px-6 py-4 rounded-xl text-2xl text-white ml-10">Next</button>
</div>

}

export default SomaliQuotes 
