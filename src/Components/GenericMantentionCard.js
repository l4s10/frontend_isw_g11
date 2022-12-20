import { Grid, Button, Card, CardContent } from "@mui/material";
import { LoremIpsum } from "react-lorem-ipsum";
import './Styleforpages.css';

export default function GenericMantentionCard(props){
    return(
        <div className="div-padre">
            <Card>
                <CardContent>
                <Grid >
                <h1 className="titulo">{props.name}</h1>
                <div>
                    <p className="descripcion">
                        {props.descripcion}
                    </p>
                    <Grid>
                            <img src={props.urlBefore} alt="IMG ANTES" className="fotos"></img>
                            <img src={props.urlAfter} alt="IMG DESPUES" className="fotos"></img>
                    </Grid>
                    <Button className="botonInforme" size="large" variant="contained">Descargar informe</Button>
                </div>
            </Grid>
                </CardContent>
            </Card>
        </div>
    );
}