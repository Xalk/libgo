import { ConfirmModalParams } from "./model/types";

export const defaultConfirmationParams: ConfirmModalParams = {
  title: "Confirm",
  description: "Are you sure you want to continue?",
  closeText: "Cancel",
  confirmText: "Confirm",
  onClose: () => {},
  onConfirm: () => {},
};
