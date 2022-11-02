const fetchdata = async () => {

  const count = document.getElementById('coun-name').value;

  if(count.length == 0)
  {
    document.querySelector('.res').classList.toggle('hidden');
  }
  else
  {
    const data = await fetch("https://restcountries.com/v3.1/name/"
  +count+"?fullText=true",
  {
    headers:{
        Accept:'application/json'
            }
    });
    const res = await data.json();

    if(res.message == "Not Found")
    {
      alert('Enter a Valid Country');
    }
    else
    {
      document.querySelector('.result').classList.toggle('hidden');
    }
        console.log(res);   
        const area  = res[0].area;
        const flags = res[0].flags.png;
        const capital = Object.values(res[0].capital).toString();
        const currency = res[0].currencies[Object.keys(res[0].currencies)].name;
        const symbol = res[0].currencies[Object.keys(res[0].currencies)].symbol;
        const timezone = Object.values(res[0].timezones).toString();
        const lang = Object.values(res[0].languages).toString();
        const population = res[0].population;
        const continent = Object.values(res[0].continents).toString();
        
        // console.log(area,flags,capital,currency,symbol,timezone,lang,population,continent);
        // assigning values to HTML 

        document.title = count;
        document.getElementById('ar').innerHTML = area;
        document.getElementById('flg').src = flags;
        document.getElementById('cap').innerHTML = capital;
        document.getElementById('curr').innerHTML = currency+' '+symbol;
        document.getElementById('tz').innerHTML = timezone;
        document.getElementById('lang').innerHTML = lang;
        document.getElementById('pop').innerHTML = population;
        document.getElementById('con').innerHTML = continent;
  }
}