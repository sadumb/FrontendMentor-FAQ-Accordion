let accordion = document.querySelectorAll('.accordion');
let panel = document.querySelectorAll('.panel');

accordion.forEach((question) =>
  question.addEventListener('click', () => {
    let answer = question.nextElementSibling;
    // first we delete 'active' class if we click on current active tab and delete the faq.
    if (question.classList.contains('active')) {
      question.classList.remove('active');
      answer.style.maxHeight = null;
      answer.style.borderBottom = null;
    } else {
      // if we click another tab, remove recent active tabs.
      accordion.forEach((question) => {
        question.classList.remove('active');
      });
      // also remove recent active faq answer and the bottom-border
      panel.forEach((deletePanel) => {
        deletePanel.style.maxHeight = null;
        deletePanel.style.borderBottom = null;
      });
      // after that focus on new clicked tabs and fill the answer
      question.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      // add border bottom to panel
      answer.style.borderBottom = 'thin solid hsl(240, 5%, 91%)';
    }
  })
);
