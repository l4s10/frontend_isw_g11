//Imports
import ButtonAppBar from "./Examplenav";
import MantencionCard from "./MantencionCard";
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
                    urlBefore="https://cdn2.hubspot.net/hubfs/6430607/01%20-%20Blog/Reja%20de%20acero%20gris%20blog.jpg"
                    urlAfter="https://cdn2.hubspot.net/hubfs/6430607/01%20-%20Blog/Reja%20de%20acero%20gris%20blog.jpg"
                />
                <GenericMantentionCard
                    name="Mantención N°2"
                    descripcion={<LoremIpsum p={2}/>}
                    urlBefore="https://cdn2.hubspot.net/hubfs/6430607/01%20-%20Blog/Reja%20de%20acero%20gris%20blog.jpg"
                    urlAfter="https://cdn2.hubspot.net/hubfs/6430607/01%20-%20Blog/Reja%20de%20acero%20gris%20blog.jpg"
                />
                <GenericMantentionCard
                    name="Mantención N°3"
                    descripcion={<LoremIpsum p={3}/>}
                    urlBefore="https://cdn2.hubspot.net/hubfs/6430607/01%20-%20Blog/Reja%20de%20acero%20gris%20blog.jpg"
                    urlAfter="https://cdn2.hubspot.net/hubfs/6430607/01%20-%20Blog/Reja%20de%20acero%20gris%20blog.jpg"
                />
            </div>
        </div>
    );
}