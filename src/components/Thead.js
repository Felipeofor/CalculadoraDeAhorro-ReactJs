import styled from 'styled-components'

const MyTr = styled.thead`
`

const Thead = ( deposito, paraTodaLaVida, gastosBasicos, gastosCortoPlazo, gastosLargoPlazo, emergencias ) => {
    return (
        <MyTr>
            <tr>
                <td>1</td>
                <td>{deposito} </td>
                <td>{paraTodaLaVida} </td>
                <td>{gastosBasicos} </td>
                <td>{gastosCortoPlazo} </td>
                <td>{gastosLargoPlazo} </td>
                <td>{emergencias} </td>
            </tr>
        </MyTr>
    )
}

export default Thead;