import React from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import {
  ModalContainer,
  ModalContent,
  Title,
  ButtonBox,
  Button,
} from "./styles";
import { useContext } from "react";
import { StoreContext } from "../../utils/ContextUtils";

type ModalProps = {
  isOpen: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Modal = ({ isOpen, onClose }: ModalProps) => {
  const navigate = useNavigate();
  const val = useContext(StoreContext);

  const handleLogout = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClose(e);
    document.cookie = "jwtToken=;Max-Age=0";
    navigate("/login");
  };

  if (!isOpen) return null;
  const portalElement = document.getElementById("modal");
  if (!portalElement) throw new Error("Cannot find modal root element");
  if (!isOpen) return null;
  return createPortal(
    <ModalContainer>
      <ModalContent isDark={val.store.isDark}>
        <Title isDark={val.store.isDark}>
          {" "}
          Are You Sure You Want To Logout?{" "}
        </Title>
        <ButtonBox>
          <Button data-testid="modal-cancel" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="primary"
            role="presentation"
            onClick={handleLogout}
            data-testid="modal-confirm"
          >
            Confirm
          </Button>
        </ButtonBox>
      </ModalContent>
    </ModalContainer>,
    portalElement
  );
};

export default Modal;
