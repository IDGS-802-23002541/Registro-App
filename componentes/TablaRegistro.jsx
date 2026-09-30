import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
//Este componente solo recibe datos por props y una funcion
//la función es onEliminar

function TablaRegistros({registros, onEliminar}){
    //usamos ForEach para mostrar los datos
    const filas = [];
    registros.forEach((registro, indice) => {
        filas.push(
            <TableRow key={registro.id}>
                <TableCell>{indice + 1}</TableCell>
                <TableCell>{registro.nombre}</TableCell>
                <TableCell>{registro.email}</TableCell>
                <TableCell>{registro.edad}</TableCell>
                <TableCell>
                    <IconButton 
                        size='medium' 
                        color='error' 
                        onClick={() => onEliminar(registro.id)}
                        aria-label = 'Eliminar Registro'
                    >
                        <DeleteIcon fontSize='small'/>
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    });

    return(
        <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Edad</TableCell>
                        <TableCell>Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filas.length > 0 ? (filas) : (
                        <TableRow>
                            <TableCell>
                                <Typography>Aun no hay reacciones</Typography>
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TablaRegistros;