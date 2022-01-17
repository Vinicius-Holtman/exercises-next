export default function Filho(props) {
    console.log(props.funcao)
    return (
        <>
            <h2>Filho</h2>
            <button onClick={props.funcao}>Falar com o pai</button>
            <button onClick={() => props.funcao("Passei no ENEM")}>Falar com o pai#02</button>
        </>
    )
}