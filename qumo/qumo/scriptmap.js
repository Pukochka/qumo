let center = [57.119417975042175,65.54036915022951];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 12
	});

    let placemark1 = new ymaps.Placemark([57.10484370098059,65.51561301428067], {}, {
		iconLayout: 'default#image',
		iconImageHref: './img/nk.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});
    let placemark2 = new ymaps.Placemark([57.125856142156316,65.48213904577483], {}, {
		iconLayout: 'default#image',
		iconImageHref: './img/pr.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -30]
	});
    let placemark3 = new ymaps.Placemark([57.12105934972155,65.50367475361729], {}, {
		iconLayout: 'default#image',
		iconImageHref: './img/pr.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -30]
	});
    let placemark4 = new ymaps.Placemark([57.16254449577274,65.59717676254819], {}, {
		iconLayout: 'default#image',
		iconImageHref: './img/ai.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -30]
	});


	map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил

    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
    map.geoObjects.add(placemark4);
}

ymaps.ready(init);