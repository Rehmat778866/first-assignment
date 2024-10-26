import { resolve } from "node:path"

export default async function About(){
     await new Promise((resolve) =>{
        setTimeout(resolve , 4000);
     })
    return(
        <div>
            <h1 className="text-center text-black text-8xl p-2 border-4 border-pink-600
           mt-11 rounded-5x1 shadow-pink-600 shadow-1g hover:bg-sky-200 font-bold">About Page
        </h1>
        </div>
    )
}