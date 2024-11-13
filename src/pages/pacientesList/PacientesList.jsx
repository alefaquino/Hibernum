import React, { useEffect, useState } from 'react';

const ListarPacientes = () => {
    const [pacientes, setPacientes] = useState([]);
    const [error, setError] = useState('');

    const fetchPacientes = async () => {
        try {
            const response = await fetch('http://localhost:3002/pacientes');
            if (!response.ok) {
                throw new Error('Erro ao buscar pacientes');
            }
            const data = await response.json();
            setPacientes(data);
        } catch (error) {
            setError('Erro ao carregar pacientes.');
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPacientes();
    }, []);

    return (
        <div>
            <h1>Lista de Pacientes</h1>
            {error && <p className="text-danger">{error}</p>}
            <ul>
                {pacientes.map((paciente) => (
                    <li key={paciente.id}>{paciente.nm_paciente} - {paciente.email_paciente}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListarPacientes;
