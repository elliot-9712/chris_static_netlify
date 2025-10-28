const mobileMenu = () => {
  const nav = document.querySelector('#mainnav')
  const list = nav.querySelector('ul');
  const button = document.querySelector('#hamburger');

  button.addEventListener('click', e => {
    if ( button.classList.contains('mobile-menu-open') ) {
      button.classList.remove('mobile-menu-open');
    } else {
      button.classList.add('mobile-menu-open');
    }
  });

  // Hide list on Escape
  nav.addEventListener('keyup', e => {
    if (e.code === 'Escape') {
      button.classList.remove('mobile-menu-open');
    }
  });
 }

export default mobileMenu;
