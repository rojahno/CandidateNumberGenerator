import "./FrontPage.css";
import { GlassCard } from "../../components/glassCard/GlassCard";
import { Center } from "../../components/center/Center";
import settings from "../../assets/settings.svg";

export const FrontPage = () => {
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
                <img className="settings" src={settings} onClick={generateCandidateNumber}></img>
            </Center>
        </div>
    );
};
