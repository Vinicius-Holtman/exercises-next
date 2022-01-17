import Filho from "./Filho";

function falarComigo() {
    console.log("Alguem falou comigo!")
}

export default function Pai(props) {

    function falarComigo(param) {
        console.log(param)
    }

    return (
        <>
            <Filho funcao={falarComigo}/>
        </>
    )
}