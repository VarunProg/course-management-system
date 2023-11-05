import React, { FC, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import classes from "./CustomModal.module.scss";

interface ModalProps {
  show: boolean;
  message: string;
  handleClose: () => void;
}

export const CustomModal: FC<ModalProps> = ({ show, handleClose, message }) => {
  const [showRunningLine, setShowRunningLine] = useState(false);

  useEffect(() => {
    if (show) {
      setShowRunningLine(true);
      const timer = setTimeout(() => {
        handleClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, handleClose]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <p>{message}</p>
            {showRunningLine && <div className={classes.runningLine}></div>}
            <div className={classes.modalClosedBtn}>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
