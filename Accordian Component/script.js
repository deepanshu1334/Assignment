// Geting  all accordion sections
const accordionSec = document.querySelectorAll('.accordion-section');

// Attaching  events to accordion sections
accordionSec.forEach((section) => {
  const header = section.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const content = section.querySelector('.accordion-content');

    
    content.classList.toggle('show');

    // Closing other sections
    accordionSec.forEach((otherSection) => {
      if (otherSection !== section) {
        const otherContent = otherSection.querySelector('.accordion-content');
        otherContent.classList.remove('show');
      }
    });
  });
});
