import Link from "next/link"
export default async function tempo(request,response){
    const apisecret = process.env.CONVERTKIT_API_SECRET
    const fruits = await fetch(`https://fruityvice.com/api/fruit/${apisecret}`)
    const fruitjson = await fruits.json()
    const frutas = await fruitjson.name

    
    response.setHeader('Cache-Control','s-maxage=10, stale-while-revalidate')
    const data =  new Date()
    response.json({
        date: data,
        frua: frutas
    })

}


