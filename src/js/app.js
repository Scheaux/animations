import heartImage from '../img/heart.png';

// init function
(() => {
  addCollapseListener();
  addFeedbackListener();
  addLikeListener();
})();

// COLLAPSE
const text = document.querySelector('.text_to_collapse');
const initialHeight = text.getBoundingClientRect().height;
const speed = 5; // pixels per iteration

function collapse() {
  const { height } = text.getBoundingClientRect();
  if (height <= speed) {
    text.style.height = '0px';
    return;
  }
  text.style.height = `${height - speed}px`;
  requestAnimationFrame(collapse);
}

function uncollapse() {
  const { height } = text.getBoundingClientRect();
  if (height >= initialHeight) {
    text.style.height = `${initialHeight}px`;
    return;
  }
  text.style.height = `${height + speed}px`;
  requestAnimationFrame(uncollapse);
}

function addCollapseListener() {
  const button = document.getElementById('collapse');
  button.addEventListener('click', () => {
    if (text.getBoundingClientRect().height < 1) {
      uncollapse();
    } else {
      collapse();
    }
  });
}

// FEEDBACK
function addFeedbackListener() {
  const button = document.getElementById('feedback-button');
  const close = document.getElementById('feedback-close');
  const form = document.querySelector('.feedback_form');
  button.addEventListener('click', () => {
    button.classList.remove('disappear');
    button.classList.add('disappear');
    form.classList.remove('disappear');
    form.classList.add('appear');
  });
  close.addEventListener('click', () => {
    button.classList.add('disappear');
    button.classList.remove('disappear');
    form.classList.remove('appear');
    form.classList.add('disappear');
  });
}

// LIKE
function addLikeListener() {
  const like = document.getElementById('like');
  const container = document.querySelector('.like_container');
  like.addEventListener('click', () => {
    const heart = document.createElement('img');
    heart.className = 'heart';
    heart.src = heartImage;
    container.append(heart);
    const likeLeft = like.getBoundingClientRect().left;
    const likeWidth = like.getBoundingClientRect().width / 2;
    const heartWidth = heart.getBoundingClientRect().width / 2;
    heart.style.left = `${likeLeft + likeWidth - heartWidth}px`;
    const rnd = Math.ceil(Math.random() * 4);
    heart.classList.add(`disappearing_heart${rnd}`);
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  });
}
