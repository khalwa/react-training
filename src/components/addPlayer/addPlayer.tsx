import React, { useState } from "react";
import "./addPlayer.css";

export function AddPlayer() {
    const [name, setName] = useState<string>("");
    const [club, setClub] = useState<string>("");
    const [position, setPosition] = useState<string>("Napastnik");
    const [value, setValue] = useState<number>(0);

    const shouldAddButtonBeDisabled = () => {
        if(!name || !club || !position || !value) {
            return true;
        }
        return false;
    }

    return (
        <form className="form-inline">
            <label htmlFor="name">Imię i nazwisko:</label>
            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="club">Klub:</label>
            <input type="text" id="club" name="club" value={club} onChange={e => setClub(e.target.value)} />
            <label htmlFor="position">Pozycja:</label>
            <select id="position" name="position" value={position} onChange={e => setPosition(e.target.value)}>
                <option value="Napastnik">Napastnik</option>
                <option value="Pomocnik">Pomocnik</option>
                <option value="Obrońca">Obrońca</option>
            </select>
            <label htmlFor="value">Wartość:</label>
            <input type="number" id="value" name="value" min={0} value={value} onChange={e => setValue(Number(e.target.value))} />
            <button type="submit" disabled={shouldAddButtonBeDisabled()}>Dodaj</button>
        </form>
    )
}