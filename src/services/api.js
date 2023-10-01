const url = "https://politibiler-c6e73455ac85.herokuapp.com"
export const fetchData = async () => {
    try {
    // Bruk fetch for å hente data fra API
    const response = await fetch(url);
    
    
    return response.json();

    } catch (error) {
    console.error('Error fetching data:', error);
    throw error 
    }
};




