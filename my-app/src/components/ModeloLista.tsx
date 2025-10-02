    import React, { useEffect, useState } from 'react';
    import { Model, fecthModels } from '../service/sketchfabService';


    const ModeloLista: React.FC = () => {
    const [models, setModels] = useState<Model[]>([]);

    useEffect(() => {
        const getModels = async () => {
        const data: Model[] = await fecthModels("planet");
        setModels(data);
        };
        getModels();
    }, []);
    
    const styles = {
    container: {
        padding: "30px",
        textAlign: "center" as const,
        fontFamily: "Arial, sans-serif",
    },
    title: {
        marginBottom: "20px",
        fontSize: "24px",
        color: "#333",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
    },
    card: {
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        transition: "0.3s",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    image: {
        width: "100%",
        height: "150px",
        objectFit: "cover" as const,
        borderRadius: "8px",
        marginBottom: "10px",
    },
    button: {
        display: "inline-block",
        marginTop: "10px",
        padding: "8px 14px",
        background: "#007bff",
        color: "white",
        textDecoration: "none",
        borderRadius: "6px",
        transition: "background 0.3s",
    },
    };
    return (
        <div style={styles.container}>
        <div style={styles.grid}>
            {models.map((model) => (
            <div key={model.id} style={styles.card}>
                <img src={model.thumbnail} alt={model.name} style={styles.image} />
                <h3>{model.name}</h3>
                <a href={model.viewerUrl} target="_blank" rel="noopener noreferrer" style={styles.button}>
                Ver Modelo
                </a>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default ModeloLista;
