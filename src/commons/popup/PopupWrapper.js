import { useState, Fragment, useEffect } from 'react';
import PopupContext from './PopupContext';
import Modal from '../../modal/modal';

function PopupsWapper({ children }) {
  const [modals, setModals] = useState([]);

  useEffect(() => {
    if (modals.length > 0) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [modals.length]);

  const openPopup = ({ body, onClose, id }) => {
    setModals((ms) => [...ms, { key: id, body, onClose }]);
  };

  const closePopup = (id) => {
    setModals((ms) => [...ms.filter((m) => m.key !== id)]);
  };

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {modals.map(({ body, key, ...props }) => (
        <Modal key={key} closeModal={() => closePopup(key)} {...props}>
          {body}
        </Modal>
      ))}
      <Fragment>{children}</Fragment>
    </PopupContext.Provider>
  );
}
export default PopupsWapper;
