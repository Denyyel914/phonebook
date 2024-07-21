import ReactModal from "react-modal";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  titleCustomClass,
  size,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onClose={onclose}
      contentLabel="Modal"
      className="fixed inset-0 flex items-center justify-center z-[1000]"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50"
    >
      <div
        className={`bg-[E7F3FC] rounded-lg shadow-lg ${
          soze ? `max-w-${size}` : "max-w-lg"
        } px-5`}
      >
        <div className="flex justify-between items-center mb-3 border-b border-navOutline py-4 px-3">
          {title ? (
            <h2 className={`text-xl font-semibold ${titleCustomClass}`}>
              {title}
            </h2>
          ) : (
            ""
          )}
          {onClose ? (
            <Button
              className="text-gray-600 hover:text-red-600 text-xs"
              onClose={onClose}
            >
              X
            </Button>
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
