import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './components/Input';
import Button from './components/Button.js';
import Container from './components/Container.js'
import Section from './components/Section.js'
import Tabla from './components/Tabla.js';
import Navbar from './components/Navbar.js'
import ContainerTabla from './components/ContainerTabla.js'

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
  const [balance, setBalance] = useState({});
  const handleSubmit = ({ deposit }) => {
    const val = ahorros(Number(deposit));
    setBalance(val);
  } 

  return (
    <div>
      <Navbar />
      <Container>
        <Section>
          <Formik
          initialValues={{
            deposit: ''
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number()
              .required('Requerido')
              .typeError('Debe ser un número')
              .positive('Solo números positivos')
          })}
          >
            <Form>
              <Input name="deposit" label="Depósito inicial" />
              <Button type="submit">Calcular</Button>
            </Form>
          </Formik>
        </Section>
         <ContainerTabla>
          <Tabla
            deposito={formatter.format(balance.deposito)}
            paraTodaLaVida={formatter.format(balance.paraTodaLaVida)}
            gastosBasicos={formatter.format(balance.gastosBasicos)}
            gastosCortoPlazo={formatter.format(balance.gastosCortoPlazo)}
            gastosLargoPlazo={formatter.format(balance.gastosLargoPlazo)}
            emergencias={formatter.format(balance.emergencias)}
          />
        </ContainerTabla>
      </Container>
    </div>
  );
}

export default App;