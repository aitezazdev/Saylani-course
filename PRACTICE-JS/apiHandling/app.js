const fetchData = async () => {
    let response = await fetch('https://official-joke-api.appspot.com/random_joke');
    let data = await response.json();
    console.log(data);
    
    console.log(data.id);
    console.log(data.type);
    console.log(data.setup);
    console.log(data.punchline);
}

fetchData();