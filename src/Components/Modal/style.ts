import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    transform: translateY(60px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledModal = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    top: 0;

    background: var(--modal-background);

    .modal-container {
        animation: ${FadeIn} 0.5s;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        padding: 15px;
        gap: 10px;
        border-radius: 8px;
        background: var(--white);
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .modal-close-button {
        background-color: transparent;
        border: transparent;
        color: var(--grey-4);
        cursor: pointer;
    }

    .modal-close-button:hover {
        color: var(--grey-0);
    }
`;