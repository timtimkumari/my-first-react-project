import styles from './modal.module.css';

const Modal = ({ closeModal, children }) => {
  return (
    <>
      <div className={styles['modal-wrapper']} onClick={closeModal}></div>
      <div className={styles['modal-container']}>{children}</div>
    </>
  );
};

export default Modal;
