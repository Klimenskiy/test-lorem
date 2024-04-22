const menu = document.querySelector('.header__nav')
document.querySelector('.burgerMenu-checkbox').onchange = function () {
	menu.classList.toggle('menu_active')
}

const rangeInput = document.getElementById('rangeInput')
const output = document.getElementById('output')

rangeInput.addEventListener('input', function () {
	output.value = this.value + '%'
})

// Dropdown

document.addEventListener('click', e => {
	if (e.target.closest('.dropdown__header')) {
		if (!e.target.closest('.dropdown').classList.contains('active')) {
			document.querySelectorAll('.dropdown').forEach(el => {
				el.classList.remove('active')
			})
			e.target.closest('.dropdown').classList.add('active')
		} else {
			e.target.closest('.dropdown').classList.remove('active')
		}
	}

	if (e.target.closest('.dropdown__item')) {
		let parent = e.target.closest('.dropdown')
		let newItem = e.target.closest('.dropdown__item').innerHTML
		let current = parent.querySelector('.dropdown__current')
		let select = e.target.closest('.dropdown').querySelector('select')

		current.innerHTML = newItem
		if (select) {
			select.querySelectorAll('option').forEach(el => {
				if (el.textContent === current.textContent) {
					el.selected = true
				} else {
					el.selected = false
				}
			})
		}
		if (!parent.classList.contains('choosen')) {
			parent.classList.add('choosen')
		}

		e.target.closest('.dropdown').classList.remove('active')
	}

	if (!e.target.closest('.dropdown')) {
		document.querySelectorAll('.dropdown').forEach(el => {
			el.classList.remove('active')
		})
	}
})

// type file

const fileInput = document.getElementById('input_files')
const fileText = document.getElementById('input_files-text')

fileInput.addEventListener('change', e => {
	const files = e.target.files

	if (!files.length) return

	const fileName = files[0].name
	changeFileText(fileName)
})

function changeFileText(fileName) {
	fileText.innerText = fileName
}



// blue-btn


const formBtn = document.querySelector('.form__btn');

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Спасибо, ваш данные успешно отправлены!');
})
