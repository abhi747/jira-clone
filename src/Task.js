import Modal from "./Modal";

const Task = ({ task, isOpen, handleClose }) => (
  <Modal isOpen={isOpen} handleClose={handleClose}>
    <p style={{ fontWeight: "bold" }}>{task?.name}</p>
    <p>{task?.desc}</p>
  </Modal>
);

export default Task;
