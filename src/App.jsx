import './App.css'
import Testimonio from "./components/Testimonio.jsx";

function App() {
    const persons = [{

        id: 0,
        name: "Paca",
        country: "Suecia",
        profession: "ser tonto",
        description: "no tiene",
        imageUrl: "",
        imageSize: 150,
    },
        {
            id: 1,
            name: "Paco",
            country: "India",
            profession: "ser mas tonto",
            description: "npc",
            imageUrl: "",
            imageSize: 150,
        },
        {
            id: 2,
            name: "Paqui",
            country: "Alemania",
            profession: "no ser tonto",
            description: "bobo",
            imageUrl: "",
            imageSize: 150,
        },
        {
            id: 3,
            name: "Francisco",
            country: "España",
            profession: "ser tonto",
            description: "no tiene",
            imageUrl: "",
            imageSize: 150,

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
                />)

            }
        </>
    )
}

export default App
