import React from 'react';
import ClinicRow from './ClinicRow';
import { clinics } from '../data/clinics';
import './ClinicTable.css';

const ClinicTable: React.FC = () => {
    return (
        <div className="clinic-table">
            <h2>Clínicas de Harmonização Facial em Caruaru</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome da Clínica</th>
                        <th>Horário</th>
                        <th>Endereço</th>
                        <th>Instagram</th>
                    </tr>
                </thead>
                <tbody>
                    {clinics.length ? (
                        clinics.map((clinic, index) => <ClinicRow key={index} clinic={clinic} />)
                    ) : (
                        <tr>
                            <td colSpan={3}>Nenhuma clínica encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ClinicTable;
