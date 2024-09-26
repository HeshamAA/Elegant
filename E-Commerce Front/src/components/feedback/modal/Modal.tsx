import { TModalProps } from "../../../types/modalTypes";
import styles from "./modal.module.css";

const { modal, modalContent } = styles;


function Modal({ isOpen = false, closeHandler, functionToDo, message }: TModalProps) {
  return (
    <>
      {isOpen && (
        <div className={modal}>
          <div className={`flexBetween ${modalContent}`}>
            <div className="flexBetween">
              <div>Confirmation</div>
              <div onClick={closeHandler}>X</div>
            </div>

            <div className="flexMiddleScreen">{message}</div>

            <div>
              <button onClick={closeHandler}>Cancel</button>
              <button
                onClick={() => {
                  functionToDo();
                  closeHandler();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
