import { useState } from 'react';
import PlanetList from './PlanetList/PlanetList';
import './SpaceAccordion.scss';


// const SpaceAccordion = () => {
//     const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({});

//     return (
//         <>
//             <h2>Planets</h2>
//             {planets.map((planet) => (
//                 <PlanetList
//                     key={planet.name}
//                     planet={planet}
//                     isActive={activeStates[planet.name] || false}
//                     setIsActive={(state: any) => setActiveStates({ ...activeStates, [planet.name]: state })}
//                 />
//             ))}
//         </>
//     );
// }

// export default SpaceAccordion;

// export type Planet = {
//     [x: string]: number;
//     name: string;
//     description: string
// }

// export const planets: Planet[] = [
//     {
//         name: "Jupiter",
//         description: "Jupiter is the fifth planet from the Sun, and the largest planet in our solar system."
//     },
//     {
//         name: "Mercury",
//         description: "Mercury is the planet nearest to the Sun, and the smallest planet in our solar system."
//     },
//     {
//         name: "Venus",
//         description: "Venus is the second planet from the Sun, and the sixth largest planet."
//     },
//     {
//         name: "Mars",
//         description: "Mars is the fourth planet from the Sun, and the seventh largest planet."
//     },
//     {
//         name: "Neptune",
//         description: "Neptune is the eighth and most distant planet in our solar system. It's the fourth largest planet."
//     }
// ];



export type Planet = {
    id: number;
    name: string;
    description: string;
};

const initialPlanets: Planet[] = [
    { id: 1, name: "Jupiter", description: "Jupiter is the largest planet in our solar system." },
    { id: 2, name: "Mercury", description: "Mercury is the smallest planet and closest to the Sun." },
    { id: 3, name: "Venus", description: "Venus is the second planet from the Sun." },
    { id: 4, name: "Mars", description: "Mars is the fourth planet and often called the Red Planet." },
    { id: 5, name: "Neptune", description: "Neptune is the eighth and most distant planet." }
];

const SpaceAccordion = () => {
    const [planets, setPlanets] = useState<Planet[]>(initialPlanets);
    const [activeStates, setActiveStates] = useState<{ [key: number]: boolean }>({});

    const handleEdit = (planet: Planet) => {
        const newName = prompt("Enter new name:", planet.name);
        const newDescription = prompt("Enter new description:", planet.description);

        if (newName && newDescription) {
            setPlanets(planets.map(p => p.id === planet.id ? { ...p, name: newName, description: newDescription } : p));
        }
    };

    const handleDelete = (planetId: number) => {
        setPlanets(planets.filter(p => p.id !== planetId));
    };

    return (
        <>
            <h2>Planets</h2>
            {planets.map((planet) => (
                <PlanetList
                    key={planet.id}
                    planet={planet}
                    isActive={activeStates[planet.id] || false}
                    setIsActive={(state) => setActiveStates({ ...activeStates, [planet.id]: state })}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            ))}
        </>
    );
};

export default SpaceAccordion;
