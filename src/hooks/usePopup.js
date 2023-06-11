import { useCallback, useState, useContext } from 'react';
import PopupContext from '../commons/popup/PopupContext';

export default function usePopup() {
  const [id, setId] = useState(null);
  const { openPopup: open, closePopup: close } = useContext(PopupContext);
  const openPopup = useCallback(
    (d) => {
      console.log('called');
      const id = open(d);
      setId(() => id);
    },
    [open]
  );
  const closePopup = useCallback(() => {
    close(id);
    setId(() => null);
  }, [close]);
  return { openPopup, closePopup };
}
