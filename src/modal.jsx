class ExampleApp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: true
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Popup message"
           onRequestClose={this.handleCloseModal}
        >
          <h1>Welcome to Idle Miner!</h1>
          <p>Please note that this game was only recreated for educational purposes, and that I am in no way connected to Kolibri Games.</p>
          <br></br>
          <p>If you would like this website to be taken down, please email me <a href="mailto:beol0127@gmail.com">here.</a> Other than that, have fun playing the game!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

const props = {};

ReactDOM.render(<ExampleApp {...props} />, document.getElementById('idle-miner'))