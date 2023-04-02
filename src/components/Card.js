import './Card.css';
export const Card = (props) => (
    <><div className="card">
        <a href="#" className="link">
            <h2>{props.titulo}</h2>
        </a>
        <h4>{props.resumo}</h4>
    </div>
    </>
);

