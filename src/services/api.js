const url = "https://politibiler-c6e73455ac85.herokuapp.com"

export const fetchData = async () => {
    try {
        const response = await fetch(url);
    
        return response.json();

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error 
    }
};



export const MutateApiMockup = (newRowEntry) => {
    console.log("UPDATING BACKEND");
    console.log("NEW VALUE:", newRowEntry);
    return newRowEntry
}
