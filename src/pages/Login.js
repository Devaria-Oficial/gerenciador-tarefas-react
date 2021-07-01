import React, { useState } from 'react';
import logo from '../assets/icones/devaria-logo.svg';
import mail from '../assets/icones/mail.svg';
import lock from '../assets/icones/lock.svg';
import { Input } from '../componentes/Input';
import { executaRequisicao } from '../services/api';

export const Login = props => {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [msgErro, setMsgErro] = useState('');
    const [isLoading, setLoading] = useState(false);

    const executaLogin = async evento => {
        try{
            evento.preventDefault();
            setLoading(true);
            setMsgErro('');
            
            const body = {
                login,
                senha
            };
    
            const resultado = await executaRequisicao('login', 'post', body);
            if(resultado?.data?.token){
                localStorage.setItem('accessToken', resultado.data.token);
                localStorage.setItem('usuarioNome', resultado.data.nome);
                localStorage.setItem('usuarioEmail', resultado.data.email);
                props.setAccessToken(resultado.data.token);
            }
        }catch(e){
            console.log(e);
            if(e?.response?.data?.erro){
                setMsgErro(e.response.data.erro);
            }else{
                setMsgErro('Não foi possível efetuar o login, fale com o administrador.')
            }
        }
        setLoading(false);
    }

    return (
        <div className="container-login">
            <img 
                src={logo}
                alt="Logo Devaria"
                className="logo"
            />
            <form>
                {msgErro && <p>{msgErro}</p>}
                <Input 
                    srcImg={mail}
                    altImg={"Icone email"} 
                    inputType="text"
                    inputName="login"
                    inputPlaceholder="Informe seu email"
                    value={login}
                    setValue={setLogin}
                />
                <Input 
                    srcImg={lock}
                    altImg={"Icone senha"} 
                    inputType="password"
                    inputName="senha"
                    inputPlaceholder="Informe sua senha"
                    value={senha}
                    setValue={setSenha}
                />

                <button onClick={executaLogin} disabled={isLoading}>{isLoading === true ? '...Carregando' : 'Entrar'}</button>
            </form>
        </div>
    );
} 