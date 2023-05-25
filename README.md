# LaboratoryST

Задача:

Есть множество (массив, где порядок не важен) целых чисел в диапазоне от 1 до 300. 

Количество чисел - до 1000. Напишите функцию сериализации / десериализации в строку, чтобы итоговая строка была компактной.

Цель задачи - максимально сжать данные относительно простой сериализации без алгоритма сжатия (хотя бы 50% в среднем). 

Сериализованная строка должна содержать только ASCII символы. Можно использовать любой язык программирования.

Вместе с решением нужно сделать набор тестов  - исходная строка, сжатая строка, коэффициент сжатия.

Примеры тестов: 
1. простейшие короткие, 
2. случайные - 50 чисел, 100 чисел, 500 чисел, 1000 чисел
3. граничные - все числа 1 знака, все числа из 2х знаков
4. все числа из 3х знаков 
5. каждого числа по 3 - всего чисел 900.

Решение:

Использованные технологии: JavaScript в среде Node.js и фреймворк Jest для тестирования.

Для выполнения задания я выбрал алгоритм дельта-кодирования - способ представления в виде разницы между последовательными данными вместо самих данных. 

Использование данного алгоритма для компрессии данных эффективно, если разница между элементами массива небольшая. Так как в поставленной задаче порядок элементов не важен, то перед сериализацией данных я произвожу сортировку изначального массива.

Функция сериализации принимает массив целых чисел в качестве входных данных и возвращает строку, представляющую сериализованную версию входного массива. Алгоритм сериализации сначала вычисляет различия между соседними элементами входного массива, добавляя 1 к каждому различию, а затем кодирует каждое различие в виде двоичной строки. Для различий менее 128 один байт используется для хранения значения различия. Для различий между 128 и 254 используются два байта, причем первый байт равен 0, а второй байт представляет собой значение разницы минус 128. Для различий, превышающих или равных 255, используются два байта, причем первый байт равен 1, второй байт представляет собой значение разницы минус 256. Двоичные строки для каждого значения разницы затем объединяются для формирования окончательной выходной строки.

Функция десериализации принимает в качестве входных данных сериализованную строку, созданную функцией сериализации, и возвращает массив целых чисел, представляющий десериализованную версию входной строки. Алгоритм десериализации сначала декодирует двоичную строку в массив разницы значений, используя ту же схему кодирования, которая описана выше. Затем функция вычисляет исходные значения, добавляя каждое значение разницы к предыдущему значению, начиная с первого значения во входном массиве.

В JavaScript, размер числа типа number равен 8 байтам в 64-битных системах и 4 байтам в 32-битных системах. Но задача не привязана к конкретному языку программирования, поэтому для представления чисел от 1 до 255 достаточно 1 байта, с 255 до 300 - 2 байта. Каждый ASCII символ занимает 1 байт.
Таким образом в моём решении коэффициент сжатия высчитывается по следующей формуле:

	`uncompressedSize = arr.length * 2;`
	`compressedSize = serializedArr.length;`
	`compressionRatio = 1 - compressedSize / uncompressedSize;`

где зависит от изначального массива и в среднем составляет 50%.
