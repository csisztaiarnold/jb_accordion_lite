# JB Accordion Lite

A simple, lightweight (1,6 kbytes of minimized JavaScript and CSS) accordion component.

Demo: https://jailbird.hu/jb_accordion_lite/

I created this accordion because I needed a simple accordion for my personal website, and I didn't need anything fancy, just something that was easy to use and customize.

## Usage

Install the dependencies for minification and build:

```bash
npm install
```

```bash
npm run build
```

Copy `jb-accordion-lite.min.js` and `jb-accordion-lite.min.css` to your project.

Add this to the `<head>` section of your HTML file:

```html
<link rel="stylesheet" href="path/to/your/css/files/jb-accordion-lite.min.css">
```

Add this to the end of your HTML, above the `</body>`:

```html
<script src="path/to/your/js/files/jb-accordion-lite.min.js"></script>
```

Add the HTML structure for the accordion:

```html
<div id="accordion-container-id" class="jb-accordion-lite-container">
    <div class="jb-accordion-lite-item">
        <button class="jb-accordion-lite-header">
            <span>Accordion item 1</span>
            <span class="accordion-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <polyline points="6 8 10 12 14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                </svg>
              </span>
        </button>
        <div class="jb-accordion-lite-content">
            <p>Content</p>
        </div>
    </div>
    <div class="jb-accordion-lite-item">
        <button class="jb-accordion-lite-header">
            <span>Accordion item 2</span>
            <span class="accordion-arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <polyline points="6 8 10 12 14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                </svg>
              </span>
        </button>
        <div class="jb-accordion-lite-content">
            <p>Content</p>
        </div>
    </div>
</div>
```

Init the accordion in your JavaScript:

```html
<script>
    initJbAccordionLite({
        containerId: 'accordion-container-id',
        allowMultiple: false, // Use true for allowing multiple open accordion instances.
    });
</script>
```
