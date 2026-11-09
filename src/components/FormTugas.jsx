import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const FormTugas = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState({ name: '', priority: 'Medium', status: 'To Do' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    } else {
      setTask({ name: '', priority: 'Medium', status: 'To Do' });
    }
  }, [taskToEdit, show]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name.trim()) return;
    
    taskToEdit ? editTask(task) : addTask(task);
    setTask({ name: '', priority: 'Medium', status: 'To Do' });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <Modal.Header closeButton className="border-0 pb-0 mt-2 mx-2">
        <Modal.Title className="fw-bold fs-4 text-dark">
          {taskToEdit ? 'Edit Tugas' : 'Tambah Tugas Baru'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 py-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold text-secondary">Deskripsi Tugas</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Apa yang perlu diselesaikan?"
              value={task.name}
              onChange={handleChange}
              className="input-modern"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold text-secondary">Prioritas</Form.Label>
            <Form.Select name="priority" value={task.priority} onChange={handleChange} className="input-modern">
              <option value="Low">Low (Rendah)</option>
              <option value="Medium">Medium (Sedang)</option>
              <option value="High">High (Tinggi)</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold text-secondary">Status</Form.Label>
            <Form.Select name="status" value={task.status} onChange={handleChange} className="input-modern">
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="border-0 pt-0 mx-2 mb-2">
        <Button variant="light" className="fw-semibold rounded-3 px-4" onClick={handleClose}>
          Batal
        </Button>
        <Button variant="primary" className="btn-modern px-4" onClick={handleSubmit}>
          {taskToEdit ? 'Update Tugas' : 'Simpan Tugas'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormTugas;