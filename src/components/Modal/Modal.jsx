import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.css';

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
            document.body.style.overflow = 'unset';
        }
            
    }, [closeModal])

    return createPortal((
        <div onClick={closeModal} className={styles.Overlay}>
            <div className={styles.Modal}>
                <button type="button" onClick={closeModal}>Close</button>
                {children}
            </div>
        </div>
    ), modalRoot)
}

export default Modal;