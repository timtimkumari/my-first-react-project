import Input from './moleclues/input';
import Styles from './area-seleter.module.css';

function AreaSeleter() {
  return (
    <div className={Styles.hehe}>
      <div>
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
  );
}
export default AreaSeleter;
