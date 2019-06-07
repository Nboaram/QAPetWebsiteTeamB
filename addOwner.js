
let user =  {
        id: 1,
        firstName: "George",
        lastName: "Franklin",
        address: "110 W. Liberty St.",
        city: "Madison",
        telephone: "6085551023",
        pets: [
            {
                id: 1,
                name: "Leo",
                birthDate: "2010/09/07",
                type: {
                    id: 1,
                    name: "cat"
                },
                owner: 1,
                visits: []
            }
        ]
    }


    function addUser(){
        submit();
        let s = JSON.stringify(user);
       fetchData("POST","/owners",s).then((req)=>{ 
    console.log(req.responseText);
    })};

function submit() {
    user.firstName= document.getElementById("firstName").value;
    user.lastName= document.getElementById("lastName").value;
    user.address= document.getElementById("address").value;
    user.city= document.getElementById("city").value;
    user.telephone= document.getElementById("telephone").value;
    user.pets.name= document.getElementById("petName").value;
    user.pets.birthDate= document.getElementById("dob").value;


}
