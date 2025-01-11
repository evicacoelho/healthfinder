import React, { useState } from "react";
import "./style.css";

export const Sidebar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Add logic to filter locations based on the search term
    };

    const handleSeeAllLocations = () => {
        // Add functionality to display all locations
        console.log("See All Locations clicked");
    };

    return (
    <div className="sidebar">
        <div className="sidebar-header">
        <h2>Provedores</h2>
        {/* Search Bar */}
        <input
            type="text"
            className="sidebar-search"
            placeholder="Busque provedores de saúde na sua região..."
            value={searchTerm}
            onChange={handleSearch}
        />
        </div>

        {/* Placeholder for Location List */}
        <div className="sidebar-content">
        <ul className="location-list">
            {/* Replace these placeholders with dynamic locations */}
            <li>Location 1</li>
            <li>Location 2</li>
            <li>Location 3</li>
        </ul>
        </div>

        {/* Fixed Button at the Bottom */}
        <button className="see-all-button" onClick={handleSeeAllLocations}>
            Mostrar todos os provedores de saúde
        </button>
    </div>
    );
};

export default Sidebar;
