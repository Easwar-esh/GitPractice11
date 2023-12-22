const url = 'https://api.nationalize.io?name=nathaniel';

async function get(){
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

get();