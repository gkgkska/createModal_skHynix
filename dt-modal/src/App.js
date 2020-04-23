import React from 'react';
import BasicModal from './components/modals/BasicModal';
import { sk_modal, sk_btn } from './constants';

function App() {
  const btn = sk_btn;
  const modal = sk_modal;
  const modalRef = React.useRef();
  
  const modal_open = () => {
    modalRef.current.modal_open();
    console.log(modalRef);
  }

  return (
    <div className='skHynix_container'>
      <button type="button" className='skHynix_btn_primary' onClick={modal_open}>모달 열기</button>

      <BasicModal ref={modalRef}>
        <div className={`${modal}_header`}>
            <div className={`${modal}_title`}>모달 열림</div>
        </div>

        <div className={`${modal}_body`}>
            <p>Some contents...</p>                                
            <p>Some contents...</p>                                
            <p>Some contents...</p>                                
        </div>

        <div className={`${modal}_footer`}>
            <button type="button" className={`${btn}_primary`} onClick={()=> modalRef.current.modal_close()}>모달 닫기</button> 
        </div>
      </BasicModal>
    </div>
  );
}

export default App;
