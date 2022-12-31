import { Grid, Card, CardContent } from "@mui/material";
import { Button } from "react-bootstrap";
import './Styleforpages.css';

export default function GenericMantentionCard(props){
    return(
        <div className="div-padre">
            <Card>
                <CardContent>
                <Grid >
                <h1 className="titulo">{props.name}</h1>
                <div>
                    <p className="empresa">Llevado a cabo por {props.empresa}</p>
                    <p className="descripcion">
                        {props.descripcion}
                    </p>
                    <Grid>
                            <img src={props.urlBefore} alt="IMG ANTES" className="fotos"></img>
                            <img src={props.urlAfter} alt="IMG DESPUES" className="fotos"></img>
                    </Grid>
                    <Button className="botonInforme" size="large" variant="primary">Descargar informe</Button>
                </div>
            </Grid>
                </CardContent>
            </Card>
        </div>
    );
}