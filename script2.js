const fetch = require ('node-fetch');

const getPeoplePromise=fetch=>{
    return fetch('http://swapi.py4e.com/api/people/')
    .then(response=>response.json())
    .then(data=>{
        return{
            count:data.count,
            result:data.results
        }        
    })
}

const getPeople=async (fetch)=>{
    const getRequest= await fetch('http://swapi.py4e.com/api/people/');
    const data= await getRequest.json();
    return{
        count:data.count,
        result:data.results
    } 
}

module.exports={
    getPeople,
    getPeoplePromise
}