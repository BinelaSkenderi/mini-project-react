import './PlanetList.scss';
import { Planet } from '../SpaceAccordion';

type PanelProps = {
    planet: Planet;
    isActive: boolean;
    setIsActive: (state: boolean) => void;
    onEdit: (planet: Planet) => void;
    onDelete: (planetId: number) => void;
};


const PlanetList = ({ planet, isActive, setIsActive, onEdit, onDelete }: PanelProps) => {
    return (
        <section className={`planet ${isActive ? "planet--active" : ""}`}>
            <h3 className="planet__title">{planet.name}</h3>
            <div className="planet_buttons">
                <button
                    className="planet__toggle-btn"
                    onClick={() => setIsActive(!isActive)}
                    aria-expanded={isActive}
                >
                    {isActive ? "Hide Details" : "Show Details"}
                </button>
                <button className="planet__edit-btn" onClick={() => onEdit(planet)}>
                    ✏️ Edit
                </button>
                <button className="planet__delete-btn" onClick={() => onDelete(planet.id)}>
                    🗑️ Delete
                </button>
            </div>
            {isActive && <p className="planet__description">{planet.description}</p>}
        </section>
    );
};

export default PlanetList;