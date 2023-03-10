import { Grid, Button, Card, CardContent } from "@mui/material";
import { LoremIpsum } from "react-lorem-ipsum";
import './Styleforpages.css';

export default function MantentionCard(){
    return(
        <div className="div-padre">
            <Card>
                <CardContent>
                <Grid >
                <h1 className="titulo">Mantención N°1</h1>
                <div>
                    <p className="descripcion">
                        <LoremIpsum p={2}></LoremIpsum>
                    </p>
                    <Grid>
                            <img src="https://cdn2.hubspot.net/hubfs/6430607/01%20-%20Blog/Reja%20de%20acero%20gris%20blog.jpg" alt="IMG ANTES" className="fotos"></img>
                            <img src="https://cdn2.hubspot.net/hubfs/6430607/01%20-%20Blog/Reja%20de%20acero%20gris%20blog.jpg" alt="IMG DESPUES" className="fotos"></img>
                    </Grid>
                    <Button className="botonInforme" size="large" variant="contained">Descargar informe</Button>
                </div>
            </Grid>
                </CardContent>
            </Card>
        </div>
    );
}