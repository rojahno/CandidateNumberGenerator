import React from "react";
import "./Center.css";

interface CenterProps {
    children?: React.ReactNode;
}

export const Center = (props: CenterProps) => {
    return <div className="center">{props.children}</div>;
};
