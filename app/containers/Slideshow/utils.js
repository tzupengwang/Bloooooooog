/* eslint-disable no-param-reassign */

function transform(elem, t) {
  if (elem) {
    elem.style.transform = t;
    elem.style.mozTransform = t;
    elem.style.webkitTransform = t;
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
      if (this.container === null) {
        console.error('ScrollController: container is not set');
      } else {
        const y = -this.container.scrollTop;
        this.scrollItems.forEach((item) => {
          const ease = item.ease;
          // console.log(ease);
          item.y += (y - item.y) * ease;
          if (Math.abs(item.y - y) > 1) {
            setTimeout(() => {
              document.dispatchEvent(new Event('scroll'));
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
    this.scrollContainer.style.height = `${((this.scrollItems.length - 1) * document.body.offsetWidth * 0.66666667 * 0.5625) + document.body.offsetHeight}px`;
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
}
