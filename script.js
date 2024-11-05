// 1. Класс Book должен иметь следующие свойства:
//    - title (название книги)
//    - author (автор книги)
//    - year (год выпуска)

//    И методы:
//    - getInfo() — возвращает строку, содержащую информацию о книге в формате: "Название: 'Название книги', Автор: 'Автор книги', Год: 'Год выпуска'".

// Базовый класс Book (Книга)
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getInfo() {
        return `"${this.title}" от ${this.author}, ${this.year} год`;
    }

    setYear(newYear) {
        if (newYear > 0 && newYear <= new Date().getFullYear()) {
            this.year = newYear;
            return true;
        }
        return false;
    }
}

// Дочерний класс EBook (ЭлектроннаяКнига)
class EBook extends Book {
    constructor(title, author, year, format, size) {
        super(title, author, year);
        this.format = format;
        this.size = size;
    }

    // Переопределение метода getInfo
    getInfo() {
        return `${super.getInfo()}\nФормат: ${this.format}, Размер: ${this.size} МБ`;
    }

    // Метод для изменения размера
    changeSize(newSize) {
        if (newSize > 0) {
            this.size = newSize;
            return true;
        }
        return false;
    }
}

// Тестирование классов и методов
console.log("=== Тестирование обычной книги ===");
const book1 = new Book("Война и мир", "Лев Толстой", 1869);
console.log(book1.getInfo());
book1.setYear(1868);
console.log(book1.getInfo());

console.log("\n=== Тестирование электронной книги ===");
const ebook1 = new EBook("Гарри Поттер", "Дж. К. Роулинг", 1997, "PDF", 15.7);
console.log(ebook1.getInfo());
ebook1.changeSize(12.3);
console.log("\nПосле изменения размера:");
console.log(ebook1.getInfo());

const ebook2 = new EBook("1984", "Джордж Оруэлл", 1949, "EPUB", 2.5);
console.log("\nВторая электронная книга:");
console.log(ebook2.getInfo());