import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Landing.module.css';
import image from '../../assets/images/cerrar-mujer-sosteniendo-lindo-perro.jpg';

function Landing() {
    const navigate = useNavigate();
    const hanlderButton = () => {
        navigate('/home');
    }
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.image_content}>
                    <img src={image} />
                </div>
                <div className={styles.text_content}>
                    <h1>ECUENTRA EL PERRO PERFECTO PARA TI </h1>
                    <p>En est Web encontraras todas las razas de perros en el mundo, podras descubrir cual es mejor para ti y tu familia</p>
                    <button onClick={hanlderButton}>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Landing