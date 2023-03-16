import { useEffect, useRef, useState } from "react";
import "./Modal.css";

// const ModalButton = styled.button`
//     font-size: 1rem;
//     margin: 0.5em;
//     box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(111, 117, 133, 0.14);
//     transition: transform ease-in 0.1s;
//     border-style: none;
//     padding: 0.3em 1.3em;
//     text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
//     box-shadow: 0 2px #0000000b;
//     transition: all 0.3s;
// `;

interface ModalProps {
    visible?: boolean;
    onOk: () => any;
    onCancel: () => any;
    children?: any;
    height?: string;
    width?: string;
    maxWidth?: string;
}

export const Modal = (props: ModalProps) => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>();

    useOnClickOutside(ref, () => closeOnClick());

    const closeOnClick = () => {
        if (isOpen) {
            props.onCancel();
        }
    };

    useEffect(() => {
        const setVisible = () => {
            setIsOpen(props.visible);
        };

        setVisible();
    });

    return (
        <div className="modal-background" style={{ display: isOpen ? "flex" : "none" }}>
            <div className="modal-container" ref={ref}>
                <h3 className="modal-header">Settings</h3>
                <div className="modal-content">{props.children}</div>
                <div className="modal-footer">
                    <button className="cancel-button" onClick={props.onCancel}>
                        Cancel{" "}
                    </button>
                    <button className="ok-button" onClick={props.onOk}>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};

// Hook
function useOnClickOutside(ref: any, handleOutsideClick: (event: Event) => any) {
    useEffect(() => {
        const listener = (event: Event) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handleOutsideClick(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handleOutsideClick]);
}
