export type TModalProps = {
    isOpen: boolean;
    message: string;
    closeHandler: () => void;
    functionToDo: () => void;
  };