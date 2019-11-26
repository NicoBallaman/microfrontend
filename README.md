# microfrontend
# Micro-frontends using Web Components

### Un ejemplo de de micro-frontends partiendo de la siguiente [guía](https://medium.com/javascript-in-plain-english/create-micro-frontends-using-web-components-with-support-for-angular-and-react-2d6db18f557a)


En este caso, un piedra papel o tijera entre angular y react en el que se envian y reciben datos al componente padre.

![Alt Text](https://github.com/NicoBallaman/microfrontend/blob/master/micro-fe-wrapper/images/example.gif)

La pagina esta compuesta por un index.html que contiene componentes de angular y react. La estructura es la siguiente

![alt text](https://github.com/NicoBallaman/microfrontend/blob/master/micro-fe-wrapper/images/structure.jpg?raw=true "structure")




##Una iteraccion completa se muestra a continuacion

![alt text](https://github.com/NicoBallaman/microfrontend/blob/master/micro-fe-wrapper/images/lifeCycle.jpg?raw=true "structure")

## Resultado final

![alt text](https://github.com/NicoBallaman/microfrontend/blob/master/micro-fe-wrapper/images/result.jpg?raw=true "structure")


# Build project

#### Angular component
```
cd micro-fe-ng
npm i
npm start
```


#### React component
```
cd micro-fe-react
npm i
npm start
```

#### Wrapper
```
cd micro-fe-wrapper
npm i
npm start
```

### Open
http://localhost:5000


