import { Grid, Card, CardContent } from "@mui/material";
import './Styleforpages.css';
import ModalTest from "./ModalTest";
import {Button} from "react-bootstrap";

export default function AdminMantentionCard(props){
    return(
        <div className="div-padre">
            <Card>
                <CardContent>
                <Grid >
                <h1 className="titulo">{props.name}</h1>
                <div>
                    <p className="empresa">Llevado a cabo por <b>{props.empresa}</b> <br/>
                    con un costo de <b>${props.cost}</b></p>
                    <p className="descripcion">
                        {props.descripcion}
                    </p>
                    <Grid>
                            <img src={props.urlBefore} alt="IMG ANTES" className="fotos"></img>
                            <img src={props.urlAfter} alt="IMG DESPUES" className="fotos"></img>
                    </Grid>
                    <div className="div-padre">
                        {/* <Button size="large" variant="contained" color="error">Editar Mantencion</Button> */}
                        <div className="div-hijo">
                            <ModalTest titleModal="Modificar Mantención" buttonName="Editar mantención" idMantencion={props.key} reqType="http://localhost:3001/api/Mantention/Update"/>
                        </div>
                        <div className="div-hijo">
                            <Button variant="primary">Descargar informe</Button>
                        </div>
                    </div>
                </div>
            </Grid>
                </CardContent>
            </Card>
        </div>
    );
}