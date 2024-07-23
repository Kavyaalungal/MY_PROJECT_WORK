import React, { useState } from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react';
import { AppSidebarNav } from './AppSidebarNav';

const MainComponent = () => {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setModalContent(null);
  };

  return (
    <div>
      {/* Your existing layout components */}
      <AppSidebarNav handleOpenModal={handleOpenModal} />

      {/* Modal component */}
      <CModal
        visible={visible}
        onClose={handleCloseModal}
        aria-labelledby="modalTitle"
      >
        <CModalHeader>
          <CModalTitle id="modalTitle">Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {modalContent}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={handleCloseModal}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default MainComponent;

