import React from 'react'

import { Products, Developers, Company } from '../Content'
import { Container, DropDownStyles } from './styles'
import { DropDownOption, DropDownProvider, DropDownRoot } from '../DropDownOption'

function NavBar() {
  return (
    <DropDownProvider>
      <DropDownStyles>
        <Container>
          <ul>
            <li>
              <DropDownOption name="Produtos" content={Products} />
            </li>

            <li>
              <DropDownOption name="Desenvolvedores" content={Developers} />
            </li>

            <li>
              <DropDownOption name="Empresa" content={Company} />
            </li>
          </ul>
        </Container>

        <DropDownRoot />
      </DropDownStyles>
    </DropDownProvider>
  )
}

export default NavBar