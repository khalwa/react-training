import React, { useState } from "react";
import { AddPlayer } from "../addPlayer/AddPlayer";
import players, { PlayerDto } from "../data/players";
import { PlayersList } from "../playersList/PlayersList";

export function PlayersManagement() {
    const [playersList, setPlayersList] = useState<PlayerDto[]>(players);

    const onPlayerAddedHandler = (playerDto: PlayerDto) => {
        setPlayersList([
            ...playersList,
            {
                name: playerDto.name,
                club: playerDto.club,
                position: playerDto.position,
                value: playerDto.value
            }
        ]);
    }

    const onPlayerRemovedHandler = (name: string) => {
        setPlayersList(
            [
                ...playersList.filter(p => p.name !== name)
            ]
        );
    }

    return (
        <>
            <AddPlayer onPlayerAdded={onPlayerAddedHandler}/>
            <PlayersList players={playersList} onPlayerRemoved={onPlayerRemovedHandler} />
        </>
    )
}