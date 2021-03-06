import React, { useState } from 'react'
import {FiArrowLeft} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import './style.css';
import api from '../../services/api.js';

export default function NewIncidents(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

     async function handleNewIncident(event){
        event.preventDefault();
        const data = {
            title,
            description,
            value,
        }
        try{
           await api.post('incidents', data,{
               headers: {
                   Authorization: ongId,
               }
           })
           history.push('/profile');
        }catch(error){
            alert('erro ao cadastrar');
        }
    }


    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero"/>
                <h1>Cadastro Novo Caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="E02041"/>
                    Volta para Home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                placeholder="Título do Caso"
                value = {title}
                onChange ={event => setTitle(event.target.value)}
                />
                <textarea 
                placeholder="Descrição"
                value = {description}
                onChange ={event => setDescription(event.target.value)}
                />
                <input 
                placeholder="Valor em Reais"
                value = {value}
                onChange ={event => setValue(event.target.value)}
                />
                <button className="button" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    );
}