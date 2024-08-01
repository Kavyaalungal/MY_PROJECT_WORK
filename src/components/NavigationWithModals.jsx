import React, { useState } from 'react';
import { CNavItem, CNavLink, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CBadge , CCloseButton  } from '@coreui/react';
import Patient from '../views/base/patient/Patient';
import CIcon from '@coreui/icons-react';
import { cilBackspace,cilSpeedometer,cilGroup,cilPencil,cilBank,cilBarcode,cilNotes, cilCash,cilCopy,cilAddressBook,cilSpreadsheet } from '@coreui/icons';
import Cancelinvoice from '../views/base/cancel/Cancelinvoice';
import './NavigationWithModals.css'; // Import your custom CSS file
import Dashboard from '../views/dashboard/Dashboard';
import EditInvoice from '../views/theme/editinvoice/EditInvoice';
import Account from '../views/base/account/Account';
import Bill from '../views/base/billwise/Bill'
import PatientBill from '../views/base/patientviews/PatientBill';
import PendingCollection from '../views/theme/pendingcollection/PendingCollection';
import Cashpayment from '../views/base/cashpayment/Cashpayment';
import CashReceipt from '../views/base/receipt/CashReceipt';
import ReportDispatch from '../views/base/reportdispatch/ReportDispatch';
import BillWisePending from '../views/base/billwisepending/BillWisePending';


const NavigationWithModals = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

  const toggleModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModal(!modal);
  };

  return (
    <>
    <div className=' custom-nav-container'>
    <CNavItem className="custom-nav-item">
        <CNavLink className="custom-nav-link">
          <CIcon icon={cilSpeedometer} className="me-2" /> Dashboard
          <CBadge color="info" className="ms-2">NEW</CBadge>
        </CNavLink>
      </CNavItem>
      <CNavItem className="custom-nav-item">
        <CNavLink className="custom-nav-link" onClick={() => toggleModal('Patient Registration', <Patient />)}>
          <CIcon icon={cilGroup} className="me-2" /> Patient Registration
        </CNavLink>
      </CNavItem>
      <CNavItem className="custom-nav-item">
        <CNavLink className="custom-nav-link" onClick={() => toggleModal('Cancel Invoice', <Cancelinvoice />)}>
          <CIcon icon={cilBackspace} className="me-2" /> Cancel Invoice
        </CNavLink>
      </CNavItem>
      <CNavItem className='custom-nav-item'>
        <CNavLink className='custom-nav-link' onClick={()=> toggleModal('Edit Invoice',<EditInvoice/>)}>
        <CIcon icon={cilPencil} className='me-2'/>Edit Invoice
        </CNavLink>
      </CNavItem>
      <CNavItem className='custom-nav-item'>
        <CNavLink className='custom-nav-link' onClick={()=> toggleModal('Account Ledger',<Account/>)}>
        <CIcon icon={cilBank} className='me-2'/>Account Ledger
        </CNavLink>
      </CNavItem>
      <CNavItem className='custom-nav-item'>
      <CNavLink className='custom-nav-link' onClick={()=> toggleModal('Billwise Collection',<Bill/>)}>
        <CIcon icon={cilBarcode} className='me-2'/>Billwise Collection
      </CNavLink>
      </CNavItem>
      <CNavItem className='custom-nav-item'>
        <CNavLink className='custom-nav-link' onClick={()=>toggleModal('Patient Views',<PatientBill/>)}>
        <CIcon icon={cilAddressBook} className='me-2'/>Patient Views
        </CNavLink>
      </CNavItem>
      <CNavItem className='custom-nav-item'>
        <CNavLink className='custom-nav-link' onClick={()=>toggleModal('Pending Collection',<PendingCollection/>)}>
        <CIcon icon={cilSpreadsheet} className='me-2'/>Pending Collection
        </CNavLink>
      </CNavItem>
  <CNavItem className='custom-nav-item'>
    <CNavLink className='custom-nav-link' onClick={()=> toggleModal('Cash Payment',<Cashpayment/>)}>
    <CIcon icon={cilCash} className='me-2'/>Cash Payment
    </CNavLink>
  </CNavItem>
  <CNavItem className='custom-nav-item'>
    <CNavLink className='custom-nav-link' onClick={()=>toggleModal('Cash Receipt',<CashReceipt/>)}>
    <CIcon icon={cilNotes} className='me-2'/>Cash Receipt
    </CNavLink>
  </CNavItem>
  <CNavItem className='custom-nav-item'>
    <CNavLink className='custom-nav-link' onClick={()=>toggleModal('Report Dispatching',<ReportDispatch/>)}>
    <CIcon icon={cilCopy} className='me-2'/>Report Dispatch
    </CNavLink>
  </CNavItem>
  {/* <CNavItem className='custom-nav-item'>
    <CNavLink className='custom-nav-link' onClick={()=>toggleModal('Billwise Pending Collection',<BillWisePending/>)}>
    <CIcon icon={cilBarcode} className='me-2'/>Bill Wise Pending Collection 
    </CNavLink>
  </CNavItem> */}
  
  
      <CModal visible={modal} onClose={() => setModal(false)}
              size="lg"
              // visible={visibleLg}
              // onClose={() => setVisibleLg(false)}
              aria-labelledby="OptionalSizesExample2">
        <CModalHeader className='custom-modal-header'>
          <CModalTitle className='custom-modal-title '>{modalTitle}</CModalTitle>
          {/* <CCloseButton onClick={() => setVisibleXL(false)} /> */}
        </CModalHeader>
        <CModalBody>
          {modalContent}
        </CModalBody>
        {/* <CModalFooter>
          <CButton color="secondary" onClick={() => setModal(false)}>Close</CButton>
        </CModalFooter> */}
      </CModal>
      </div>
    </>
  );
};

export default NavigationWithModals;
