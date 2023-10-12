import React, { useState, useEffect } from 'react';
import styled from 'styled-components';// Asegúrate de tener un archivo CSS para los estilos de notificación

const NotificationContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    text-align: center;
    transition: all 0.5s;
    z-index: 1000;
    background-color: ${props => props.type==='success' ?'#4caf50':'#ff4d4d'};
    color:${props => props.type==='success' ?'#000':'#ccc'};
`;

  
  
  
function Notification({ type, message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000); // Cierra la notificación después de 3 segundos

    return () => clearTimeout(timer);
  }, [onClose]);

  

  return (
    isVisible && (
      <NotificationContainer type={type}>
        {message}
      </NotificationContainer>
    )
  );
}

export default Notification;
