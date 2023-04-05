import React from "react";
import "./addPlayer.css";

export function AddPlayer() {
    return (
        <form className="form-inline">
            <label htmlFor="name">Imię i nazwisko:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="club">Klub:</label>
            <input type="text" id="club" name="club" />
            <label htmlFor="position">Pozycja:</label>
            <select id="position" name="position">
                <option value="Napastnik">Napastnik</option>
                <option value="Pomocnik">Pomocnik</option>
                <option value="Obrońca">Obrońca</option>
            </select>
            <label htmlFor="value">Wartość:</label>
            <input type="number" id="value" name="value" min={0} />
            <button type="submit">Dodaj</button>
        </form>
    )
}