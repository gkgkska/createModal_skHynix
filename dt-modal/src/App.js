import React, { useState } from 'react';
import BasicModal from './components/modals/BasicModal';
import { sk_modal } from './constants';

function App() {
  const [visible, setVisible] = useState(false); 

  const modalOpen = e => {
    setVisible(true);
  }
  
  const onCancel = e => {
    setVisible(false);
  }

  return (
    <div className='skHynix_container'>
      <button type="button" className='skHynix_btn_primary' onClick={modalOpen}>모달 열기</button>
      <BasicModal prefix={sk_modal} visible={visible} onCancel={onCancel}>
        <div className={`${sk_modal}_header`}>
            <div className={`${sk_modal}_title`}>모달 열림</div>
        </div>

        <div className={`${sk_modal}_body`}>
            <p>Some contents...</p>                                
            <p>Some contents...</p>                                
            <p>Some contents...</p>                                
        </div>
        {/* children이 안으로 들어갈경우 클래스 prefix(클래스 명 통일화)가 가능합니다. */}
      </BasicModal>
    </div>
  );
}

export default App;

