// Geting  all accordion sections
const accordionSec = document.querySelectorAll('.accordion-section');

// Attaching  events to accordion sections
accordionSec.forEach((section) => {
  const header = section.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const content = section.querySelector('.accordion-content');

    // Toggle the 'show' class to either show or hide the content
    content.classList.toggle('show');

    // Close other sections
    accordionSec.forEach((otherSection) => {
      if (otherSection !== section) {
        const otherContent = otherSection.querySelector('.accordion-content');
        otherContent.classList.remove('show');
      }
    });
  });
});
