import { Grid, Button, Card, CardContent } from "@mui/material";
import './Styleforpages.css';

export default function AdminMantentionCard(props){
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
                    <div className="div-padre">
                        <Button size="large" variant="contained" color="error">Editar Mantencion</Button>
                        <Button size="large" variant="contained">Descargar informe</Button>
                    </div>
                </div>
            </Grid>
                </CardContent>
            </Card>
        </div>
    );
}