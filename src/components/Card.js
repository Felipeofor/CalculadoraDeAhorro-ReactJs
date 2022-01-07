import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from '../store/actions';
import Button from './Button.js';
import styled from 'styled-components'

const Div = styled.div`
    background: #eee;
    padding: 20px;
    display: flex;
    margin: 1rem 2rem;
    height: 400px;
    border-top: solid 2px palevioletred;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    .card-div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 350px;
    }
    .card-header{
        text-align: center;
        width: 100%;
        box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.1);
        background-color: #eee;
        border-radius: 5px;
    }
`


const Card = (props) => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.balance);
    
    useEffect(() => {
        dispatch({type: 'SET_BALANCE', payload: selector});
    }, [selector]);


    return (
        <Div className="card">
        <div className="card-header">
            <div className="card-header-title">
            <h3>{props.referencia.toUpperCase()}</h3>
            </div>
            <div className="card-header-icon">
            <span className="icon">
                <i className="fas fa-angle-down"></i>
            </span>
            </div>
        </div>
        <div className="card-body">
            <div className="card-div"><p>Deposito:</p><p>{props.deposito}</p></div>
            <div className="card-div"><p>Para toda la vida:</p><p>{props.paraTodaLaVida}</p></div>
            <div className="card-div"><p>Gastos basicos:</p><p>{props.gastosBasicos}</p></div>
            <div className="card-div"><p>Gastos corto plazo:</p><p>{props.gastosCortoPlazo}</p></div>
            <div className="card-div"><p>Gastos largo plazo:</p><p>{props.gastosLargoPlazo}</p></div>
            <div className="card-div"><p>Emergencias:</p><p>{props.emergencias}</p></div>
            <Button type="button" onClick={() => dispatch(deleteCard(props))}>Eliminar</Button>
        </div>
        </Div>
    )
    }

    export default Card;