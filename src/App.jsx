import './App.css'
import Testimonio from "./components/Testimonio.jsx";

function App() {
    const persons = [{

        id: 0,
        name: "Paco",
        country: "Suecia",
        profession: "Ingeniero Informático experto en CSS",
        opinion: "React ha revolucionado mi forma de construir interfaces de usuario. " +
            "La capacidad de crear componentes reutilizables me permite mantener un código limpio y organizado. " +
            "Además, la gestión del estado con hooks ha simplificado mucho el proceso. Definitivamente, es una herramienta poderosa para proyectos a gran escala.",
        imageUrl: './639839316.jpg',
        description:"Chico joven con un esmoquin",
        imageSize: 400,
    },
        {
            id: 1,
            name: "Paca",
            country: "India",
            profession: "Ingeniera Informática principiante en React",
            opinion: "Al principio, me costó un poco adaptarme a React, especialmente con conceptos como el virtual DOM y el flujo unidireccional de datos. " +
                "Sin embargo, una vez que comprendí cómo funcionan los hooks y el contexto, se volvió mucho más intuitivo. " +
                "La comunidad ofrece muchos recursos, lo que facilita el aprendizaje.",
            description:"Chica con una cámara de fotos apuntando a la cámara",
            imageUrl:'/OIP (1).jpg',
            imageSize: 400,
        },
        {
            id: 2,
            name: "Paqui",
            country: "Alemania",
            profession: "Desarrolladora de Aplicaciones aprendiendo React",
            opinion: "Lo que más valoro de React es su gran comunidad y el rico ecosistema que lo rodea." +
                " Hay librerías para casi cualquier necesidad, desde manejo de formularios hasta gestión del estado global. " +
                "Esto me ha permitido desarrollar aplicaciones más rápido y con menos errores, " +
                "ya que puedo aprovechar herramientas ya probadas.",
            description:"Chica sonriendo muy feliz",
            imageUrl:"/OIP.jpg",
            imageSize: 400,
        },
        {
            id: 3,
            name: "Francisco",
            country: "España",
            profession: "Aprendió por su cuenta React",
            opinion: "Para proyectos pequeños, a veces siento que React puede ser un poco excesivo. " +
                "Configurar todo el entorno y comprender la estructura del proyecto puede ser complicado. " +
                "Sin embargo, en aplicaciones más grandes, su eficiencia y capacidad para escalar son " +
                "realmente insuperables. La gestión del estado y la modularidad del código son ventajas claras en esos casos.",
            description:"Chico joven en blanco y negro pensando",
            imageUrl: '/R.jpg',
            imageSize: 400,

        }]

    return (
        <>
            {persons.map((personItem) =>
                <Testimonio key={personItem.id}
                            name={personItem.name}
                            country={personItem.country}
                            profession={personItem.profession}
                            description={personItem.description}
                            imageUrl={personItem.imageUrl}
                            imageSize={personItem.imageSize}
                            opinion={personItem.opinion}
                />)

            }
        </>
    )
}

export default App
