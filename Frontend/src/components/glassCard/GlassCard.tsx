import { useEffect, useRef, useState } from "react";
import { HBox } from "../hBox/HBox";
import { Modal } from "../modal/Modal";
import { VBox } from "../vBox/VBox";
import "./GlassCard.css";

export const GlassCard = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const [cNumber, setCNumber] = useState<any>();
    const [fetchedId, setFetchedId] = useState<string>("");

    const cNumberRef = useRef<HTMLParagraphElement>(null);

    async function getCandidateNumber() {
        let URL = "http://localhost:8080/api/get-number";
        let response = await fetch(URL, {
            method: "GET",
        });
        let data = await response.text();
        console.log(data);

        setFetchedId(data);
    }

    function resetCandidateNumber() {
        setFetchedId("");
        setCNumber("");
    }

    useEffect(() => {
        let iteration = 0;
        function scrambledName() {
            let newId = fetchedId
                .split("")
                .map((_letter: any, index: number) => {
                    if (index < iteration) {
                        return fetchedId[index];
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");
            iteration += 1 / 4;
            return newId;
        }

        function beginScrambling() {
            let interval = setInterval(() => {
                if (cNumberRef.current) {
                    let newName = scrambledName();
                    if (iteration === fetchedId.length) {
                        clearInterval(interval);
                    }
                    setCNumber(newName);
                }
            }, 30);
            return () => clearInterval(interval);
        }

        if (fetchedId) {
            beginScrambling();
        }
        // eslint-disable-next-line
    }, [fetchedId]);

    return (
        <div className="glass-card">
            <div className="margin">
                <VBox>
                    <h1
                        style={{
                            textAlign: "center",
                        }}>
                        Candidate number
                    </h1>
                    <div className="darker_background">
                        <p ref={cNumberRef} className="text">
                            {cNumber}
                        </p>
                    </div>
                    <HBox>
                        <button className="glass-button" onClick={getCandidateNumber}>
                            Generate
                        </button>
                        <button className="glass-button" onClick={resetCandidateNumber}>
                            Reset
                        </button>
                    </HBox>
                </VBox>
            </div>
        </div>
    );
};
