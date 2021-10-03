import '../styles/modal.scss';
interface ModalProps{
  show: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Modal(props: ModalProps):JSX.Element {
  return(
    <div id="modal">
      <div id="modal-overlay" onClick={() => props.show(false)}>
      </div>
      <div id="modal-container">
        <div id="modal-content">
          <h2 id="modal-title">instructions</h2>
          <p id="modal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet. In odio magna, aliquet vel efficitur iaculis, lobortis at nisi. Suspendisse fermentum libero elit, id facilisis felis convallis in. Donec augue justo, eleifend ut tempus non, volutpat ac neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula ut sem eget posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet. In odio magna, aliquet vel efficitur iaculis, lobortis at nisi. Suspendisse fermentum libero elit, id facilisis felis convallis in. Donec augue justo, eleifend ut tempus non, volutpat ac neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vehicula ut sem eget posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia lectus eget finibus imperdiet. In odio magna, aliquet vel efficitur iaculis, lobortis at nisi. Suspendisse fermentum libero elit, id facilisis felis convallis in. </p>
        </div>
      </div>

    </div>
  );
}