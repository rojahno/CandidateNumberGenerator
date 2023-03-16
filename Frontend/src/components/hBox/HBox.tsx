import React from "react";
import "./HBox.css";

interface HBoxProps {
    children?: React.ReactNode;
}

export const HBox = (props: HBoxProps) => {
    return <div className="hBox">{props.children}</div>;
};
