let residentBtn = document.querySelector("button")

residentBtn.addEventListener("click", Alderann)
// const baseURL = `https://swapi.dev/api/`

function Alderann (){
    axios.get(`https://swapi.dev/api/planets/2`).then(
        (res)=> {
            for(let i = 0; i < res.data.residents.length; i++){
                axios.get(res.data.residents[i]).then((res) => {
                    let name = document.createElement('h2')
                    name.textContent = res.data.name
                    document.querySelector("body").appendChild(name)
                    // console.log(res.data.name)
                })
                // console.log(res.data.residents[i])
            }
        }
    )
    // console.log("Button Pressed")
}
// console.log("Hello World")