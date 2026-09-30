import { Container } from '@mui/material';
import Footer from './Footer';
import Header from './Header';
import FormularioRegistro from './FormularioRegistro';
import TablaRegistros from './TablaRegistro';
import { useState } from 'react';

function ModuloRegistros(){
    const [registros, setRegistros] = useState([]);

    const agregarRegistro = (nuevoRegistro => {
        setRegistros ((registrosPrevios) => [...registrosPrevios, nuevoRegistro]);
    })

    const eliminarRegistro = (id) => {
        setRegistros ((registrosPrevios) => registrosPrevios.filter((registros) => registros.id !== id));
    }


    return(
        <>
            <Header titulo = "Módulo de reacciones" totalRegistros={registros.length}/>
            <Container>
                <FormularioRegistro onAgregar={agregarRegistro}/>
                <TablaRegistros registros={registros} onEliminar={eliminarRegistro}/>
            </Container>
            <Footer/>
        </>
        
    )
}

export default ModuloRegistros;