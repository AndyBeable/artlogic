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

// fetch('./data.json')
//   .then((response) => response.json())
//   .then((data) => (finalData = data.rows))
//   .then(() => console.log(finalData));

// let finalData = [];

// finalData
//   .map(
//     (question, index) =>
//       `<div class="accordion__el">
//             <div class="accordion__header">
//               <h5>${index + 1}. ${question.title}</h5>
//               <img
//                 class="arrow__down"
//                 src="/assets/arrow-down.png"
//                 alt="arrow icon"
//               />
//             </div>
//             <p class="accordion__answer">
//               ${question.content}
//             </p>
//           </div>`
//   )
//   .join('');

// document.querySelector('.accordion__container').innerHTML = finalData;

// RENDER CONTENT
let contentHTML = data.rows
  .map(
    (question, index) =>
      `<div class="accordion__el">
            <div class="accordion__header">
              <h5>${index + 1}. ${question.title}</h5>
              <img
                class="arrow__down"
                src="/assets/arrow-down.png"
                alt="arrow icon"
              />
            </div>
            <p class="accordion__answer">
              ${question.content}
            </p>
          </div>`
  )
  .join('');

document.querySelector('.accordion__container').innerHTML = contentHTML;
const accordionHeaders = document.querySelectorAll('.accordion__header');

// ACCORDION FUNCTIONALITY

const onTabClick = (e) => {
  e.preventDefault();
  if (e.target !== e.currentTarget) {
    return;
  }

  accordionHeaders.forEach((accordionHeader) => {
    if (accordionHeader === e.target) {
      accordionHeader.parentElement.classList.toggle('active');
    } else {
      accordionHeader.parentElement.classList.remove('active');
    }
  });
};

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener('click', onTabClick);
});
