import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { sk_btn } from '../../../constants';

const BasicModal = (modalProps) => {
    const prefixCls = modalProps.prefix;

    const modalClose = e => {
        const { onCancel } = modalProps;
        if(onCancel){
            onCancel(e);
        }
    }

    if(modalProps.visible){
        return ReactDOM.createPortal
            (
                <div className={`${prefixCls}_wrap`}>
                    <div className={prefixCls}>
                        <div className={`${prefixCls}_content`}>
                            { modalProps.children }

                            <div className={`${prefixCls}_footer`}>
                                <button type="button" className={`${sk_btn}_primary`} onClick={modalClose}>모달 닫기</button> 
                            </div>
                        </div>
                    </div>
                </div>, document.querySelector('body'));
            // selected another DOM
        }
    return null;
}

BasicModal.defaultProps = {
    visible: false,
}

BasicModal.propTypes = {
    onCancel: PropTypes.func,
    visible: PropTypes.bool,
    cerfix: PropTypes.string,
    prefix: PropTypes.string,
};

export default BasicModal;
