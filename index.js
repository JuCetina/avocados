/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const app = document.getElementById('app');
app.className = 'flex flex-wrap justify-center';

const base_url = 'https://platzi-avo.vercel.app/';

//API de internacionalización del navegador Intl
const formatPrice = (price) => {
    
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    
    return newPrice;
}

const fetchData = async () => {
    const respuesta = await fetch(`${base_url}api/avo`);
    const datos = await respuesta.json();
    
    let todosItems = [];
    datos.data.forEach(item => {
        const imagen = document.createElement('img');
        imagen.src = `${base_url}${item.image}`;
        imagen.className = 'rounded-full mb-4'

        const titulo = document.createElement('h2');
        titulo.textContent = item.name;
        titulo.className = 'text-lg text-red-700 font-bold';

        const precio = document.createElement('p');
        precio.textContent = formatPrice(item.price);
        precio.className = 'text-sm';

        const container = document.createElement('div');
        
        container.append(imagen, titulo, precio);
        container.className = 'flex flex-col overflow-hidden bg-green-200 rounded-lg sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-1 p-2'
        
        todosItems.push(container);
    });
    
    app.append(...todosItems);
}

fetchData();
