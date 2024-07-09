import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard.jsx'))
const PendingCollection = React.lazy(() => import('./views/theme/pendingcollection/PendingCollection.jsx'))
const EditInvoice = React.lazy(() => import('./views/theme/editinvoice/EditInvoice.jsx'))

// Base
const Patient = React.lazy(() => import('./views/base/patient/Patient.jsx'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners.jsx'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons.jsx'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups.jsx'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns.jsx'))


const Widgets = React.lazy(() => import('./views/widgets/WidgetsDropdown.jsx'))
  

const routes = [
   {path:'/', exact:true, name:'Home'},
   {path:'/dashboard', name:'Dashboard', element:Dashboard},
  {path:'/theme',name:'Theme', element:PendingCollection, exact:true},
  {path:'/pendingcollection',name:'Pending Collection', element:PendingCollection},
  {path:'/editinvoice',name:'Edit Invoice', element:EditInvoice},
  {path:'/base',name:'Base',element:Patient,exact:true},
  {path:'/patient',name:'Patient Registration',element:Patient},
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
 { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
//   { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
