import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const PageHeader = () => (
  <Header style={{backgroundColor: 'orange', width: '100%'}} as='h2' icon>
    <Icon name='paw' />
    ZooKeepr
    <Header.Subheader>
      Keep track of your animals
    </Header.Subheader>
  </Header>
)

export default PageHeader