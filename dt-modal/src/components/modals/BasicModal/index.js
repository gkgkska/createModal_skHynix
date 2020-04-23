import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from "react-dom";
import { sk_modal } from '../../../constants';

const BasicModal = forwardRef((props, ref)=> {
    const [visible, setVisible] = useState(false);
    const modal = sk_modal;

    useImperativeHandle(ref, () => {
        return {
           modal_open: () => open(),
           modal_close: () => close()
        }
    })

    const open = () => {
        setVisible(true);
    }
    
    const close = () => {
        setVisible(false);
    }

    if(visible){
        return ReactDOM.createPortal
         (
            <div className={`${modal}_wrap`}>
                <div className={modal}>
                    <div className={`${modal}_content`}>
                        { props.children }
                    </div>
                </div>
            </div>, document.getElementById('modal_root')
        )
        // selected another DOM
    }
    return null;
})

export default BasicModal;