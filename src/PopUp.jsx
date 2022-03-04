import React from 'react';
import Modal from 'react-modal';
import ModalButton from './modal-button';
import './App.css';

class PopUp extends React.Component {
  constructor() {
    super();

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
  }

  render() {
    const { data } = this.props;
    return (
      <div className={style.modalWrapper}>
        <ModalButton handleClick={this.toggleModal}>
          click to open modal
        </ModalButton>
        <Modal
          className={{ base: [style.base]}}
          overlayClassName={{ base: [style.overlayBase] }}
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal"
        >
          <span className={style.text}>{data.description}</span>
        </Modal>
      </div>
    );
  }
}

export default PopUp;