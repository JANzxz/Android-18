## REACT native

* O react native e bem parecido com o react so mudando o nome de algumas coisas, tipo a div que vira view


## LayoutResponsivo.js

### Importações

 * Primeiro tem as importações que aqui nao e from react e sim from react-native

 ### Explicando componentes importantes

1. View: funciona como uma div

2. Text: usado para fazer o texto aparecer.

3. StyleSheet: Serve para colocar estilo


### Estilo

* Mais para baixo no Componente LayoutResponsivo vai ter a area que e definido o estilo das coisas tipo:

1. container: Engloba tudo

2. header: Cabeçalho

3. content: Conteúdo principal

4. footer: Rodapé

* Dentro de cada um desses tem mais coisas como:

1. backgrouncdColor: Define a cor do background no caso o fundo

2. justifyContent: Coloquei center para ir para o centro na vertical

3. alignItems: Para deixar no centro na horizontal

4. flex: Diz o quanto de espaço o item vai ocupar


## App.js

* Aqui e o pai é onde vai por tudo pra rodar:

1. O <View style={{ flex:1 }}> funciona como o container, o view e um componente que funciona como um container

2. Depois adiciono <LayoutResponsivo/> pra chamar ele pra ele desenhar o conteudo que estava no LayoutResponsivo.js

3. Também tem o (export default App) que pelo que entendi e para dizer que ali e o componente pai



