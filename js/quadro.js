document.addEventListener('DOMContentLoaded', function() {
    const tasks = document.querySelectorAll('.task');
    const columns = document.querySelectorAll('.column');
    let draggedTask = null;
  
    tasks.forEach(task => {
      task.addEventListener('dragstart', dragStart);
      task.addEventListener('dragend', dragEnd);
    });
  
    columns.forEach(column => {
      column.addEventListener('dragover', dragOver);
      column.addEventListener('dragenter', dragEnter);
      column.addEventListener('dragleave', dragLeave);
      column.addEventListener('drop', dragDrop);
    });
  
    function dragStart() {
      draggedTask = this;
      setTimeout(() => {
        this.classList.add('hidden');
      }, 0);
    }
  
    function dragEnd() {
      this.classList.remove('hidden');
    }
  
    function dragOver(e) {
      e.preventDefault();
    }
  
    function dragEnter(e) {
      e.preventDefault();
      this.classList.add('droppable');
    }
  
    function dragLeave() {
      this.classList.remove('droppable');
    }
  
    function dragDrop() {
      this.appendChild(draggedTask);
      this.classList.remove('droppable');
    }
  });