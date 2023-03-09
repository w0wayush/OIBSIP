const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
  (e.keyCode === 13 ? addList(e) : null);
})

function addList(e){
  const notCompleted = document.querySelector('.notCompleted');
  const Completed = document.querySelector('.Completed');
  const newLi = document.createElement('li');
  const checkBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const delBtn = document.createElement('button');
    
  editBtn.innerHTML = '<i class="fa fa-edit"></i>';
  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  delBtn.innerHTML = '<i class="fa fa-trash"></i>';

  if(input.value !==''){
    newLi.textContent = input.value;
    input.value = '';
    notCompleted.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(editBtn);
    newLi.appendChild(delBtn);
  }

  editBtn.addEventListener('click', function() {  
    const parent = this.parentNode;
    const task = parent.firstChild;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.textContent;
    parent.insertBefore(input, task);
    parent.removeChild(task);
    input.addEventListener('keyup', function(e) {
      if (e.keyCode === 13) {
        const newTask = document.createTextNode(input.value);
        parent.insertBefore(newTask, input);
        parent.removeChild(input);
      }
    });
  });

  checkBtn.addEventListener('click', function(){
    const parent = this.parentNode;
    parent.remove();
    Completed.appendChild(parent);
    checkBtn.style.display = 'none';
    editBtn.style.display = parent.parentNode.classList.contains('Completed') ? 'none' : '';
  });

  delBtn.addEventListener('click', function(){
    const parent = this.parentNode;
    parent.remove();
  });
}
