import { useCallback, useState, useContext } from 'react';
import PopupContext from '../commons/popup/PopupContext';

export default function usePopup(name) {
  const [id, setId] = useState(null);
  const { openPopup: open, closePopup: close } = useContext(PopupContext);
  const openPopup = useCallback(
    (d) => {
      console.log('setting id ', id, name);
      setId(open(d));
    },
    [open, id, name]
  );
  const closePopup = useCallback(() => {
    console.log('removeing id ', id, name);
    close(id);
    // setId(null);
  }, [close, id]);
  return { openPopup, closePopup };
}
