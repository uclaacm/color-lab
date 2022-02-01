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
          <p id="modal-text">Welcome to the Color Lab! Here you will learn about different ways to write numbers like binary, hexadecimal, and decimal. We can represent colors through these different types of numbers through hex codes and rgb values. For example, rgb(0, 255, 0) would be green. Another way to write it is #00FF00. In this game you will practice matching, recognizing, and converting these color codes by going through an interactive color-by-numbers. Each level you complete will color in another section of the coloring page. Good luck! </p>
        </div>
      </div>

    </div>
  );
}