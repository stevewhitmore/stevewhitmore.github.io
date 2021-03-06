// Because CSS doesn't have cousin selectors...

const fetchIconNames = () => {
    const icons = document.querySelectorAll('.social-wrap a');
    const iconNames = [];
    let iconName;

    icons.forEach(icon => {
        iconName = icon.id.replace('-icon', '');
        iconNames.push(iconName)
    });

    return iconNames;
}

(() => {
    const iconNames = fetchIconNames();
    const introText = document.querySelector('#me-desc');

    if (iconNames.length < 1) {
        console.error('missing icon names');
        return;
    }
    for (const iconName of iconNames) {
        const icon = document.querySelector('#' + iconName + '-icon');
        const desc = document.querySelector('#' + iconName + '-desc');

        icon.addEventListener('mouseenter', () => {
            desc.style.top = '0';
            introText.style.top = '-100px';
        });
        icon.addEventListener('mouseleave', () => {
            desc.style.top = '100px';
            introText.style.top = '0';
        });
    }
})();
