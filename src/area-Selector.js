import Input from './moleclues/input';
import Styles from './area-Selector.module.css';
import { useEffect, useState } from 'react';

function AreaSelector({ data, onConfirm, onCancle }) {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setSelected('');
  }, [data]);

  return (
    <div className={Styles.hehe}>
      <div className={Styles.conter}>
        <div className={Styles.modal}>
          <h3>District Selection</h3>
        </div>
        <div className={Styles.container}>
          {data.map((d) => (
            <div className={Styles.content}>
              <label>
                <input
                  name='address-type'
                  type='radio'
                  className={Styles.house}
                  onChange={() => setSelected(d)}
                ></input>
                {d}
              </label>
            </div>
          ))}
        </div>
        <div>
          <Input
            placeholder={'Others'}
            onChange={(e) => setSelected(e.target.value)}
          />
        </div>
        <div className={Styles.top}>
          <button className={Styles.text} onClick={onCancle}>
            <b>CANCEL</b>
          </button>
          <button className={Styles.mandal} onClick={() => onConfirm(selected)}>
            <b>CONFIRM</b>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AreaSelector;
