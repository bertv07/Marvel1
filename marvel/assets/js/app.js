const public_key = '64e513067bfe65c01dbbda93e79de093'
const private_key = 'cfe53a1d68fc564f42e9569c2090336c5b8cf088'
const characate_url = "https://gateway.marvel.com/v1/public/characters"
const comics_url = "https://gateway.marvel.com/v1/public/comics"
const creadores_url = "https://gateway.marvel.com/v1/public/creators"
const eventos_url = "https://gateway.marvel.com/v1/public/events"
const series_url = "https://gateway.marvel.com/v1/public/series"
const stories_url = "https://gateway.marvel.com/v1/public/stories"
var offset = 0;

//registro-inicio
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('.card-login');
    const registerForm = document.querySelector('.card-registre');
    const showRegisterButton = document.getElementById('registre');
    const backToLoginButton = document.getElementById('backToLogin');

    showRegisterButton.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    backToLoginButton.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});


const getData = async (url, offset) => {
    const timestamp = Math.floor(Date.now() / 1000)
    const hash = md5(timestamp + private_key + public_key)

    const response = await fetch(`${url}?ts=${timestamp}&apikey=${public_key}&hash=${hash}&offset=${offset}`);
    const data = response.json();
    return data;
};



function addData(data) {
    const dataContainer = document.getElementById('data')
    dataContainer.innerHTML = "";

    data.forEach(item => {
        const description = item.description ;
        dataContainer.innerHTML += `
        <div class="item-container">
            <h2>${item.name || item.title || item.firstName || "No hay titulo" }</h2>
            <div class="text">
                <p>
                    ${description || item.variantDescription || "No hay descripción" }
                </p>
            </div>
            <img src="${item.thumbnail.path + "." + item.thumbnail.extension}" class="hover-image">
        </div>
        `;
    });
    
}

const comics = document.getElementById('comics')
comics.addEventListener('click', () => {
    getData(comics_url, offset)
    .then(respone => {
        addData(respone.data.results)
        console.log(respone.data.results)


        //botones 
        nextBton.addEventListener('click', () =>{
            offset +=20;
        getData(comics_url, offset)
        .then(response => {
            console.log(response.data.results)
            addData(response.data.results);
        })
        window.screenTop({top: 0, behavior:"smooth"})
    })

        prevBton.addEventListener('click', () =>{
            if(offset >= 20){
                offset -=20;
            }
            getData(comics_url, offset)
            .then(response => {
                console.log(response.data.results)
                addData(response.data.results);
            })
        })
        
    })
})


const creadores = document.getElementById('creadores')
creadores.addEventListener('click', () => {
    getData(creadores_url, offset)
    .then(respone => {
        addData(respone.data.results)
        console.log(respone.data.results)


        //botones 
        nextBton.addEventListener('click', () =>{
            offset +=20;
        getData(creadores_url, offset)
        .then(response => {
            console.log(response.data.results)
            addData(response.data.results);
        })    })

        prevBton.addEventListener('click', () =>{
            if(offset >= 20){
                offset -=20;
            }
            getData(creadores_url, offset)
            .then(response => {
                console.log(response.data.results)
                addData(response.data.results);
            })
        })
        
    })
})


const eventos = document.getElementById('eventos')
eventos.addEventListener('click', () => {
    getData(eventos_url, offset)
    .then(respone => {
        addData(respone.data.results)
        console.log(respone.data.results)


        //botones 
        nextBton.addEventListener('click', () =>{
            offset +=20;
        getData(eventos_url, offset)
        .then(response => {
            console.log(response.data.results)
            addData(response.data.results);
        })    })

        prevBton.addEventListener('click', () =>{
            if(offset >= 20){
                offset -=20;
            }
            getData(eventos_url, offset)
            .then(response => {
                console.log(response.data.results)
                addData(response.data.results);
            })
        })
        
    })
})


const series = document.getElementById('series')
series.addEventListener('click', () => {
    getData(series_url, offset)
    .then(respone => {
        addData(respone.data.results)
        console.log(respone.data.results)


        //botones 
        nextBton.addEventListener('click', () =>{
            offset +=20;
        getData(series_url, offset)
        .then(response => {
            console.log(response.data.results)
            addData(response.data.results);
        })    })

        prevBton.addEventListener('click', () =>{
            if(offset >= 20){
                offset -=20;
            }
            getData(series_url, offset)
            .then(response => {
                console.log(response.data.results)
                addData(response.data.results);
            })
        })
        
    })
})

const stories = document.getElementById('historias')
stories.addEventListener('click', () => {
    getData(stories_url, offset)
    .then(respone => {
        addData(respone.data.results)
        console.log(respone.data.results)


        //botones 
        nextBton.addEventListener('click', () =>{
            offset +=20;
        getData(stories_url, offset)
        .then(response => {
            console.log(response.data.results)
            addData(response.data.results);
        })    })

        prevBton.addEventListener('click', () =>{
            if(offset >= 20){
                offset -=20;
            }
            getData(stories_url, offset)
            .then(response => {
                console.log(response.data.results)
                addData(response.data.results);
            })
        })
        
    })
})





const prevBton = document.getElementById('prev');
const nextBton = document.getElementById('next');

nextBton.addEventListener('click', () =>{
        offset +=20;
    getData(characate_url, offset)
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results);
    })
    window.screenTop({top: 0, behavior:"smooth"})
})
prevBton.addEventListener('click', () =>{
    if(offset >= 20){
        offset -=20;
    }
    getData(characate_url, offset)
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results);
    })
})

getData(characate_url)
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results);
    })

//tarea arreglar los estilos
//barra de navegacion: personajes, comics, creadorres, eventos, series, historias



//para hacer los botones
const buttoajas = document.getElementById
buttoajas.onclick = getData('la url')
    .then 