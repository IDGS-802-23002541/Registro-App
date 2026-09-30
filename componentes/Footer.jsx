import { Box, Typography } from '@mui/material'

function Footer(){
    const anioActual = new Date().getFullYear();

    return(
        <Box component="footer" sx={{ mt: 4, py: 2, textAlign: 'center', borderTop: '1px solid #ea8007'}}>
            <Typography variant='body' color='text.secondary'>
                {`Modulo de registros - ${anioActual}`}
            </Typography>
        </Box>
    )
}

export default Footer;