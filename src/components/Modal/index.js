
import React from 'react'
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router'
import { ModalContainer, ModalContent, Title, ButtonBox, Button } from './styles';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/context';
const Modal = ({isOpen, onClose}) => {
    const navigate = useNavigate();
    const { isDark } = useContext(ThemeContext);
    const handleLogout = ()=>{
        onClose();
        document.cookie = "jwtToken=;Max-Age=0";
        navigate("/login");

    }

    if(!isOpen) return null;
    return createPortal(
        <ModalContainer>
           <ModalContent isDark={isDark}>
               <Title isDark={isDark}> Are You Sure You Want To Logout? </Title>
               <ButtonBox>
                <Button onClick={onClose}>Cancel</Button>
                <Button className='primary' onClick={handleLogout}>Confirm</Button>
            </ButtonBox>
           </ModalContent>
        </ModalContainer>
        ,document.getElementById('modal')
 )
}

export default Modal;