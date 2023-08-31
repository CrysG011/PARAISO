(function () {
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addClick = () => {
    listElements.forEach(element => {
      element.addEventListener('click', () => {
        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle('menu__item--active');

        if (subMenu.clientHeight === 0) {
          height = subMenu.scrollHeight;
        }
        subMenu.style.height = `${height}px`;
      });
    });
  }

  const deleteStyleHeight = () => {
    listElements.forEach(element => {
      if (element.children[1].getAttribute('style')) {
        element.children[1].removeAttribute('style');
        element.classList.remove('menu__item--active');
      }
    });
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth > 919) {
      deleteStyleHeight();
      if (list.classList.contains('menu__links--show'))
        list.classList.remove('menu__links--show');

    } else {
      addClick();
    }
  });

  if (window.innerWidth <= 919) {
    addClick();
  }
  menu.addEventListener('click', () => list.classList.toggle ('menu__links--show'));

}) ();

window.addEventListener('load', function () {
  const grande = document.querySelector('.grande');
  const imgWidth = document.querySelector('.img').offsetWidth;
  let desplazamiento = 0;
  function desplazarCarrusel() {
    desplazamiento -= imgWidth;
    grande.style.transform = `translateX(${desplazamiento}px)`;
    if (desplazamiento <= -imgWidth) {
      desplazamiento = 0;
      grande.style.transform = `translateX(0)`;
    }
  }

  setInterval(desplazarCarrusel, 3000); /* Cambio de imagen cada 3 segundos */
});

/* Sección servicios */
const images = document.querySelectorAll('.servicios__figure');

function triggerAnimation(entries) {
  entries.forEach(entry => {
    const image = entry.target.querySelector('img');
    image.classList.toggle('unset', entry.isIntersecting);
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1
};

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image => {
  observer.observe(image);
});

// Obtener referencias a los elementos del DOM
const botonIndividual = document.querySelector('.individual');
const botonFamiliar = document.querySelector('.familiar');
const planIndividual = document.getElementById('individual');
const planFamiliar = document.getElementById('familiar');

// Función para mostrar el plan individual y ocultar el plan familiar
const mostrarPlanIndividual = () => {
  planIndividual.style.display = 'block';
  planFamiliar.style.display = 'none';
};

// Función para mostrar el plan familiar y ocultar el plan individual
const mostrarPlanFamiliar = () => {
  planIndividual.style.display = 'none';
  planFamiliar.style.display = 'block';
};

// Asignar los event listeners a los botones
botonIndividual.addEventListener('click', mostrarPlanIndividual);
botonFamiliar.addEventListener('click', mostrarPlanFamiliar);

const botonIncluye = document.getElementById('incluye');
const planDesplegable = document.querySelector('.plan__desplegable');

botonIncluye.addEventListener('click', () => {
  if (planDesplegable.style.display === 'block') {
    planDesplegable.style.display = 'none';
  } else {
    planDesplegable.style.display = 'block';
  }
});

