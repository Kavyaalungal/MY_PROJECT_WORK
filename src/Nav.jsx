import React from 'react'
import CIcon from '@coreui/icons-react'
import {
 cilPencil,
 cilGroup,
 cilSpreadsheet,
cilSpeedometer,
  
} from '@coreui/icons'
import {  CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  {
    component: CNavItem,
    name: 'Pending Collection',
    to: '/pendingcollection',
     icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Edit Invoice',
    to: '/editinvoice',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
{
  component: CNavItem,
  name: 'Patient Registration',
  to:'/patient',
  icon: <CIcon icon={cilGroup} customClassName="nav-icon"/>,
},
]

export default _nav
