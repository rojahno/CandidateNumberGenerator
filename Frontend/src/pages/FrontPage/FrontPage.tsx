import "./FrontPage.css";
import { GlassCard } from "../../components/glassCard/GlassCard";
import { Center } from "../../components/center/Center";
import settings from "../../assets/settings.svg";
import { Modal } from "../../components/modal/Modal";
import { useState } from "react";
import { VBox } from "../../components/vBox/VBox";

export const FrontPage = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };
    function generateCandidateNumber() {
        let URL = "http://localhost:8080/api/generete";
        fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    }
    return (
        <div className="background">
            <Center>
                <GlassCard />
                <img className="settings" src={settings} onClick={toggle}></img>
                <Modal onCancel={toggle} onOk={toggle} visible={open}>
                    <VBox>
                        <button className="styled-button" onClick={generateCandidateNumber}>
                            Generate Candidate Numbers
                        </button>
                        <button className="styled-button" onClick={toggle}>
                            Reset used candidate numbers
                        </button>
                        <button className="styled-button">Fun</button>
                    </VBox>
                </Modal>
            </Center>
        </div>
    );
};
