    import React, { useEffect, useState } from "react";
    import { fetchDogBreeds, DogBreeds } from "../service/DogService";

    const DogList: React.FC = () => {
    const [breeds, setBreeds] = useState<DogBreeds>({});

    useEffect(() => {
        const getBreeds = async () => {
        const data = await fetchDogBreeds();
        setBreeds(data);
        };
        getBreeds();
    }, []);

    const styles = {
        container: {
        maxWidth: "700px",
        margin: "40px auto",
        padding: "25px",
        background: "#f9f9f9",
        borderRadius: "12px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
        title: {
        fontSize: "36px",
        textAlign: "center" as const,
        color: "#2c3e50",
        marginBottom: "25px",
        borderBottom: "3px solid #3498db",
        paddingBottom: "10px",
        },
        list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        },
        item: {
        padding: "12px",
        margin: "8px 0",
        background: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #e1e1e1",
        transition: "transform 0.2s, box-shadow 0.2s",
        },
        itemHover: {
        transform: "scale(1.02)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        },
        breed: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#34495e",
        textTransform: "capitalize" as const,
        },
        subList: {
        listStyle: "disc",
        margin: "8px 0 0 30px",
        padding: 0,
        },
        sub: {
        color: "#020202ff",
        fontSize: "16px",
        textTransform: "capitalize" as const,
        },
    };

    return (
        <div style={styles.container}>
        <h2 style={styles.title}>Lista de Razas de Perros</h2>
        <ul style={styles.list}>
            {Object.entries(breeds).map(([breed, subBreeds]) => (
            <li
                key={breed}
                style={styles.item}
                onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0,0,0,0.15)")
                }
                onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
                }
            >
                <span style={styles.breed}>{breed}</span>
                {subBreeds.length > 0 && (
                <ul style={styles.subList}>
                    {subBreeds.map((sub) => (
                    <li key={sub} style={styles.sub}>
                        {sub}
                    </li>
                    ))}

                </ul>
                )}

            </li>
            ))}
        </ul>
        
        </div>
    );
    };

    export default DogList;
