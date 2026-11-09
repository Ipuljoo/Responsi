import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import $ from 'jquery'; 
import DaftarTugas from './components/DaftarTugas';
import FormTugas from './components/FormTugas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    $('.dashboard-container').hide().fadeIn(1000);
    $('.header-wrapper').hide().slideDown(600);
  }, []);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <main className="dashboard-container">
      <header className="app-header py-4 mb-5 header-wrapper">
        <Container>
          <div className="d-flex align-items-center">
            <div className="bg-primary text-white rounded-3 p-2 me-3 shadow-sm d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
              <span className="fs-4 fw-bold">✓</span>
            </div>
            <h2 className="m-0 fw-bold text-dark tracking-tight">Manajemen Tugas</h2>
          </div>
        </Container>
      </header>

      <Container>
        <Row className="mb-4 align-items-center">
          <Col md={7}>
            <h4 className="fw-bold text-dark mb-1">Project Board</h4>
            <p className="text-secondary mb-0">Pantau dan kelola pekerjaan tim Anda di sini.</p>
          </Col>
          <Col md={5} className="text-md-end mt-3 mt-md-0">
            <Button variant="primary" onClick={handleShowForm} className="btn-modern shadow-sm w-100 w-md-auto">
              + Tambah Tugas Baru
            </Button>
          </Col>
        </Row>

        <div className="mt-4">
          <DaftarTugas 
            tasks={tasks} 
            deleteTask={deleteTask} 
            showEditForm={showEditForm} 
          />
        </div>

        <FormTugas 
          show={showForm} 
          handleClose={handleCloseForm} 
          addTask={addTask} 
          editTask={editTask} 
          taskToEdit={taskToEdit} 
        />
      </Container>
    </main>
  );
}

export default App;