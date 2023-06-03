import { useEffect } from 'react';
import styles from './modal.module.css';

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);
  return (
    <>
      <div className={styles['modal-wrapper']} onClick={closeModal}></div>
      <div className={styles['modal-container']}>{children}</div>
    </>
  );
};

export default Modal;
