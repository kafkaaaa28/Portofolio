import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react';
const DeleteMessage = ({ show, onClose, loading, onDelete, Pesan }) => {
  const [formData, setFormData] = useState({ ...Pesan });
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(Pesan.id);
  };
  useEffect(() => {
    setFormData({ ...Pesan });
  }, [Pesan]);
  return (
    <Modal show={show} onClose={() => onClose(false)}>
      <ModalHeader className="bg-white">
        <h2 className="text-xl font-bold text-red-600 text-center">Hapus Pesan</h2>
      </ModalHeader>
      <ModalBody className="bg-white">
        <p className="text-center text-gray-700">
          Apakah Anda yakin ingin menghapus Pesan dari <span className="font-semibold">{formData.email}</span>?
        </p>
      </ModalBody>
      <ModalFooter className="bg-white flex justify-end space-x-2">
        <Button color="gray" onClick={() => onClose(false)}>
          Batal
        </Button>
        <Button color="failure" onClick={handleDelete}>
          {loading ? 'Menghapus...' : 'hapus'}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteMessage;
