const crearCardCafe = (cafe)=>{
    
    console.log(cafe)

    const contenedor = document.getElementById('contenedor')
    

    const card = document.createElement('div')
    card.classList.add('card')

    // creamos el tarjetaHeader
    const tarjetaHeader = document.createElement('div')
    tarjetaHeader.classList.add('tarjetaHeader')
    tarjetaHeader.style.backgroundImage = `url(${cafe.image})`  // agregamos un fondo

    // creamos el popular
    if(cafe.popular){
        const popular = document.createElement('div')
        popular.innerText= cafe.popular?'Popular':''
        cafe.popular?popular.classList.add('popular'):''
    tarjetaHeader.appendChild(popular)

    }
    
    // creamos el tarjetaFooter
    const tarjetaFooter = document.createElement('div')
    tarjetaFooter.classList.add('tarjetaFooter')

    // creamos el description
    const description = document.createElement('div')
    description.classList.add('description')
    const productName = document.createElement('h3')
    productName.classList.add('productName')
    productName.innerText = cafe.name
    const price = document.createElement('div')
    price.classList.add('price')
    price.innerText = cafe.price


    // creamos el start
    const start = document.createElement('div')
    start.classList.add('start')
    const points = document.createElement('div')
    points.classList.add('points')
    const imgstart = document.createElement('div')
    imgstart.classList.add(cafe.rating!=null?'imgstartFill':'imgstart')
    const rating = document.createElement('div')
    rating.classList.add('rating')
    rating.innerText = cafe.rating
    const votes = document.createElement('div')
    votes.classList.add('votes')
    votes.innerText = cafe.votes!=0?`(${cafe.votes} votes)`:'No ratings'
    const soldOut = document.createElement('div')
    soldOut.classList.add('soldOut')
    soldOut.innerText = cafe.available?'':'Sold out'


    contenedor.appendChild(card)

    // tarjetaHeader
    card.appendChild(tarjetaHeader)
    // tarjetaHeader.appendChild(popular)

    // tarjetaFooter
    card.appendChild(tarjetaFooter)
    tarjetaFooter.appendChild(description)
    description.appendChild(productName)
    description.appendChild(price)

    tarjetaFooter.appendChild(start)
    start.appendChild(points)
    points.appendChild(imgstart)
    points.appendChild(rating)
    points.appendChild(votes)
    start.appendChild(soldOut)

}


(async()=>{
    const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json')
    const arregloCafes = await response.json()

    arregloCafes.forEach(cafe => {
        crearCardCafe(cafe)
    });

})()

