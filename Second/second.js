const continentArray = [
    {
        continent: "Africa",
        countryName: "Algeria",
        capital: "Algiers",
        language: "Arabic",
        flag: "./Flags/Africa/Flag-Algeria.jpg"
    },
    {
        continent: "Africa",
        countryName: "Egypt",
        capital: "Cairo",
        language: "Arabic",
        flag: "./Flags/Africa/Flag-Egypt.jpg"
    },
    {
        continent: "Africa",
        countryName: "Libya",
        capital: "Tripoli",
        language: "Arabic",
        flag: "./Flags/Africa/Flag-Libya.png"
    },
    {
        continent: "Africa",
        countryName: "Sudan",
        capital: "Khartoum",
        language: "Arabic",
        flag: "./Flags/Africa/Flag-Sudan.jpg"
    },
    {
        continent: "Africa",
        countryName: "Nigeria",
        capital: "Abuja",
        language: "English",
        flag: "./Flags/Africa/Flag-Nigeria.jpg"
    },
    {
        continent: "Asia",
        countryName: "India",
        capital: "New Delhi",
        language: "Hindi, Urdu, English",
        flag: "./Flags/Asia/Flag-India.jpg"
    },
    {
        continent: "Asia",
        countryName: "China",
        capital: "Beijing",
        language: "Mandarin",
        flag: "./Flags/Asia/Flag-China.jpg"
    },
    {
        continent: "Asia",
        countryName: "Nepal",
        capital: "Kathmandu",
        language: "Nepali",
        flag: "./Flags/Asia/Flag-Nepal.png"
    },
    {
        continent: "Asia",
        countryName: "Sri Lanka",
        capital: "Colombo",
        language: "Sinhala",
        flag: "./Flags/Asia/Flag-SriLanka.jpg"
    },
    {
        continent: "Asia",
        countryName: "Maldives",
        capital: "Male",
        language: "Maldivian",
        flag: "./Flags/Asia/Flag-Maldives.png"
    },

    {
        continent: "Europe",
        countryName: "Finland",
        capital: "Helsinki",
        language: "Finnish",
        flag: "./Flags/Europe/Flag-Finland.jpg"
    },
    {
        continent: "Europe",
        countryName: "Ireland",
        capital: "Dublin",
        language: "Irish",
        flag: "./Flags/Europe/Flag-Ireland.jpg"
    },
    {
        continent: "Europe",
        countryName: "Sweden",
        capital: "Stockholm",
        language: "English",
        flag: "./Flags/Europe/Flag-Sweden.png"
    },
    {
        continent: "Europe",
        countryName: "United Kingdom",
        capital: "London",
        language: "English",
        flag: "./Flags/Europe/Flag-UK.jpg"
    },
    {
        continent: "Europe",
        countryName: "Wales",
        capital: "Cardiff",
        language: "English",
        flag: "./Flags/Europe/Flag-Wales.png"
    },

    {
        continent: "America",
        countryName: "Canada",
        capital: "Ottawa-Toronto",
        language: "English",
        flag: "./Flags/America/Flag-Canada.jpg"
    },
    {
        continent: "America",
        countryName: "Greenland",
        capital: "Nuuk",
        language: "English",
        flag: "./Flags/America/Flag-Greenland.png"
    },
    {
        continent: "America",
        countryName: "Mexico",
        capital: "Mexico(City)",
        language: "Mexican",
        flag: "./Flags/America/Flag-Mexico.jpg"
    },
    {
        continent: "America",
        countryName: "USA",
        capital: "Washington-New York",
        language: "English",
        flag: "./Flags/America/Flag-USA.jpg"
    },
    {
        continent: "America",
        countryName: "Bermuda",
        capital: "Hamilton",
        language: "English",
        flag: "./Flags/America/Flag-Bermuda.png"
    }
]

window.addEventListener("load", () => {
    let parentContainerDiv = document.getElementById("parentContainerDiv");
    for (let i = 0; i < continentArray.length; i++) {
        let singleContainerDiv = document.createElement("div");
        singleContainerDiv.className = "singleContainerDiv";
        let imageContainDiv = document.createElement("div");
        let contentContainDiv = document.createElement("div");
        contentContainDiv.className = "contentContainDiv";
        parentContainerDiv.appendChild(singleContainerDiv);

        singleContainerDiv.appendChild(imageContainDiv);
        singleContainerDiv.appendChild(contentContainDiv);

        let flagImage = document.createElement("img");
        flagImage.className = "flagImage";
        flagImage.setAttribute("src", continentArray[i].flag);
        imageContainDiv.appendChild(flagImage);

        let h3Element = document.createElement("h3");
        contentContainDiv.appendChild(h3Element);
        let h3Text = document.createTextNode(continentArray[i].countryName);
        h3Element.appendChild(h3Text);

        let h5Element3 = document.createElement("h5");
        h5Element3.className = "h5Element3";
        contentContainDiv.appendChild(h5Element3);
        let h5Text3 = document.createTextNode("Region: " + continentArray[i].continent);
        h5Element3.appendChild(h5Text3);

        let h5Element1 = document.createElement("h5");
        h5Element1.className = "h5Element1";
        contentContainDiv.appendChild(h5Element1);
        let h5Text1 = document.createTextNode("Capital: " + continentArray[i].capital);
        h5Element1.appendChild(h5Text1);

        let h5Element2 = document.createElement("h5");
        h5Element2.className = "h5Element2";
        contentContainDiv.appendChild(h5Element2);
        let h5Text2 = document.createTextNode("Language: " + continentArray[i].language);
        h5Element2.appendChild(h5Text2);
    }
})

$("#erase").click(function () {
    $(this).prev().val("");
});

function filterNames() {
    // console.log("hi");
    let cardOne = document.getElementById("parentContainerDiv");
    let filterValue = document.getElementById('myValue').value.toLowerCase();
    console.log(filterValue + "hello");
    let filtArray = [];
    if (filterValue.length != 0) {
        filtArray.push(filterValue);
    }
    let out = [];
    if (filtArray.length > 0) {
        console.log(filtArray[0].split(" "));
        out = [...filtArray[0].split(" ")];
    }
    console.log(out[0]);
    let div = cardOne.querySelectorAll("div.singleContainerDiv");

    for (let i = 0; i < div.length; i++) {
        let divOne = div[i].getElementsByTagName("div")[1];
        if (filterValue == "") {
            div[i].style.display = "";
        }
        if (filtArray.length > 0) {
            if (divOne.innerHTML.toLowerCase().indexOf(out[0]) > -1 || divOne.innerHTML.toLowerCase().indexOf(out[1]) > -1 || divOne.innerHTML.toLowerCase().indexOf(out[2]) > -1) {
                div[i].style.display = "";
            } else {
                div[i].style.display = "none";
            }
        }

        // let selectedTag = document.getElementById("list");
        let filterInput = document.getElementById('myValue');
        filterInput.addEventListener('change', selectedRoles);
        function selectedRoles() {
            let filterValue = document.getElementById('myValue').value.toLowerCase();
            console.log(filterValue);
        }
    }
}

function getSelectedValue() {
    let selectedValue = document.getElementById("list").value;
    var _optionSelected = document.getElementById("myValue").value;
    // console.log(_optionSelected);
    console.log(selectedValue);
    _optionSelected.length ? document.getElementById("myValue").value += " " + selectedValue : document.getElementById("myValue").value += selectedValue;
}