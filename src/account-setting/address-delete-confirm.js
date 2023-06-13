import Styles from './address-delete-confirm.module.css';
import Button from '../moleclues/button/button';
function AddressDeleteConfirm({ onCancle, onConfirm }) {
  return (
    <div className={Styles.timtim}>
      <div>
        <h4>Delete Confirmation</h4>
        <p className={Styles.nutan}>
          Are you sure you want to delete this address?
        </p>
      </div>
      <div className={Styles.conter}>
        <Button
          className={Styles.kajal + ' ' + Styles['himanshu']}
          type={'secondary'}
          onClick={onCancle}
        >
          <p>CANCEL</p>
        </Button>
        <Button className={Styles.kajal} type={'secondary'} onClick={onConfirm}>
          <p className={Styles.mandal}>DELETE</p>
        </Button>
      </div>
    </div>
  );
}
export default AddressDeleteConfirm;
