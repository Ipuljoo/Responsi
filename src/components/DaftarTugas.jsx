import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

const DaftarTugas = ({ tasks, deleteTask, showEditForm }) => {
  const getPriorityBadge = (priority) => {
    if (priority === 'High') return 'danger';
    if (priority === 'Medium') return 'warning';
    return 'success';
  };

  const getStatusBadge = (status) => {
    if (status === 'Done') return 'success';
    if (status === 'In Progress') return 'primary';
    return 'secondary';
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center text-muted mt-5 p-5 bg-white rounded-4 shadow-sm">
        <h5 className="fw-semibold">Belum ada tugas ✨</h5>
        <p className="mb-0">Silakan tambahkan tugas baru untuk mulai produktif hari ini!</p>
      </div>
    );
  }

  return (
    <section>
      {tasks.map((task) => (
        <article key={task.id}>
          {/* Inject class priority-* untuk memicu warna garis di CSS */}
          <Card className={`mb-4 task-card priority-${task.priority.toLowerCase()}`}>
            <Card.Body className="d-flex flex-column flex-md-row justify-content-between align-items-md-center p-4">
              <div className="mb-3 mb-md-0 ps-2">
                <h5 className="mb-2 fw-bold text-dark">{task.name}</h5>
                <div className="d-flex gap-2 mt-2">
                  <Badge bg={getPriorityBadge(task.priority)} className="rounded-pill px-3 py-2 fw-semibold shadow-sm">
                    {task.priority}
                  </Badge>
                  <Badge bg={getStatusBadge(task.status)} className="rounded-pill px-3 py-2 fw-semibold text-white shadow-sm">
                    {task.status}
                  </Badge>
                </div>
              </div>
              <div className="d-flex gap-2">
                <Button variant="light" className="fw-semibold rounded-pill px-4 text-primary border-primary shadow-sm" onClick={() => showEditForm(task)}>
                  Edit
                </Button>
                <Button variant="light" className="fw-semibold rounded-pill px-4 text-danger border-danger shadow-sm" onClick={() => deleteTask(task.id)}>
                  Hapus
                </Button>
              </div>
            </Card.Body>
          </Card>
        </article>
      ))}
    </section>
  );
};

export default DaftarTugas;