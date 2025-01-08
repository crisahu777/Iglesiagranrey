function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const svg = document.querySelector('.connections');

    function connectLines(fromId, toId, lineId) {
        const fromElement = document.getElementById(fromId);
        const toElement = document.getElementById(toId);
        const line = document.getElementById(lineId);

        const fromRect = fromElement.getBoundingClientRect();
        const toRect = toElement.getBoundingClientRect();
        const svgRect = svg.getBoundingClientRect();

        const fromCenterX = fromRect.left + fromRect.width / 2 - svgRect.left;
        const fromCenterY = fromRect.top + fromRect.height / 2 - svgRect.top;
        const toCenterX = toRect.left + toRect.width / 2 - svgRect.left;
        const toCenterY = toRect.top + toRect.height / 2 - svgRect.top;

        line.setAttribute('x1', fromCenterX);
        line.setAttribute('y1', fromCenterY);
        line.setAttribute('x2', toCenterX);
        line.setAttribute('y2', toCenterY);
    }

    connectLines('ministerio', 'jorge', 'line-ministerio-jorge');
    connectLines('ministerio', 'martin', 'line-ministerio-martin');
    connectLines('ministerio', 'ramiro', 'line-ministerio-ramiro');
    connectLines('jorge', 'tito', 'line-jorge-tito');
    connectLines('martin', 'gabriela', 'line-martin-gabriela');
    connectLines('ramiro', 'carmen', 'line-ramiro-carmen');
    connectLines('ramiro', 'carmensita', 'line-ramiro-carmensita');
});
