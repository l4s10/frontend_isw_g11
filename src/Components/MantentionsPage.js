//Imports
import ButtonAppBar from "./Examplenav";
import GenericMantentionCard from "./GenericMantentionCard";
import { LoremIpsum } from "react-lorem-ipsum";
import './Styleforpages.css';

export default function Mantentions(){
    return(
        <div>
            <div>
                <ButtonAppBar></ButtonAppBar>
            </div>
            <h1 className="titulo">Mural de mantenciones</h1>
            <div className="contenedorCards">
                <GenericMantentionCard
                    name="Mantención N°1"
                    descripcion={<LoremIpsum p={1}/>}
                    urlBefore="https://www.shutterstock.com/shutterstock/photos/1087986200/display_1500/stock-photo-metal-fence-of-high-grade-steel-surrounding-a-house-garden-1087986200.jpg"
                    urlAfter="https://www.shutterstock.com/shutterstock/photos/1735842728/display_1500/stock-photo-wrought-black-metal-fence-in-a-garden-1735842728.jpg"
                />
                <GenericMantentionCard
                    name="Mantención N°2"
                    descripcion={<LoremIpsum p={2}/>}
                    urlBefore="https://www.shutterstock.com/shutterstock/photos/2075626984/display_1500/stock-photo-portrait-of-cheerful-young-man-standing-in-doorway-of-modern-apartment-millennial-male-homeowner-2075626984.jpg"
                    urlAfter="https://www.shutterstock.com/shutterstock/photos/1249833034/display_1500/stock-photo-modern-house-entrance-with-parking-car-next-to-it-1249833034.jpg"
                />
                <GenericMantentionCard
                    name="Mantención N°3"
                    descripcion={<LoremIpsum p={3}/>}
                    urlBefore="https://www.shutterstock.com/shutterstock/photos/1114829027/display_1500/stock-photo-electric-box-system-in-empty-room-1114829027.jpg"
                    urlAfter="https://www.shutterstock.com/shutterstock/photos/1780414628/display_1500/stock-photo-electrician-engineer-checks-electrical-circuit-in-control-panel-for-high-current-and-voltage-1780414628.jpg"
                />
            </div>
        </div>
    );
}