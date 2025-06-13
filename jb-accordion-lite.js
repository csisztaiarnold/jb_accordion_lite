function initJbAccordionLite(options = {}) {
    const {
        containerId = options.id || options || 'jb-accordion-lite',
        allowMultiple = false
    } = typeof options === 'object' ? options : {};

    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Accordion container with ID "${containerId}" not found.`);
        return;
    }

    if (container.__jbLiteAccordionInitialized) {
        console.warn(`Accordion container with ID "${containerId}" is already initialized.`);
        return;
    }

    container.__jbLiteAccordionInitialized = true;

    container.addEventListener('click', e => {
        const header = e.target.closest('.jb-accordion-lite-header');
        if (!header || !container.contains(header)) return;

        const item = header.closest('.jb-accordion-lite-item');
        const content = item.querySelector('.jb-accordion-lite-content');
        if (!content) return;

        const isOpen = item.classList.contains('open');

        if (!allowMultiple) {
            container.querySelectorAll('.jb-accordion-lite-item.open').forEach(openItem => {
                if (openItem !== item) {
                    toggleAccordionItem(openItem, false);
                }
            });
        }
        toggleAccordionItem(item, !isOpen);
    });

    function toggleAccordionItem(item, open) {
        item.classList.toggle('open', open);
        const content = item.querySelector('.jb-accordion-lite-content');
        if (content) {
            content.style.maxHeight = open ? `${content.scrollHeight}px` : null;
        }
    }
}