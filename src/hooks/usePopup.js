import { useCallback, useState, useContext } from 'react';
import PopupContext from '../commons/popup/PopupContext';
import { getUniqueId } from '../commons/utils';

export default function usePopup() {
  const [id, setId] = useState(getUniqueId());
  const { openPopup: open, closePopup: close } = useContext(PopupContext);
  const openPopup = useCallback((d) => open({ id, ...d }), [open, id]);
  const closePopup = useCallback(() => {
    close(id);
    setId(getUniqueId());
  }, [close, id]);
  return { openPopup, closePopup };
}
