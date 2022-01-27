import breakingbad from '../media/BreakingBad.jpg'
import turnos from '../media/turnos.jpg'
import presupuesto from '../media/presupuesto.jpg'
import seguro from '../media/seguro.jpg'
import clima from '../media/clima.jpg'
import gif from '../media/gif.jpg'
import heroes from '../media/heroes.jpg'
import starwars from '../media/starwars.jpg'
import calendar from '../media/calendar.jpg'


 const Projects =[
    {
        "id":"1",
        "title": "planets Star Wars",
        "info": "app con React integrándola con Redux, usando el API REST de Star Wars. Lista todos los planetas en una lista con un paginado de a 10 planetas, con la funcionalidad de agregar y/o quitar planetas favoritos ",
        "imagen":starwars,
        "url": "https://starwars-planets-zapata.netlify.app/",
        "github": "https://github.com/Ezequielz/Star-Wars-Challenge",
        "tecnologias": "js"
    },
    {
        "id":"2",
        "title": "calendario",
        "info": " calendario usando el stack MERN (Mongo, Express, React , Node), con sistema de login y proteccion de rutas aplicando tokens",
        "imagen":calendar,
        "url": "https://calendarapp-zapata.netlify.app/",
        "github": "https://github.com/Ezequielz/mern-calendar-frontend",
        "tecnologias": "js"
    },
    {
        "id":"3",
        "title": "Presupuesto semanal",
        "info": "Este proyecto tiene el fin de calcular en base a un monto inicial de presupuesto, los gastos que una persona tiene y ver el restante que le queda. marcando con colores diferentes segun el porcentaje de dinero disponible",
        "imagen":presupuesto,
        "url": "https://presupuesto-zapata.netlify.app/",
        "github": "https://github.com/Ezequielz/Presupuesto-React",
        "tecnologias": "js"
    },
    {
        "id":"4",
        "title": "Cotizador de seguros",
        "info": "Este proyecto tiene el fin de cotizar el seguro al usuario segun el modelo del auto, marca(región) y plan que quiera elegir. Varian los precios tomando en cuenta todos los puntos anteriores. ",
        "imagen":seguro,
        "url": "https://cotizadorseguros-zapata.netlify.app/",
        "github": "https://github.com/Ezequielz/cotizador-React",
        "tecnologias": "js"
    },
    {
        "id":"5",
        "title": "Clima",
        "info": "Este proyecto tiene el fin de obtener el clima de una ciudad a traves de una API, donde al apretar el boton obtener clima nos muestra la temperatura actual con su minima y maxima de ese dia de la ciudad elegida representada en grados celcius",
        "imagen":clima,
        "url": "https://clima-zapata.netlify.app/",
        "github": "https://github.com/Ezequielz/clima-React",
        "tecnologias": "js"
    },
    {
        "id":"6",
        "title": "Buscador de Gifs",
        "info": "Una pequeña app hecha en React con Hooks para buscar y mostrar gif animados",
        "imagen":gif,
        "url": "https://ezequielz.github.io/react-gifExpertApp/",
        "github": "https://github.com/Ezequielz/react-gifExpertApp",
        "tecnologias": "js"
    },
    {
        "id":"7",
        "title": "Busqueda de heroes",
        "info": "es una app de practica de uso de hooks, ruteo y proteccion de rutas testing busca heroes segun publisher y brinda la info. simula un login con proteccion de rutas.",
        "imagen":heroes,
        "url": "https://heroesapp-zapata.netlify.app/marvel",
        "github": "https://github.com/Ezequielz/HeroesApp",
        "tecnologias": "js"
    },
    {
        "id":"8",
        "title": "Frases de Breaking Bad",
        "info": "Este proyecto tiene el fin de obtener frases de breaking bad a traves de una API, donde al apretar el boton de obtener frase hace la consulta en la api y me trae otra frase con su autor",
        "imagen": breakingbad,
        "url": "https://frasesbb-zapata.netlify.app/",
        "github": "https://github.com/Ezequielz/FrasesBB-React",
        "tecnologias": "react"
    },
    {
        "id":"9",
        "title": "Turnos veterinaria",
        "info": "Este proyecto tiene el fin de organizar los turnos en una veterinaria.",
        "imagen":turnos,
        "url": "https://turnos-zapata.netlify.app/",
        "github": "https://github.com/Ezequielz/Turnos-React",
        "tecnologias": "js"
    },


]

export default Projects