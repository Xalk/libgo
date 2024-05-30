import { UiModal } from "@/shared/ui/ui-modal";
import { ConfirmModalParams } from "../model/types";
import { Button } from "flowbite-react";


export function ConfirmationModal({ params }: { params: ConfirmModalParams }) {
  return (
    <UiModal isOpen onClose={params.onClose}>
      <UiModal.Header>{params.title}</UiModal.Header>
      <UiModal.Body>{params.description}</UiModal.Body>
      <UiModal.Footer>
        <Button onClick={params.onClose}>
          {params.closeText}
        </Button>
        <Button onClick={params.onConfirm}>
          {params.confirmText}
        </Button>
      </UiModal.Footer>
    </UiModal>
  );
}
