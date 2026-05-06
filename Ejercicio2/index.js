function injectStyles() {
  const styleId = 'custom-login-styles';

  if (document.getElementById(styleId)) return;

  const style = document.createElement('style');
  style.id = styleId;

  style.textContent = `
    button.custom-btn-aeromexico {
      background-color: #ffffff;
      color: #0057ff;
      border: 1px solid #0057ff;
      border-radius: 4px;
      font-weight: 700;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    button.custom-btn-aeromexico:hover {
      background-color: #f0f4ff;
      color: #003cc2;
    }
  `;

  document.head.appendChild(style);
}

function getModal() {
  return document.querySelector('[role="dialog"], .modal, [class*="modal"]');
}

function updateLoginModal(modal) {
  if (!modal) return;

  const labels = modal.querySelectorAll('label');

  labels.forEach((label) => {
    if (label.textContent.includes('Cuenta Aeroméxico Rewards')) {
      label.childNodes.forEach((node) => {
        if (
          node.nodeType === Node.TEXT_NODE &&
          node.nodeValue.includes('Cuenta Aeroméxico Rewards')
        ) {
          node.nodeValue = node.nodeValue.replace(
            'Cuenta Aeroméxico Rewards',
            'Correo electrónico'
          );
        }
      });
    }
  });

  const buttons = modal.querySelectorAll('button');

  buttons.forEach((button) => {
    const text = button.textContent.trim().toLowerCase();

    if (text.includes('iniciar sesión')) {
      button.classList.add('custom-btn-aeromexico');
    }
  });
}

injectStyles();

let modalObserver = null;
let currentModal = null;
let frameId = null;

function observeModal(modal) {
  currentModal = modal;

  updateLoginModal(currentModal);

  if (modalObserver) {
    modalObserver.disconnect();
  }

  modalObserver = new MutationObserver(() => {
    if (frameId) cancelAnimationFrame(frameId);

    frameId = requestAnimationFrame(() => {
      updateLoginModal(currentModal);
    });
  });

  modalObserver.observe(currentModal, {
    childList: true,
    subtree: true,
  });
}

const bodyObserver = new MutationObserver(() => {
  const modal = getModal();

  if (modal && modal !== currentModal) {
    observeModal(modal);
  }

  if (!modal && modalObserver) {
    modalObserver.disconnect();
    modalObserver = null;
    currentModal = null;
  }
});

bodyObserver.observe(document.body, {
  childList: true,
  subtree: true,
});

const initialModal = getModal();

if (initialModal) {
  observeModal(initialModal);
}