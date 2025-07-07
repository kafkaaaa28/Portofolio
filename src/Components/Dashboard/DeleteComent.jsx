import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react';
const DeleteComent = ({ show, onClose, loading, onDelete, Coments }) => {
  const [formData, setFormData] = useState({ ...Coments });
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(Coments.id);
  };
  useEffect(() => {
    setFormData({ ...Coments });
  }, [Coments]);
  return (
    <Modal show={show} onClose={() => onClose(false)}>
      <ModalHeader className="bg-white">
        <h2 className="text-xl font-bold text-red-600 text-center">Hapus Coments</h2>
      </ModalHeader>
      <ModalBody className="bg-white">
        <p className="text-center text-gray-700">
          Apakah Anda yakin ingin menghapus Coment dari <span className="font-semibold">{formData.name}</span>?
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

export default DeleteComent;
