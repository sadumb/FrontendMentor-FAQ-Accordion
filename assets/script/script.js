let accordion = document.querySelectorAll('.accordion');
let panel = document.querySelectorAll('.panel');
let arrow = document.querySelectorAll('.arrow');


accordion.forEach((question) =>
  question.addEventListener('click', () => {
    let answer = question.nextElementSibling;
    let arrow_btn = question.lastElementChild;

    // first we delete 'active' class if we click on current active tab and delete the faq.
    if (question.classList.contains('active')) {
      question.classList.remove('active');
      answer.style.maxHeight = null;
      answer.style.borderBottom = null;
      arrow_btn.classList.toggle('arrow-active');
    } else {
      // if we click another tab, remove recent active tabs.
      accordion.forEach((question) => {
        question.classList.remove('active');
      });

      arrow.forEach((arrow_btn) => {
        arrow_btn.classList.remove('arrow-active');
      })

      // also remove recent active faq answer, the bottom-border, and flip all the arrow
      panel.forEach((deletePanel) => {
        deletePanel.style.maxHeight = null;
        deletePanel.style.borderBottom = null;
      });

      arrow

      // after that focus on new clicked tabs and fill the answer
      question.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      
      // add border bottom to panel
      answer.style.borderBottom = 'thin solid hsl(240, 5%, 91%)';

      // finally flip the arrow button
      arrow_btn.classList.toggle('arrow-active');
    }
  })
);
