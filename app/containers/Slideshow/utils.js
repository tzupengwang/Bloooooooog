/* eslint-disable no-param-reassign */

function transform(elem, t) {
  if (elem) {
    elem.style.webkitTransform = t;
    elem.style.mozTransform = t;
    elem.style.transform = t;
  }
}

function throttle(fn, wait) {
  let time = Date.now();
  return (...args) => {
    if ((time + wait - Date.now()) < 0 ) {
      fn(...args);
      time = Date.now();
    }
  };
}

export class ScrollController {
  constructor(container) {
    this.container = container || null;
    this.scrollContainer = null;
    this.scrollItems = [];

    document.addEventListener('scroll', throttle((e) => {
      e.preventDefault();
      e.stopPropagation();
      let speedMode = 'normal';
      if (Reflect.has(e, 'detail') && e.detail.speedMode === 'slow') {
        speedMode = 'slow';
      }
      if (this.container === null) {
        console.error('ScrollController: container is not set');
      } else {
        const y = -this.container.scrollTop;
        this.scrollItems.forEach((item) => {
          const ease = (speedMode === 'slow') ? 0.5 : item.ease;
          const speed = (speedMode === 'slow') ? 0.6 : 1;
          item.y += (y - item.y) * ease * speed;
          if (Math.abs(item.y - y) > 1) {
            setTimeout(() => {
              document.dispatchEvent(new CustomEvent('scroll', { detail: { speedMode } }));
            }, 20);
          }
          transform(item.elem, `translate3d(0, ${item.y}px, 0)`);
        });
      }
    }, 10));

    window.addEventListener('optimizedResize', () => {
      this.scrollContainer.style.height = `${((this.scrollItems.length - 1) * document.body.offsetWidth * 0.66666667 * 0.5625) + document.body.offsetHeight}px`;
    });

    this.setContainer = this.setContainer.bind(this);
    this.setScrollContainer = this.setScrollContainer.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.clear = this.clear.bind(this);
  }

  setContainer(container) {
    this.container = container;
  }

  setScrollContainer(container) {
    this.scrollContainer = container;
    if (this.scrollContainer != null) this.scrollContainer.style.height = `${((this.scrollItems.length - 1) * this.container.offsetWidth * 0.66666667 * 0.5625) + this.container.offsetHeight}px`;
  }

  clear() {
    this.scrollItems = [];
  }

  subscribe(items) {
    items.forEach((item, idx) => {
      this.scrollItems.push({
        elem: item,
        ease: (idx % 2) ? 0.45 : 0.35,
        y: 0,
      });
    });
  }

  focus(index) {
    if (index >= this.scrollItems.length) index = this.scrollItems.length - 1;
    this.container.scrollTop = (index * this.container.offsetWidth * 0.66666667 * 0.5625);
    document.dispatchEvent(new CustomEvent('scroll', { detail: { speedMode: 'slow' } }));
    this.scrollItems.forEach((item, idx) => {
      if (idx !== index) {
        item.elem.style.transition = 'opacity .3s ease-in 0s';
        item.elem.style.opacity = 0;
      }
    });
    setTimeout(() => {
      this.scrollItems[index].elem.style.transition = 'transform .4s ease-in 0s';
      this.scrollItems[index].elem.style.transform += ` scale(${Math.max(this.container.offsetHeight / 0.9 / (this.container.offsetWidth * 0.66666667 * 0.5625), 3 / 2 / 0.9 )})`;
    }, 600);
  }
}
