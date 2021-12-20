const jobOpenings = [
    {
        profileImage: "./first-image.jpg",
        role: "Frontend Developer",
        experience: "Senior",
        techStack: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
        status: ["Photosnap", "New", "Featured"],
        effectiveDate: "1d ago"
    },
    {
        profileImage: "./second-image.jpg",
        role: "Fullstack Developer",
        experience: "Midweight",
        techStack: ["Fullstack", "Backend", "Midweight", "Python", "React"],
        status: ["Manage", "New", "Featured"],
        effectiveDate: "1d ago"
    },
    {
        profileImage: "./fifth-image.jpg",
        role: "Frontend Developer",
        experience: "Junior",
        techStack: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
        status: ["Account", "New"],
        effectiveDate: "2d ago"
    },
    {
        profileImage: "./fourth-image.jpg",
        role: "Frontend Developer",
        experience: "Junior",
        techStack: ["Frontend", "Junior", "CSS", "JavaScript"],
        status: ["MyHome"],
        effectiveDate: "5d ago"
    },
    {
        profileImage: "./sixth-image.jpg",
        role: "Software Engineer",
        experience: "Midweight",
        techStack: ["Backend", "Midweight", "Javascript", "Sass", "Ruby"],
        status: ["Loop Studios"],
        effectiveDate: "1w ago"
    },
    {
        profileImage: "./seventh-image.jpg",
        role: "Fullstack",
        experience: "Fresher",
        techStack: ["Fullstack", "Fresher", "Javascript", "React", "HTML"],
        status: ["Wissen", "New", "Featured"],
        effectiveDate: "2d ago"
    },
    {
        profileImage: "./fifth-image.jpg",
        role: "Fullstack",
        experience: "Lead",
        techStack: ["Fullstack", "Lead", "Java", "Spring Boot", "React"],
        status: ["IT Solutions", "New"],
        effectiveDate: "1w ago"
    },
    {
        profileImage: "./second-image.jpg",
        role: "Software Engineer",
        experience: "Fresher",
        techStack: ["Backend", "Fresher", "Java"],
        status: ["Devs", "Featured"],
        effectiveDate: "5d ago"
    },
];

let output = [...jobOpenings];
let filterInput = document.getElementById('myValue');
filterInput.addEventListener('keyup', filterNames);

window.addEventListener("load", () => {

    let cardOne = document.getElementById("card-container");

    for (let i = 0; i < output.length; i++) {
        let parentDiv = document.createElement("div");
        parentDiv.className = "container";
        cardOne.appendChild(parentDiv);

        let leftSideContentDiv = document.createElement("div");
        leftSideContentDiv.className = "left-side";

        parentDiv.appendChild(leftSideContentDiv);

        let imgContainDiv = document.createElement("div");
        imgContainDiv.className = "profileImg";
        let profileImage = document.createElement("img");
        profileImage.setAttribute("src", output[i].profileImage);
        imgContainDiv.appendChild(profileImage);
        leftSideContentDiv.appendChild(imgContainDiv);

        let contentParentDiv = document.createElement("div");
        contentParentDiv.className = "contentParentDiv";
        leftSideContentDiv.appendChild(contentParentDiv);

        let statusParentDiv = document.createElement("div");
        // statusParentDiv.className = "statusParentDiv";
        statusParentDiv.className = "statusParentDiv";
        for (let j = 0; j < output[i].status.length; j++) {
            let statusDiv = document.createElement("div");
            let statusDivText = document.createTextNode(output[i].status[j]);
            statusParentDiv.appendChild(statusDiv);
            statusDiv.appendChild(statusDivText);
        }
        contentParentDiv.appendChild(statusParentDiv);

        let roleDiv = document.createElement("div");
        roleDiv.className = "roleDiv";
        let roleH3 = document.createElement("h3");
        let textH3 = document.createTextNode(output[i].experience + " " + output[i].role);
        roleH3.appendChild(textH3);
        roleDiv.appendChild(roleH3);
        contentParentDiv.appendChild(roleDiv);

        let effectiveDateContainDiv = document.createElement("div");
        let singleEffectiveDate = document.createElement("div");
        singleEffectiveDate.className = "singleEffectiveDate";
        let textSingleEffectiveDate = document.createTextNode(output[i].effectiveDate);
        singleEffectiveDate.appendChild(textSingleEffectiveDate);
        effectiveDateContainDiv.appendChild(singleEffectiveDate);
        contentParentDiv.appendChild(effectiveDateContainDiv);

        let rightSideDiv = document.createElement("div");
        rightSideDiv.className = "right-side";

        let techStackContainDiv = document.createElement("div");
        techStackContainDiv.className = "techStackContainDiv";
        techStackContainDiv.setAttribute("id", "techStackContainDivId");
        for (let k = 0; k < output[i].techStack.length; k++) {
            let singleTechStack = document.createElement("div");
            singleTechStack.className = "singleTechStack";
            singleTechStack.setAttribute("onclick", "getSelectedValue();");
            // singleTechStack.setAttribute("onclick", "filterNames();");
            let textSingleTechStack = document.createTextNode(output[i].techStack[k]);
            singleTechStack.appendChild(textSingleTechStack);
            techStackContainDiv.appendChild(singleTechStack);
        }
        rightSideDiv.appendChild(techStackContainDiv);

        parentDiv.appendChild(rightSideDiv);
    }
});

// Clear input
$("#erase").click(function () {
    $(this).prev().val("");
});

function filterNames() {
    let cardOne = document.getElementById("card-container");
    let filterValue = document.getElementById('myValue').value.toLowerCase();
    console.log(filterValue);

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

    let div = cardOne.querySelectorAll("div.container");

    for (let i = 0; i < div.length; i++) {
        let divOne = div[i].getElementsByTagName("div")[0];
        // console.log(divOne);
        let divRight = div[i].getElementsByTagName("div")[9];
        // console.log(divRight);

        if (divOne.innerHTML.toLowerCase().indexOf(filterValue) > -1 ||
            divRight.innerHTML.toLowerCase().indexOf(filterValue) > -1 || divOne.innerHTML.toLowerCase().indexOf(out[1]) > -1 || divOne.innerHTML.toLowerCase().indexOf(out[2]) > -1
            || divRight.innerHTML.toLowerCase().indexOf(out[1]) > -1 || divRight.innerHTML.toLowerCase().indexOf(out[2]) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }

        // let selectedTag = document.getElementById("list");
        let filterInput = document.getElementById('myValue');
        filterInput.addEventListener('change', selectedRoles);
        function selectedRoles() {
            let filterValue = document.getElementById('myValue').value.toLowerCase();
            // console.log(filterValue);
        }
    }
}

// Show selected value in input
function getSelectedValue() {
    var selectedValue = document.getElementById("list").value;

    // let singleTechStack = document.getElementById("techStackContainDivId").innerText;
    // console.log(singleTechStack);
    var _optionSelected = document.getElementById("myValue").value;
    // console.log(_optionSelected);
    // console.log(selectedValue);
    _optionSelected.length ? document.getElementById("myValue").value += " " + selectedValue : document.getElementById("myValue").value += selectedValue;
}




