import styled from 'styled-components';
import useState from 'react';

const MyTabla = styled.table`
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
    border-spacing: 0;
    thead {
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        text-align: left;
        th {
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }
    }
    tbody {
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        text-align: left;
        td {
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }
    }

    tr:nth-child(even) {
        background: #f5f5f5;
    }

    tr:nth-child(odd) {
        background: #fff;
    }

    tr:hover {
        background: #f5f5f5;
    }

    th, td {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }

    th:last-child, td:last-child {
        border-right: none;
    }

    th:first-child, td:first-child {
        border-left: none;
    }

    th:hover, td:hover {
        background: #f5f5f5;
    }

    th {
        background: #f5f5f5;
    }

    td {
        background: #fff;
    }

    td:first-child {
        border-left: none;
    }

    td:last-child {
        border-right: none;
    }

    tr:last-child td {
        border-bottom: none;
    }

    tr:last-child td:first-child {
        -moz-border-radius-bottomleft: 3px;
        -webkit-border-bottom-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    tr:last-child td:last-child {
        -moz-border-radius-bottomright: 3px;
        -webkit-border-bottom-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    tr:hover td {
        background: #f5f5f5;
        color: #333;
    }

    tr:hover td:first-child {
        -moz-border-radius-topleft: 3px;
        -webkit-border-top-left-radius: 3px;
        border-top-left-radius: 3px;
    }

    tr:hover td:last-child {
        -moz-border-radius-topright: 3px;
        -webkit-border-top-right-radius: 3px;
        border-top-right-radius: 3px;
    }
`

const [deposito, setDeposito] = React.useState([]);

setDeposito([
    ...deposito,
    {
        deposito: deposito,
        paraTodaLaVida: paraTodaLaVida,
        gastosBasicos: gastosBasicos,
        gastosCortoPlazo: gastosCortoPlazo,
        gastosLargoPlazo: gastosLargoPlazo,
        emergencias: emergencias
    }
])


const Tabla = ( deposito ) => {
    return(
        <MyTabla>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Deposito</th>
                    <th>Para toda la vida</th>
                    <th>Gastos Basicos</th>
                    <th>Gustos de corto plazo</th>
                    <th>Gastos de largo plazo</th>
                    <th>Emergencias</th>
                </tr>
                {deposito.map(deposito => (
                <tr>
                    <td>{deposito.deposito}</td>
                    <td>{deposito.paraTodaLaVida}</td>
                    <td>{deposito.gastosBasicos}</td>
                    <td>{deposito.gastosCortoPlazo}</td>
                    <td>{deposito.gastosLargoPlazo}</td>
                    <td>{deposito.emergencias}</td>
                </tr>
            ))}
            </thead>
            
        </MyTabla>
    )
}

export default Tabla;