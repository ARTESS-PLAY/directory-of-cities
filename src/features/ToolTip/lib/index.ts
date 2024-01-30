import { useEffect } from 'react';

let tooltipElem: HTMLDivElement | null = null;

const onMouseOver = (event: MouseEvent) => {
    let target = event.target as HTMLElement;

    if (!target) return;

    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top + target.offsetHeight + 5;
    // если подсказка не помещается сверху, то отображать её сверху
    if (top > window.innerHeight) {
        top = coords.top - tooltipElem.offsetHeight - 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

const onMouseOut = () => {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
};

export const useToolTip = () => {
    useEffect(() => {
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);

        return () => {
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
        };
    }, []);
};
