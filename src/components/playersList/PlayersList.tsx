import React from 'react';
import "./PlayersList.css";
import { PlayerDto } from "../data/players";


type PlayersListProperties = {
    players: PlayerDto[];
}

export function PlayersList(properties: PlayersListProperties) {
    const { players } = properties;
    
    let playersElement = [<tr>
        <td colSpan={5}>
            Brak zawodników do wyświetlenia.
        </td>
    </tr>];

    if (players.length > 0) {
        playersElement = players.map(p => {
            return (
                <tr key={p.name}>
                    <td>{p.name}</td>
                    <td>{p.position}</td>
                    <td>{p.club}</td>
                    <td>{p.value} mln.</td>
                    <td></td>
                </tr>
            )
        });
    }

    return (
        <table id="players">
            <thead>
                <tr>
                    <th>Zawodnik</th>
                    <th>Pozycja</th>
                    <th>Obecny klub</th>
                    <th>Wartość na rynku transferowym</th>
                    <th>Opcje</th>
                </tr>
            </thead>
            <tbody>
                {playersElement}
            </tbody>
        </table>
    )
}