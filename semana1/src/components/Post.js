import './App.css';

function App(props) {
  return (
    <div className="container-fluid" style={{ padding: 10 }}>
      <div className="card">
        <img src={props.imagen} className='imagen' alt="logo" />
        <div class="card-body" >
          <div class="row">
            <div class="col">
              <p class="fw-light">{props.tiempo} min ago</p>
            </div>
            <div class="col" style={{ textAlign: 'right' }}>
              <button class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
                {props.likes}</button>
            </div>
          </div>
          <p className="card-title"><b>@{props.autor}</b></p>
          <p className="card-text">{props.texto}</p>
          <p class ="fw-lighter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            </svg>
            Comentarios ({props.comentarios})
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
