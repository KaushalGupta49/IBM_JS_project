function Clear() {
    document.getElementById("searchBox").value = '';
}

const searchBtn = document.getElementById("searchBtn");

function Search() {
    let searchValue = document.getElementById("searchBox").value;
    searchValue = searchValue.toLowerCase();

    if (searchValue == 'temple') {
        document.getElementById('lookOutSec').style.margin = "20px";
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => {
                document.getElementById('lookOutSec').innerHTML = json.temples.map((item) => {
                    return (
                        `<div class="border rounded p-3 w-1/3">
                            <img src=${item.imageUrl} alt=${item.name}/>
                            <h3>${item.name}</h3>
                            <h6>${item.description}</h6>
                        </div>`
                    )
                })
            });

    }
    else if (searchValue == 'beach') {
        document.getElementById('lookOutSec').style.margin = "20px";
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => {
                document.getElementById('lookOutSec').innerHTML = json.beaches.map((item) => {
                    return (
                        `<div class="border rounded p-3 w-1/3">
                            <img src=${item.imageUrl} alt=${item.name} />
                            <h3>${item.name}</h3>
                            <h6>${item.description}</h6>
                        </div>`
                    )
                })
            });
    }

    else if (searchValue == 'country') {
        document.getElementById('lookOutSec').style.margin = "20px";
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => {
                document.getElementById('lookOutSec').innerHTML = json.countries.map((items) => {
                    return (
                        `<div class="border rounded p-3 w-1/3 flex flex-col">
                            <h3 class="text-2xl">${items.name}</h3><br/>
                            ${items.cities.map((item) => {
                            return (
                                `<div class="border rounded p-3">
                                <img src=${item.imageUrl} alt=${item.name} class="w-full"/>
                                <h3 class="text-xl">${item.name}</h3>
                                <h6 class="text-sm">${item.description}</h6>
                            </div>`
                            )
                        })}
                        </div>`
                    )
                })
            });
    }

    else {
        document.getElementById('lookOutSec').innerHTML = "Not Found"
    }

}


