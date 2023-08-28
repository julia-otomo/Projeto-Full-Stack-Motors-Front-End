import { useModal, useUserContext } from "../../../Hooks";
import Button from "../../Buttons/index";
import { StyledDeleteModalButtons, StyledDeleteProfileModal } from "./style";

const DeleteProfileModal = () => {
  const { closeModal } = useModal();
  const { deleteUserProfile, user } = useUserContext();

  const deleteFunction = async () => {
    await deleteUserProfile(user?.id!);
    closeModal();
  };

  return (
    <StyledDeleteProfileModal>
      <h2>Tem certeza que deseja excluir sua conta ?</h2>
      <p>
        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
        e removerá seus dados de nossos servidores
      </p>
      <StyledDeleteModalButtons>
        <Button
          $background="grey-5"
          $color="grey-2"
          type="button"
          $width={9}
          $maxWidth={10}
          onClick={closeModal}
        >
          Cancelar
        </Button>
        <Button
          $background="alert-2"
          $color="alert-1"
          type="submit"
          $width={4}
          onClick={deleteFunction}
        >
          Sim, excluir meu perfil
        </Button>
      </StyledDeleteModalButtons>
    </StyledDeleteProfileModal>
  );
};

export default DeleteProfileModal;
