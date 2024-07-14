import React, { useState } from 'react';
import axios from 'axios';

interface SearchFormProps {
    // Callback function to update parent with fetched data
    onDataUpdate: (data: any) => void; 
}

function SearchForm({onDataUpdate}: SearchFormProps) {
    const [query, setQuery] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.get(`/api/data?query=${query}`);
            onDataUpdate(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Search:</label>
            <input
                type="text"
                id="searchInput"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
