import { useEffect } from 'react';
const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);
  return (
    <>
      <div className='modal-wrapper' onClick={closeModal}></div>
      <div className='modal-container'>
        <h2>STAY TUNED</h2>
        <p>
          Subscribe to our newsletter and never miss our designs ,latest
          news.etc. Our newsletter is sent once a week, every Monday
        </p>
        <button className='modal-btn' onClick={closeModal}>
          Accept It
        </button>
      </div>
    </>
  );
};
export default MyModal;
