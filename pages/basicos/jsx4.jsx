export default function jsx4() {
    const conteudo = "Valor da variavel"

    return (
        <div>
            <h1>Titulo</h1>
            <span>{conteudo}</span>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(9.6, 1, 10)}</h5>
        </div>
    )
}

function entre(valor, min, max) {
    if(valor >= min && valor <= max) {
        return "sim"
    } else {
        return "não"
    }
}