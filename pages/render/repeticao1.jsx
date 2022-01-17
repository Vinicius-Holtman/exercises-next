export default function repeticao1() {
    
    const listaAprovados = [
        'João',
        'Maria',
        'Vinicius',
        'Bianca',
    ]
    
    function renderLista() {
            return listaAprovados.map((nome, i) => {
                return <li key={i}>{nome}</li>
            }) 
    }
    
    return (
        <>
            <ul>
                {renderLista()}
            </ul>
        </>
    )
}