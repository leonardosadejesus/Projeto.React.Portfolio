import Item from "./Item"

function List() {
    return (
        <>
        <h1>Minha Lista</h1>
        <ul>
           <Item marca="Ferrari" ano_lancamento={1986} />         
           <Item marca="Fiat" ano_lacamento={1964}/>
           <Item marca="Renault" />
           <Item marca="chevrolet" ano_lancamento={1999} />
           <Item />
        </ul>
        </>
    )
}

export default List