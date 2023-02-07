import { useState,useEffect } from "react";
import Link from "next/link";

export default function Tempo(props){
    const dynamicDate =  new Date()
    const dynamicDateString = dynamicDate.toLocaleString();

    const [date,setDate] = useState("..")
    setTimeout(() =>setDate(dynamicDateString),1000)
    return (
        
        <div>
            <h1>Hora atual Dinamica</h1>
            {date}
            <br/>
            <h1>Hora atual ao atualizar</h1>
            {props.staticDateString}

            <br/>
            <Link href="/">Home</Link>
        </div>
        
     
    )
}



export function getStaticProps() {
    const staticDate = new Date()
    const staticDateString = staticDate.toLocaleString();

    return {
        props: {
            staticDateString
           
        }
    }
}