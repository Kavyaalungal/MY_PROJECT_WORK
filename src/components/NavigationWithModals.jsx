import React, { useState } from 'react';
import { CNavItem, CNavLink, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton, CBadge , CCloseButton  } from '@coreui/react';
import Patient from '../views/base/patient/Patient';
import CIcon from '@coreui/icons-react';
import { cilUser, cilBackspace,cilSpeedometer,cilGroup } from '@coreui/icons';
import Cancelinvoice from '../views/base/cancel/Cancelinvoice';
import './NavigationWithModals.css'; // Import your custom CSS file
import Dashboard from '../views/dashboard/Dashboard';


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
    <CNavItem className="custom-nav-item">
        <CNavLink className="custom-nav-link" onClick={() => toggleModal('Dashboard', <Dashboard />)}>
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
    </>
  );
};

export default NavigationWithModals;
