function getById() {

    let text = document.getElementById("pet").value;

    sessionStorage.setItem("pet", text);

    console.log(sessionStorage.getItem("pet").value)

    fetchData("GET", "/pets/" + text, null).then((req) => {

        console.log(req.responseText);


    })
};
