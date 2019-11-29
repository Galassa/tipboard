/**
 *
 * @param tileId
 * @param data
 * @param meta
 * @param tileType
 */
function updateTileRadarjs(tileId, data, meta, tileType) {
    let chart = document.getElementById(tileId + '-chart');
    chart.style.paddingBottom = '7%';
    meta['options']['title'] = getTitleForChartJSTitle(data);
    new Chart(chart, {
        type: (tileType === 'doughnut_chart') ? 'doughnut' : 'radar',
        data: data,
        options: meta['options']
    });
    console.log("radar_chartjs::type(" + tileType +")::updateTile end " + tileId);
}

Tipboard.Dashboard.registerUpdateFunction('radar_chart', updateTileRadarjs);
