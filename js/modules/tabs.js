function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
      tabsContent = document.querySelectorAll(tabsContentSelector),
      tabsParent = document.querySelector(tabsParentSelector);

    function hideTabsContent() {
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }

    function showTabsContent(i = 0) {
        tabs[i].classList.add(activeClass);
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsSelector.replace(/\./g, ''))) {
        tabs.forEach((item, i) => {
            if (item === target) {
                hideTabsContent();
                showTabsContent(i);
            }
        });
        }
    });
}

export default tabs;