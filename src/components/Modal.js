import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalPop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button className= 'navbar-toggler' onClick={handleShow}>
            i
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={true}
        >
            <Modal.Header closeButton>
            <Modal.Title>How to play?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            I will not close if you click outside me.
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <b>©️ Shir Weinbrand | 2022-2023</b>
            </Modal.Footer>
        </Modal>
    </>
  );
}
// export function Modal() {

//     return (


       

//         {/* <div id="modal-full" className="uk-modal-full" uk-modal>
//             <div className="uk-modal-dialog">
//                 <button className="uk-modal-close-full uk-close-large" type="button" uk-close></button>
//                 <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
//                     <div className="uk-background-cover" style="background-image: url('images/photo.jpg');" uk-height-viewport></div>
//                     <div className="uk-padding-large">
//                         <h1>Headline</h1>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                     </div>
//                 </div>
//             </div>
//         </div> */}
       
//     )
// }