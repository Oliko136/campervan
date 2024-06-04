import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Icon from "components/Icon/Icon";
import { Overlay, ModalWindow, CloseBtn } from "./Modal.styled";

const modalRoot = document.getElementById('modal-root');

const Modal = ({ close, children }) => {
    const closeModal = useCallback(({ target, currentTarget, code }) => {
        if ( target === currentTarget || code === 'Escape') {
            close();
        }
    }, [close])

    useEffect(() => {
        document.addEventListener('keydown', closeModal);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', closeModal)
            document.body.style.overflow = 'auto';
        }
            
    }, [closeModal])

    return createPortal((
        <Overlay onClick={closeModal}>
            <ModalWindow>
                <CloseBtn type="button" onClick={closeModal}>
                    <Icon width='32px' height='32px' stroke='#101828' name='icon-close' />
                </CloseBtn>
                {children}
            </ModalWindow>
        </Overlay>
    ), modalRoot)
}

export default Modal;