const data = {
  rows: [
    {
      title: 'Donec id elit non mi porta gravida at eget metus',
      content:
        'Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.',
    },
    {
      title: 'Curabitur blandit tempus porttitor',
      content:
        'Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.',
    },
    {
      title: 'Nullam quis risus eget urna mollis ornare vel eu leo',
      content:
        'Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.',
    },
    {
      title: 'Vestibulum id ligula porta felis euismod semper.',
      content:
        'Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.',
    },
    {
      title:
        'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus',
      content:
        'Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.',
    },
  ],
};

// RENDER CONTENT
let contentHTML = data.rows
  .map(
    (question, index) =>
      `<div class="accordion__el">
            <div class="accordion__header">
              <h5>${index + 1}. ${question.title}</h5>
              <img
                id="icon"
                class="arrow__up"
                src="/assets/arrow-up.png"
                alt="arrow icon"
              />
            </div>
            <p class="accordion__answer">
              ${question.content}
            </p>
          </div>`
  )
  .join('');
console.log(data.rows);
document.querySelector('.accordion__container').innerHTML = contentHTML;

// ACCORDION FUNCTIONALITY
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
