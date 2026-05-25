const baseURL="https://api.weatherapi.com/v1/current.json?key=41d909b5a97148eabb8154236261505&q=London&aqi=yes"

export const gwdfc =async(city) =>{


    const response=await fetch('${baseURL}&q=${city}&aqi=yes')

    return await response.json();

};