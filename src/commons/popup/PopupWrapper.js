import { useCallback, useState, Fragment } from 'react';
import PopupContext from './PopupContext';
import { getUniqueId } from '../utils';
import Modal from '../../modal/modal';

function PopupsWapper({ children }) {
  const [modals, setModals] = useState([]);

  const openPopup = useCallback(({ body, onClose }) => {
    let id = getUniqueId();
    setModals((ms) => [...ms, { key: id, body, onClose }]);
    return id;
  }, []);

  const closePopup = useCallback((id) => {
    setModals((ms) => {
      return [...ms.filter((m) => m.key !== id)];
    });
  }, []);

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
