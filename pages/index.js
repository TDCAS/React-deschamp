import Tempo from "./tempo"
import Link from "next/link"
import Contador from "../compontes/contador.js"




export default function  Home() {
    return (
    <div>
        <h1 >Contador</h1>
        <Contador/>
        <Link href="/p2">
            hellow
        </Link>
        <br/>
        <Link href="/tempo">
            Tempo
        </Link>
        <br/>
        <Link href="/produto/1">
            Produtos 1
        </Link>
        <br/>
        <Link href="/api/tempo">
            Api
        </Link>


    </div>


    
    )
}

