const accordionHeader = document.querySelectorAll('.accordion__header');

accordionHeader.forEach(accordionHeader => {
  accordionHeader.addEventListener('click', () => {
    const accordionHeight = accordionHeader.nextElementSibling.scrollHeight;
    accordionHeader.classList.toggle('active');
    if (accordionHeader.classList.contains('active')) {
      accordionHeader.nextElementSibling.style.maxHeight = `${accordionHeight}px`;
    } else {
      accordionHeader.nextElementSibling.style.maxHeight = '0px';
    }
  });
});
