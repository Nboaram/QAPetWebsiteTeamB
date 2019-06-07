let id;
let userData;

const setId = (numb) => id = numb.value;

function getPets() {
    fetchData("GET", "/owners/" + id, null).then((value) => {
        userData = JSON.parse(value.responseText);
        console.log(value);
    });
    console.log(userData);
    const { pets: pets } = userData;
    let tableOne = document.createElement("tbody");
    let header = tableOne.insertTHead();
    let length = Object.keys(pets).length;
    let keys = Object.keys(pets);
    for (let t = 0; t < length; t++) {
        let cell = header.insertRow(0);
        cell.innerHTML = keys(t);
    }
let rowNum = 1
    let rowTwo = tableOne.insertRow(rowNum);
    for (i in x) {
        let num = 0;
        let n = 0;
        let mainPet = pets[n]
        let cell = rowTwo.insertCell(num);
        if (num === 0) {
            cell.innerHTML = mainPet['name'];
        } else if (num === 1) {
            cell.innerHTML = mainPet['birthDate'];
        } else if (num === 2) {
            let typeName = mainPet['type'];
            cell.innerHTML = typeName['name'];
        } else if (num === 3) {
            let fullName = userData['firstName'] + userData['lastName']
            cell.innerHTML = fullName;
        } else {
            cell.innerHTML = mainPet['visits'];
             n = n + 1;
             rowNum = rowNum +1;
        }
        
            num = num + 1; 

        
        
    }
}

function fetchData(type, ext, sen) {
    let x = sen;

    return new Promise((resolve, reject) => {

        const req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req);
                    console.log("connected");
                } else {
                    reject("Failed");
                }
            }

        };

        req.open(type, "http://localhost:9092/petclinic/api" + ext);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(x);

    })
}