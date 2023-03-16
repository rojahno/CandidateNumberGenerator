import React from "react";
import "./VBox.css";

interface VBoxProps {
    children?: React.ReactNode;
}
export const VBox = (props: VBoxProps) => {
    return <div className="vBox">{props.children}</div>;
};
