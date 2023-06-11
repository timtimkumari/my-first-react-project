import Input from './moleclues/input';
import Styles from './area-Selector.module.css';

function AreaSelector() {
  return (
    <div className={Styles.hehe}>
      <div className={Styles.conter}>
        <div className={Styles.modal}>
          <h3>Locality Selection</h3>
        </div>
        <div className={Styles.container}>
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>{' '}
              Shambhuganj
            </label>
          </div>{' '}
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>{' '}
              Barabad
            </label>
          </div>{' '}
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>{' '}
              Belarimilk
            </label>
          </div>{' '}
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>{' '}
              Chutia
            </label>
          </div>{' '}
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>{' '}
              Gidhora
            </label>
          </div>{' '}
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>{' '}
              Kasba
            </label>
          </div>{' '}
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>{' '}
              Kavisha
            </label>
          </div>
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>
              Krma
            </label>
          </div>
          <div className={Styles.content}>
            <label>
              <input
                name='address-type'
                type='radio'
                className={Styles.house}
              ></input>
              Kumarpur
            </label>
          </div>
        </div>
        <div>
          <Input placeholder={'Others'} />
        </div>
        <div className={Styles.top}>
          <button className={Styles.text}>
            <b>CANCEL</b>
          </button>
          <button className={Styles.mandal}>
            <b>CONFIRM</b>
          </button>
        </div>
      </div>
    </div>
  );
}
export default AreaSelector;
