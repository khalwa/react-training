import React from 'react';
import "./PlayersList.css";

export function PlayersList() {
    return (
        <table id="players">
            <tr>
                <th>Zawodnik</th>
                <th>Pozycja</th>
                <th>Obecny klub</th>
                <th>Wartość na rynku transferowym</th>
                <th>Opcje</th>
            </tr>
            <tr>
                <td colSpan={5}>
                    Brak zawodników do wyświetlenia.
                </td>
            </tr>
        </table>
    )
}