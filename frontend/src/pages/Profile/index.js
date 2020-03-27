import React, { useEffect, useState } from 'react';
import './style.css';
import Logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api.js';

export default function Profile() {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    /**
     * essa função recebe dois paramentros
     * 1º: qual função eu quero que seja executada
     * 2º: quando ela sera executada
    */

   useEffect(()=>{
    api.get('profile', {
        headers: {
            Authorization: ongId
        }
    }).then(response =>{
        setIncidents(response.data);
    })
}, [ongId]);
    
   async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                Authorization: ongId,
                } 
            });
            {/**Essa tecnica atualiza os incidents sem atualziar a tela toda */}
            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(error){
            alert('Erro ao Deletar');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={Logo} alt="Be The Hero"/>
                <span>Bem Vinda, {ongName}</span>
                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button onClick={handleLogout}  type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {/** Criamos um Map para pegar todos os incidentes da ong logada
                 * assim criamos apenas um li para listar tudo,
                 * dando a esse li o padrão de exibição que queremos
                */}
                {incidents.map(incidents=>(
                    <li key ={incidents.id}>
                    <strong>CASO:</strong>
                    <p>{incidents.title}</p>
                    
                    <strong>DESCRIÇÂO</strong>
                <p>{incidents.description}</p>
                    
                    <strong>VALOR</strong>
                    {/**
                     * Intl é usado para trabalhar formatação padrão
                     * Numformat(), 1º parametro é o local que estamos ou iremos usar a formatação
                     * 2º é o estilo de formatação
                     */}
                <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>

                     {/**
                      * precisamos passar o id dentro de uma função, nessa caso usei uma arrow function
                      * assim iremos deletar apenas o incident em questão, caso contrario iriamos deletar todos
                      */}
                    <button type="button" onClick ={()=> handleDeleteIncident(incidents.id)}>
                        <FiTrash2  size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}