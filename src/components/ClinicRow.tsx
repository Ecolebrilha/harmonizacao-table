import React from 'react';
import { Clinic } from '../types/clinic';

interface Props {
    clinic: Clinic;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
        focusable="false"
    >
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm6-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
);

const ClinicRow: React.FC<Props> = ({ clinic }) => {
    const instaLabel = clinic.instagram
        ? clinic.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\/?/, '').replace(/\/$/, '')
        : null;

    return (
        <tr>
            <td className="clinic-name">
                {/* ícone do instagram à esquerda do nome quando houver instagram */}
                {clinic.instagram ? <InstagramIcon className="cell-icon" /> : null}
                <span className="cell-text">{clinic.name}</span>
            </td>

            <td className="clinic-hours">
                <span className="cell-text">{clinic.hours}</span>
            </td>

            <td className="clinic-address">
                <span className="cell-text">{clinic.address}</span>
            </td>

            <td className="clinic-insta">
                {clinic.instagram ? (
                    <a
                        className="instagram-link"
                        href={clinic.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram ${instaLabel}`}
                    >
                        <InstagramIcon className="instagram-icon" />
                        <span className="insta-label">@{instaLabel}</span>
                    </a>
                ) : (
                    '—'
                )}
            </td>
        </tr>
    );
};

export default ClinicRow;
