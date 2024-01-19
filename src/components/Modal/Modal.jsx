import { useEffect } from 'react';

const Modal = ({ hideModal, selectedHit }) => {
  useEffect(() => {
    const handleEscClick = evt => {
      if (evt.code === 'Escape') {
        hideModal();
      }
    };

    const handleOverlayClick = evt => {
      if (evt.target.classList.contains('Overlay')) {
        hideModal();
      }
    };

    document.addEventListener('keydown', handleEscClick);
    document.addEventListener('click', handleOverlayClick);

    return () => {
      document.removeEventListener('keydown', handleEscClick);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [hideModal]);

  const { largeImageURL, tags } = selectedHit;

  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

export default Modal;
