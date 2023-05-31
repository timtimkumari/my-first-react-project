import Showmodal from "./Showmodal.css";
const MyModal = ({ closeModal }) => {
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>STAY TUNED</h2>
        <p>
          Subscribe to our newsletter and never miss our designs ,latest
          news.etc. Our newsletter is sent once a week, every Monday
        </p>
        <button className="modal-btn" onClick={closeModal}>
          Accept It
        </button>
      </div>
    </>
  );
};
export default MyModal;
