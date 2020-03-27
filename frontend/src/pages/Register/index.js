import React, { useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api.js';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event){
        //impede o recarreganento da pg
        event.preventDefault();

        //armazena todos os dados dos inputs em uma variavel
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try{
        const response = await api.post('ongs', data);
        //usamos a crase para por uma variavel dentro da stirng 
        alert(`Seu ID de acesso: ${response.data.id}`);
        //envia o usuario de volta a pg raiz
        history.push('/')
        }catch(error){
            alert('Tente novamente.');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça Seu Cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="E02041"/>
                        Não Tenho Cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da Ong"
                    value = {name}
                    onChange={event => setName(event.target.value)}
                    />
                    
                    <input type="email" placeholder="E-mail"
                    value = {email}
                    onChange={event => setEmail(event.target.value)}
                    />

                    <input placeholder="Whatsapp"
                    value = {whatsapp}
                    onChange={event => setWhatsapp(event.target.value)}
                    />
                    
                    <div className="input-group">
                    
                    <input placeholder="Cidade"
                    value = {city}
                    onChange={event => setCity(event.target.value)}
                    />
                    
                    <input placeholder="UF" style={{ width:80}}
                    value = {uf}
                    onChange={event => setUf(event.target.value)}
                    />
                    
                    </div>
                    <button className="button" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}