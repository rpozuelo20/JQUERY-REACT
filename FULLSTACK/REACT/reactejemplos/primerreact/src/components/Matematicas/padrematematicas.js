import Matematicas from './matematicas'; // IMPORTAMOS Matematicas

function PadreMatematicas() {
    // ESTE METODO DEBE SER LLAMADO DESDE EL HIJO matematicas
    const ejecutarTriple = (numero) => {
        var triple = numero * 3;
        console.log("El triple es " + triple);
    };

    return (
        <div>
            <Matematicas numero="22" ejecutarTriple={ejecutarTriple}/>
            <Matematicas numero="77" ejecutarTriple={ejecutarTriple}/>
        </div>
    );
}

export default PadreMatematicas;