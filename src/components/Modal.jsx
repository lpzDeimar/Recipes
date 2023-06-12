import ReactDOM from 'react-dom';

export const Modal = ({ children }) => ReactDOM.createPortal(children, document.getElementById('modal'));
