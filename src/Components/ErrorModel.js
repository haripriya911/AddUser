import "./ErrorModel.css";

const ErrorModel = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} >
        <div className="error">
          <header className="header">
            <h4>{props.title}</h4>
          </header>
          <div className="message">
            <p>{props.message}</p>
          </div>
          <footer>
            <button className="footer" onClick={props.onConfirm}>
              Okay
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ErrorModel;
