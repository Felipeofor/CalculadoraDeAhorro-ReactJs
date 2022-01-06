import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import shortid from 'shortid';
import Input from './components/Input';
import Button from './components/Button.js';
import Container from './components/Container.js'
import Section from './components/Section.js'
import Navbar from './components/Navbar.js'
import ContainerTabla from './components/ContainerTabla.js'
import Card from './components/Card.js'
import { useDispatch, useSelector } from 'react-redux';

const ahorros = (deposit) => {
  let deposito = deposit;
  let paraTodaLaVida = deposit * 0.1;
  let resto = deposit * 0.9;
  let gastosBasicos = resto * 0.6;
  let gastosCortoPlazo = resto * 0.1;
  let gastosLargoPlazo = resto * 0.1;
  let emergencias = resto * 0.2;
  return ({
    paraTodaLaVida,
    gastosBasicos,
    gastosCortoPlazo,
    gastosLargoPlazo,
    emergencias,
    deposito
    });
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function App() {
  const dispatch = useDispatch(); 
  const selector = useSelector(state => state.balance);


  console.log(selector);
  const [balance, setBalance] = useState([]);
  const handleSubmit = ({ deposit, reference }) => {
    const val = ahorros(Number(deposit));
    setBalance([...balance,
      { 
        id: shortid.generate(),
        referencia: reference,
        deposito: formatter.format(val.deposito),
        paraTodaLaVida: formatter.format(val.paraTodaLaVida),
        gastosBasicos: formatter.format(val.gastosBasicos),
        gastosCortoPlazo: formatter.format(val.gastosCortoPlazo),
        gastosLargoPlazo: formatter.format(val.gastosLargoPlazo),
        emergencias: formatter.format(val.emergencias)
      }
    ]);
    dispatch({ type: 'ADD_CARD', payload: val });
  } 

  return (
    <div>
      <Navbar />
      <Container>
        <Section>
          <Formik
          initialValues={{
            deposit: '',
            reference: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number()
              .required('Requerido')
              .typeError('Debe ser un número')
              .positive('Solo números positivos'),
            reference: Yup.string()
              .required('Requerido')
              .typeError('Debe ser un texto')
              .min(3, 'Mínimo 3 caracteres')
              .max(10, 'Máximo 10 caracteres')
          })}>
            <Form>
              <Input name="deposit" label="Depósito inicial" />
              <Input name="reference" label="Referencia" />
              <Button type="submit">Calcular</Button>
            </Form>
          </Formik>
        </Section>
         <ContainerTabla>
            {selector.map(item => <Card 
              key={item.id}
              id={item.id}
              referencia = {item.referencia}
              deposito = {item.deposito}
              paraTodaLaVida = {item.paraTodaLaVida}
              gastosBasicos = {item.gastosBasicos}
              gastosCortoPlazo = {item.gastosCortoPlazo}
              gastosLargoPlazo = {item.gastosLargoPlazo}
              emergencias = {item.emergencias}
            />
            )}   
        </ContainerTabla>
      </Container>
    </div>
  );
}

export default App;