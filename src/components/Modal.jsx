import ReactDOM from 'react-dom';

export const Modal = ({ children }) => {
	return ReactDOM.createPortal(children, document.getElementById('modal'));
};
