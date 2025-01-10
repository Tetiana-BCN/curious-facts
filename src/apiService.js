async function getData() {
    const url = "https://uselessfacts.jsph.pl/api/v2/facts/random";

     const response = await fetch(url);
     if (!response.ok) {
       throw new Error(`Response status: ${response.status}`);
     }
    
     const json = await response.json();
     console.table(json);


     } catch (error) {
       console.error(error.message);
     }

getData(); 


