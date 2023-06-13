import AddressDeleteConfirm from './account-setting/address-delete-confirm';
import Styles from './address-card.module.css';
import usePopup from './hooks/usePopup';
function AddressCard({ data }) {
  const { openPopup, closePopup } = usePopupC();

  return (
    <div className={Styles.container}>
      <div className={Styles.pop}>
        <h4>Timtim kumari</h4>
        <h4 className={Styles.timtim}>Home</h4>
      </div>
      <div>
        <div className={Styles.nutan}>
          <p>45, village bari khojari, near hanuman mandir</p>
          <p>Shambhuganj</p>
          <p>Bhagalpur - 813211</p>
          <p>Bihar</p>

          <p className={Styles.ayush}>Mobile: 7739624147</p>
        </div>
        <div className={Styles.himanshu}>
          <button className={Styles.moon}>EDIT</button>
          <button
            className={Styles.mandal}
            onClick={() =>
              openPopup({
                body: (
                  <AddressDeleteConfirm
                    onCancle={closePopup}
                    onSubmit={(a) => {
                      // TODO delete address
                      closePopup();
                    }}
                  />
                ),
              })
            }
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddressCard;
