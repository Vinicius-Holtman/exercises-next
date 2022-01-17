function acao1() {
    console.log("foi acionado bota 1")
}

export default function botao() {

    function botao2() {
        console.log("foi acionado botao 2")
    }

    function botao5(e) {
        console.log(e)
    }

    return (
        <div>
            <button onClick={acao1}>Click #01</button>
            <button onClick={botao2}>Click #02</button>
            <button onClick={() => {
                console.log("foi acionado botao 3")
            }}>Click #03</button>
            <button onClick={() => console.log("foi acionado botao 4")}>Click #04</button>
            <button onClick={botao5}>Click #05</button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>
        </div>
    )
}