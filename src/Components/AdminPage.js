//Imports
import ButtonAppBar from "./Examplenav";
import AdminMantentionCard from "./AdminMantentionCard";
import { LoremIpsum } from "react-lorem-ipsum";
import './Styleforpages.css';
import { Button } from "@mui/material";

export default function AdminPage(){
    return(
        <div>
            <div>
                <ButtonAppBar ruta="/" identifier="LogOut"></ButtonAppBar>
            </div>
            <h1 className="titulo">Mural de mantenciones</h1>
            <h2 className="titulo">Bienvenido Administrador</h2>
            <div className="div-padre">
                <Button size="large" variant="contained" color="primary">Ingresar una nueva mantencion</Button>
            </div>
            <div className="contenedorCards">
                <AdminMantentionCard
                    name="Mantención N°1: Cambio de rejas en el bloque A"
                    descripcion={<LoremIpsum p={1}/>}
                    urlBefore="https://www.shutterstock.com/shutterstock/photos/1087986200/display_1500/stock-photo-metal-fence-of-high-grade-steel-surrounding-a-house-garden-1087986200.jpg"
                    urlAfter="https://www.shutterstock.com/shutterstock/photos/1735842728/display_1500/stock-photo-wrought-black-metal-fence-in-a-garden-1735842728.jpg"
                />
                <AdminMantentionCard
                    name="Mantención N°2: Mantención de prueba"
                    descripcion={<LoremIpsum p={2}/>}
                    urlBefore="https://www.shutterstock.com/shutterstock/photos/2075626984/display_1500/stock-photo-portrait-of-cheerful-young-man-standing-in-doorway-of-modern-apartment-millennial-male-homeowner-2075626984.jpg"
                    urlAfter="https://www.shutterstock.com/shutterstock/photos/1249833034/display_1500/stock-photo-modern-house-entrance-with-parking-car-next-to-it-1249833034.jpg"
                />
                <AdminMantentionCard
                    name="Mantención N°3: Mantención eléctrica de emergencia"
                    descripcion={<LoremIpsum p={3}/>}
                    urlBefore="https://www.shutterstock.com/shutterstock/photos/1114829027/display_1500/stock-photo-electric-box-system-in-empty-room-1114829027.jpg"
                    urlAfter="https://www.shutterstock.com/shutterstock/photos/1780414628/display_1500/stock-photo-electrician-engineer-checks-electrical-circuit-in-control-panel-for-high-current-and-voltage-1780414628.jpg"
                />
            </div>
        </div>
    );
}