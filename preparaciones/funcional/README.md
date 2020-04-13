# Programación funcional en javascript

Hay varios principios en programación funcional que vamos a citar:

## Purity

Las funciones puras son funciones muy simples. Sólo operan con los parámetros de entrada.

## Inmutabilidad



## Funciones de orden superior

Las funciones de orden superior son aquellas que, o bien tienen funciones como parámetros, devuelven funciones o ambas cosas.

```javascript
const makeAdder = a => (b) => a+b;

const add10 = makeAdder(10)

add(8)
```

## Clausuras


## Composición de funciones

```javascript
function add5(a) {return a+5}
function mult10(a) {return a*10}
function add5andmult10(a) {return  mult10(add5(a))}
add5andmult10(5)
```


## Currying

#### Curried functions

> pasar sólo un parámetro


```javascript
const suma = x => y => x+y
suma(5)(5)
```

## Funciones funcionales comunes
- Map
- Filter
- Reduce


## Orden de la ejecución y paralelismo 
> programación funcional vs imperativa

1. Sacar el pan
2. Poner dos rebanadas en la tostadora
3. Seleccionar nivel de tostado
4. Bajar la palanca
5. Esperar a que la tostada salga
6. Sacar la tostada
7. Sacar el cuchillo
8. Sacar la mantequilla
9. Untar la mantequilla en el pan