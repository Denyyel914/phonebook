import ReactModal from "react-modal";
import Button from "../Button/Button";
import CloseIcon from "../../assets/close.svg";
import Image from "next/image";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  titleCustomClass,
  size,
  width,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50"
    >
      <div
        className={`bg-[#E7F3FC] rounded-lg shadow-lg ${
          size ? `max-w-${size}` : `max-w-lg `
        } px-5 `}
        // style={{ width: width }}
      >
        <div className="flex justify-between items-center mb-3 border-b border-navOutline py-4 px-3">
          {title ? (
            <h2 className={`text-xl  ${titleCustomClass}`}>{title}</h2>
          ) : (
            ""
          )}
          {onClose ? (
            <Image
              src={CloseIcon}
              alt="Vercel Logo"
              onClick={onClose}
              className="cursor-pointer"
            />
          ) : (
            ""
          )}
        </div>
        <div>{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
