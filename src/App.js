import { useState, useEffect } from 'react';
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

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  width: '100%',
  padding: '0.5rem',
}

const formDivStyle = {
  display: 'grid',
  gridTemplateColumns: '200px 200px',
  gridTemplateRows: 'auto auto',
  gridGap: '1rem',
  margin: '0 auto',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const formDivthreeStyle = {
  gridColumn: '1 / 3',
}

const ahorros = (deposit, paraTodaLaVidaInput, gastosBasicosInput, gastosCortoPlazoInput, gastosLargoPlazoInput, emergenciasInput) => {
  let deposito = deposit;
  let paraTodaLaVida = deposit * paraTodaLaVidaInput;
  let resto = deposit * 0.9;
  let gastosBasicos = resto * gastosBasicosInput;
  let gastosCortoPlazo = resto * gastosCortoPlazoInput;
  let gastosLargoPlazo = resto * gastosLargoPlazoInput;
  let emergencias = resto * emergenciasInput;
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
    setBalance([...selector,
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
  } 

  useEffect(() => {
    dispatch({ type: 'SET_BALANCE', payload: balance });
  }, [balance]);

  useEffect((function persistBalance() {
    const data = JSON.parse(localStorage.getItem('balance'));
    if (data) {
      setBalance(data);
    }
  }), []);

  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(selector));
  }, [selector]);


  return (
    <div>
      <Navbar />
      <Container>
        <Section>
          <Formik
          initialValues={{
            deposit: '',
            reference: '',
            paraTodaLaVidaInput: 0.1,
            gastosBasicosInput: 0.6,
            gastosCortoPlazoInput: 0.1,
            gastosLargoPlazoInput: 0.1,
            emergenciasInput: 0.2,
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
            <Form style={formStyle}>
              <div>
                <Input 
                name="deposit" 
                label="Depósito inicial" 
                />
                <Input 
                name="reference" 
                label="Referencia" 
                />
              </div>
              <div style={formDivStyle}>
                <div>
                <Input 
                name="paraTodaLaVidaInput"
                id="paraTodaLaVida" 
                label="Para toda la vida" 
                type="range"
                />
                <p>10%</p>
                </div>
                <div>
                <Input
                name="gastosBasicosInput"
                id="gastosBasicos"
                label="Gastos básicos"
                type="range"
                />
                <p>60%</p>
                </div> 
                <div>
                <Input
                name="gastosCortoPlazoInput"
                id="gastosCortoPlazo"
                label="Gastos corto plazo"
                type="range"
                />
                <p>10%</p>
                </div>
                <div>
                <Input
                name="gastosLargoPlazoInput"
                id="gastosLargoPlazo"
                label="Gastos largo plazo"
                type="range"
                />
                <p>10%</p>
                </div>
              </div>
              <div style={formDivthreeStyle}>
                    <Input
                    name="emergenciasInput"
                    id="emergencias"
                    label="Emergencias"
                    type="range"
                    />
                    <p>20%</p>
                  </div>
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