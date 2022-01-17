import If from "../../components/If";


export default function condicional1() {
    const numero = 4
    return (
        <>
            <If teste={numero % 2 === 0}>
                <h2>Numero {numero} e par</h2>
            </If>
            <If teste={numero % 2 === 1}>
                <h2>Numero {numero} e impar</h2>
            </If>
        </>
    )
}