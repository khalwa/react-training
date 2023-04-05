import React from "react";
import "./Welcome.css";

type WelcomProperties = {
    name: string;
}

export function Welcome(properties: WelcomProperties) {
    return (
        <h1 className="welcome-header">Witaj {properties.name}!</h1>
    )
}