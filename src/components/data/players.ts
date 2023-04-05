export type PlayerDto = {
    name: string;
    position: string;
    club: string;
    value: number;
}

const players: PlayerDto[] = [
    {
        name: "Robert Lewandowski",
        position: "Napastnik",
        club: "FC Barcelona",
        value: 40
    },
    {
        name: "Karol Świderski",
        position: "Napastnik",
        club: "Charlotte FC",
        value: 5
    },
    {
        name: "Piotr Zieliński",
        position: "Pomocnik",
        club: "Napoli",
        value: 40
    },
    {
        name: "Michał Skóraś",
        position: "Pomocnik",
        club: "Lech Poznań",
        value: 6
    },
    {
        name: "Matty Cash",
        position: "Obrońca",
        club: "Aston Villa",
        value: 22
    },
    {
        name: "Jakub Kiwior",
        position: "Obrońca",
        club: "Arsenal FC",
        value: 20
    },
    {
        name: "Wojciech Szczęsny",
        position: "Bramkarz",
        club: "Juventus",
        value: 13
    },
    {
        name: "Łukasz Skorupski",
        position: "Bramkarz",
        club: "Bologna FC 1909",
        value: 3
    },
    {
        name: "Grzegorz Sojka",
        position: "Bramkarz",
        club: "Borek FC",
        value: 0.001
    }    
]

export default players;