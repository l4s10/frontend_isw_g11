//Imports
import ButtonAppBar from "./Examplenav";
import GenericMantentionCard from "./GenericMantentionCard";
import { LoremIpsum } from "react-lorem-ipsum";
import './Styleforpages.css';
//Conectando a Backend
import Axios from "axios";
import React, {useEffect, useState} from 'react';
import AdminMantentionCard from "./AdminMantentionCard";

export default function Mantentions(){
    //HOOKS
    const [data,setData] = useState();
    const getData=async () =>{
        const response= await Axios.get('http://localhost:3001/api/Mantentions/view');
        setData(response.data);
    }
    useEffect(()=>{
        getData()
    },[]);

    return(
        <div>
            <div>
                <ButtonAppBar ruta="/admin" identifier="¿Eres administrador?"></ButtonAppBar>
            </div>
            <h1 className="titulo">Mural de mantenciones</h1>
            <h2 className="titulo">Bienvenido Vecino</h2>
            <div className="contenedorCards">
                {(data ?? []).map((item) => {
                    return (
                        <GenericMantentionCard
                            key={item.id}
                            name={item.title}
                            empresa={item.maintenceManager}
                            descripcion={item.description}
                            urlBefore="https://www.shutterstock.com/shutterstock/photos/1114829027/display_1500/stock-photo-electric-box-system-in-empty-room-1114829027.jpg"
                            urlAfter="https://www.shutterstock.com/shutterstock/photos/1780414628/display_1500/stock-photo-electrician-engineer-checks-electrical-circuit-in-control-panel-for-high-current-and-voltage-1780414628.jpg"
                        />
                    );
                })}
            </div>
        </div>
    );
}