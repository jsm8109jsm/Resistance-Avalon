type ModalBodyType =
  | "SETTING"
  | "HELP"
  | "MY_INFO"
  | "AUTH"
  | "ROOM_SETTING"
  | "ROOM_MAKING";

type ModalType = {
  isOpen: boolean;
  body:
    | undefined
    | "SETTING"
    | "HELP"
    | "MY_INFO"
    | "AUTH"
    | "ROOM_SETTING"
    | "ROOM_MAKING";
};

export type { ModalBodyType, ModalType };
