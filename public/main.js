
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const submitbtn = document.getElementById('submitbtn');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const visibility = document.getElementsByClassName('data_hide');
const datahide = document.querySelector('.middle_layer')
const getinfo = async(event) => {
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerHTML = `please enter the city name`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=1fe55f27829afc97ea60a0f3b1978686`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            visibility.innerHTML = "<style='visibility: visible !important;'>"
            temp_real_val.innerText = arrdata[0].main.temp;
            city_name.innerHTML = `${arrdata[0].name},${arrdata[0].sys.country}`;

            const tempmood = arrdata[0].weather[0].description;
            if(tempmood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempmood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;' ></i>";
            }
            else if(tempmood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;' ></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;' ></i>";
            }
            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerHTML = `please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener('click', getinfo);

