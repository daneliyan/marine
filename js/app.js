$(document).ready(function () {

	// -------------------- header --------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.header-main').addClass('active');
		}
		else {
			$('.header-main').removeClass('active');
		}
	});

	// Календарь
	new AirDatepicker('#datepicker', {
		dateFormat: 'd MMMM yyyy',
	});

	// ----------------- Burger Menu -----------------------
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close')
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu')
		})
	}
	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu')
		})
	}
	const navLink = document.querySelectorAll('.nav__link')
	const linkAction = () => {
		const navMenu = document.getElementById('nav-menu')
		// When we click on each nav__link, we remove the show-menu class
		navMenu.classList.remove('show-menu')
	}
	navLink.forEach(n => n.addEventListener('click', linkAction))

	// --------------------- Tabs (lk) ---------------------------
	// var lktab = $('#lktabs .lktabs-items > div');
	// lktab.hide().filter(':first').show();
	// Клики по вкладкам.
	// $('#lktabs .lktabs-nav a').click(function () {
	// 	lktab.hide();
	// 	lktab.filter(this.hash).show();
	// 	$('#lktabs .lktabs-nav a').removeClass('active');
	// 	$(this).addClass('active');
	// 	return false;
	// }).filter(':first').click();
	// Клики по якорным ссылкам.
	// $('.lktabs-target').click(function () {
	// 	$('#lktabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	// });
	// Отрытие вкладки из хеша URL
	// if (window.location.hash) {
	// 	$('#lktabs-nav a[href=' + window.location.hash + ']').click();
	// 	window.scrollTo(0, $("#".window.location.hash).offset().top);
	// };
	// --------------------- Tabs (iz) ---------------------------
	// var iztab = $('#iztabs .iztabs-items > div');
	// iztab.hide().filter(':first').show();
	// Клики по вкладкам.
	// $('#iztabs .iztabs-nav a').click(function () {
	// 	iztab.hide();
	// 	iztab.filter(this.hash).show();
	// 	$('#iztabs .iztabs-nav a').removeClass('active');
	// 	$(this).addClass('active');
	// 	return false;
	// }).filter(':first').click();
	// Клики по якорным ссылкам.
	// $('.iztabs-target').click(function () {
	// 	$('#iztabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	// });
	// Отрытие вкладки из хеша URL
	// if (window.location.hash) {
	// 	$('#iztabs-nav a[href=' + window.location.hash + ']').click();
	// 	window.scrollTo(0, $("#".window.location.hash).offset().top);
	// };

	// -------------------- Acordion -------------------------
	$('.accordion-list > li > .accordion-answer').hide();
	$('.accordion-list > li').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active").find(".accordion-answer").slideUp();
		} else {
			$(".accordion-list > li.active .accordion-answer").slideUp();
			$(".accordion-list > li.active").removeClass("active");
			$(this).addClass("active").find(".accordion-answer").slideDown();
		}
		return false;
	});

	// ----------------- onClick Dropdown -------------------
	/*1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун*/
	const menuBtns = document.querySelectorAll('.cldpd-btn');
	const drops = document.querySelectorAll('.cldpd-content');
	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.cldpd').querySelector('.cldpd-content');
			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('cldpd-btn--active');
				}
			});
			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('cldpd-content--active');
				}
			});
			drop.classList.toggle('cldpd-content--active');
			currentBtn.classList.toggle('cldpd-btn--active');
		});
	});
	document.addEventListener('click', (e) => {
		if (!e.target.closest('.cldpd')) {
			menuBtns.forEach(el => {
				el.classList.remove('cldpd-btn--active');
			});
			drops.forEach(el => {
				el.classList.remove('cldpd-content--active');
			});
		}
	});

	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});
	$('.close, .rejection-modal-close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});

	// -------------------- Scroll -------------------------
	$(".scrolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();
		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),
			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 150;
		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 2000);
	});

	// -------------------- jQuery maskedinput --------------------------
	$('.mask-phone').mask('+7 (999) 999-99-99');

	// ---------- Скрыть/показать текстовое поле --------
	document.getElementById('individualDesign').addEventListener('change', toggleInput);
	function toggleInput(evt) {
		document.querySelector('.design-label').classList.toggle('hidden-div');
	};

	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();

	// let swiper = new Swiper(".mySwiper .swiper", {
	// 	scrollbar: {
	// 		el: ".swiper-scrollbar",
	// 		hide: true,
	// 	},
	// });



	// var swiper = new Swiper(".mySwiper", {
		// Стрелки
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},

		// Пагинация (точки)
		// pagination: {
		// 	el: ".swiper-pagination",
		// },

		// Пагинация (динамическая)
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	dynamicBullets: true,
		// },

		// Прогрессбар
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	type: "progressbar",
		// },

		// Пагинация цифрами
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	type: "fraction",
		// },

		// Пагинация цифрами (кастомная)
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// 	renderBullet: function (index, className) {
		// 		return '<span class="' + className + '">' + (index + 1) + "</span>";
		// 	},
		// },

		// Скроллбар
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// 	hide: true,
		// },

		// Вертикальный слайдер
		// direction: "vertical",

		// Отступ между слайдов
		// spaceBetween: 30,

		// Количество видимых слайдов
		// slidesPerView: 3,

		// Свободное количество слайдов. Можно использовать в паре с .swiper-slide {width: 80%;}
		// slidesPerView: "auto",

		// Центрирование слайда
		// slidesPerView: 3,
		// centeredSlides: true,

		// Центрирование слайда с автоматическим отображением слайдов.
		// slidesPerView: "auto",
		// centeredSlides: true,

		// cssMode (Вроде плавность пролистывания)
		// cssMode: true,
		// mousewheel: true,
		// keyboard: true,

		// Free Mode (Свободное пролистывание)
		// slidesPerView: 3,
		// spaceBetween: 20,
		// freeMode: true,

		// Grid
		// slidesPerView: 3,
		// grid: {
		// 	rows: 2,
		// },
		// spaceBetween: 30,
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },

		// Бесконечное пролистывание
		// loop: true,

		// Эффект (один из нескольких)
		// effect: "coverflow",

		// Автоматичское пролистывание
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },

		// Галерея

	// });
		
	// var swiper = new Swiper(".mySwiper1", {
	// 	spaceBetween: 10,
	// 	slidesPerView: 4,
	// 	freeMode: true,
	// 	watchSlidesProgress: true,
	// });
	// var swiper2 = new Swiper(".mySwiper2", {
	// 	spaceBetween: 10,
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},
	// 	thumbs: {
	// 		swiper: swiper,
	// 	},
	// });

	// Scroll-container
	// var swiperScroll = new Swiper(".scroll-container", {
	// 	direction: "vertical",
	// 	slidesPerView: "auto",
	// 	freeMode: true,
	// 	scrollbar: {
	// 		el: ".swiper-scrollbar",
	// 	},
	// 	mousewheel: true,
	// });

	// const player = new Plyr('#player');

	// ------------- Show More ---------------------
	// $("article.style-desc").has("p:nth-child(1)").append('<div class="more"><span>Узнать больше</span><img src="img/icons/next.svg" alt=""></div>');
	// $("article.style-desc .more").click(function () {
	// 	var $this = $(this),
	// 		$cards = $(this).closest('.style-desc');
	// 	$cards.toggleClass('open');
	// 	$this.find('span').html($cards.hasClass('open') ? 'Свернуть' : 'Узнать больше')
	// });

	//end
});

// ----------------- SWIPER ----------------------

// PRODUCT-SWIPER
let prodSecond = new Swiper(".prod-second", {
	spaceBetween: 40,
	slidesPerView: 3,
	slidesPerGroup: 3,
	freeMode: true,
	watchSlidesProgress: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
let prodMain = new Swiper(".prod-main", {
	spaceBetween: 20,
	navigation: {
		nextEl: ".swiper-btn-next",
		prevEl: ".swiper-btn-prev",
	},
	thumbs: {
		swiper: prodSecond,
	},
});

// AlsoScroll
let alsoScroll = new Swiper(".also-scroll", {
	slidesPerView: 'auto',
	freeMode: true,
	freeModeSticky: true,
	spaceBetween: 40,
	grabCursor: true,
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});

// SpecialScroll
let specialScroll = new Swiper(".sp-scroll", {
	slidesPerView: 'auto',
	freeMode: true,
	freeModeSticky: true,
	spaceBetween: 40,
	grabCursor: true,
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});