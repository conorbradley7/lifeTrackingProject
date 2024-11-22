import { useState, useEffect } from 'react';

// Define the type for the data you're expecting to fetch
// Replace `any` with a more specific type for your data structure if you know the response structure.
type APIResponse<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
};

const useAPI = <T>(url: string): APIResponse<T> => {
    const [data, setData] = useState<T | null>(null);  // The fetched data
    const [loading, setLoading] = useState<boolean>(true);  // Loading state
    const [error, setError] = useState<string | null>(null);  // Error state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result: T = await response.json();  // Expecting a generic type `T` for the response data
                setData(result);
            } catch (err: unknown) {
                // Type guard to check if `err` is an instance of Error
                if (err instanceof Error) {
                    setError(err.message || 'An unknown error occurred');
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useAPI;