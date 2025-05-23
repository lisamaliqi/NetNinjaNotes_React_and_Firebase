import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal(props: any) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
        <div className="modal">
            {/* <h2>10% off code!</h2>
            <p>Use code Lajsa for 10% off next purchase</p> */}
            {props.children}
            <button onClick={props.toggleModal}>close</button>
        </div>
    </div>
  ), document.body) //will pick it up and put it at the end of the body tag
};
