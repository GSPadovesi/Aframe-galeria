AFRAME.registerComponent('person-events-component', {
  init: function () {
    this.triggerButton = this.triggerButton.bind(this);
    this.openModal = this.openModal.bind(this);
    this.acessArea = this.acessArea.bind(this);
    this.informationModal = this.informationModal.bind(this);

    this.triggerButton();
    this.openModal();
    this.acessArea();
    this.informationModal();
  }, 

  triggerButton: function(){
    const button = document.getElementById('info');
    const acessButton = document.getElementById('acess');

    const toggleInfo = () => {
      [button, acessButton].forEach(element => {
        element.classList.toggle('hide');
      })
    }

    this.el.addEventListener('areaEnter', () => {
      toggleInfo();
      acessButton.innerHTML = 'Acessar ' + this.el.getAttribute('name');
    })

    this.el.addEventListener('areaLeave', () => {
      toggleInfo();
    })

  },

  openModal: function () {
    const button = document.getElementById('info');
    const modal = document.getElementById('modal');
    const close = document.getElementById('closeModal');

    button.addEventListener('click', () => { modal.classList.remove('hide') });
    close.addEventListener('click', () => { modal.classList.add('hide');  });
  },

  informationModal: function(){
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    this.el.addEventListener('areaEnter', () => {
      title.innerHTML = this.el.getAttribute('name');
      description.innerHTML = this.el.getAttribute('description');
    })

    this.el.addEventListener('areaLeave', () => {
      title.innerHTML = '';
      description.innerHTML = '';
    })
  },

  acessArea: function(){
    const acess = document.getElementById('link');

    this.el.addEventListener('areaEnter', () => {
      acess.setAttribute('href', this.el.getAttribute('href'));
    })

    this.el.addEventListener('areaLeave', () => {
      acess.removeAttribute('href');
    })
  },
}) 