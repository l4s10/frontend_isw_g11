//Imports
import ButtonAppBar from "./Examplenav";
import MantencionCard from "./MantencionCard";
import './Styleforpages.css';

export default function Mantentions(){
    return(
        <div>
            <div>
                <ButtonAppBar></ButtonAppBar>
            </div>
            <div>
                <h1 className="titulo">Mural de mantenciones</h1>
                <MantencionCard/>
                <MantencionCard/>
            </div>
        </div>
    );
}