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
              <DropDownOption 
                name="Produtos" 
                content={Products}
                backGroundHeight={286} 
              />
            </li>

            <li>
              <DropDownOption 
                name="Desenvolvedores" 
                content={Developers}
                backGroundHeight={167} 
              />
            </li>

            <li>
              <DropDownOption 
                name="Empresa" 
                content={Company}
                backGroundHeight={215} 
              />
            </li>
          </ul>
        </Container>

        <DropDownRoot />
      </DropDownStyles>
    </DropDownProvider>
  )
}

export default NavBar