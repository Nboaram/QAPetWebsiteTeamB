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

        req.open(type, "http://localhost:9092/petclinic/api/" + ext);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(x);

    })

}





let id;
let firstName;
let lastName;
let address;

const setId = (num) => {id = number.value};

const setFirstName = (fName) => {firstName = fName.value};

const setLastName = (lName) => {lastName = lName.value};

const setAddress = (addr) => {address = addr.value};



function getOwner(){
    fetchData("GET", "owners/" + id, null).then((value) => {
    let ownerData = JSON.parse(value);
});
    let {owners} = ownerData;
}

function updateOwner(){
//let owner = JSON.stringify(input);
    fetchData('PUT', 'owners/' + id, owner);

if(id === {owners}){}

if (firstName !== null ){
   myObj = {name = firstName};

}
if (lastName !== null ){
   myObj = {name = firstName};

}
if (address !== null ){
   myObj = {name = firstName};

}
}



}


