/*
//geito antigo
//cria e exporta uma função asyncrona que recebe um parametro context
export async function getServerSideProps(context) {
    //cria uma variave que se chama o id, onde o mesmo usa o context para pegar o id da url
    const id = context.query.id

    return {
       //retorna um objeto "props" onde o mesmo tem como child id:ID 
        props:{
            id:id
        }
    }
}
*/
import Link from "next/link"
export async function getStaticPaths(){

    return{
        paths: [{
            params: {
                id:'1'
            }
        },{
            params: {
                id:'2'
            }
    }],
        fallback: "blocking"
    }

}
export async function getStaticProps(context){
    const id = context.params.id

    return {
        props:{
            id:id
        }
    }
}

export default function produto(props){
   

    return (<div>
        Hellow seu id é {props.id}

        <br/>

        <Link href="/">
            Home
        </Link>

    </div>
        
    )
}