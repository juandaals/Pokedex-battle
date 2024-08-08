 RUN PROJECT = npx react-native start --reset-cache

 
 const url = `${API_HOST}/pokemon?limit=20&offset=0`;
 se le puede poner un limite de 20 en la lista de la API
 el offset es para que empiece desde el 0

se pueden cambiar los nombre de los titulos de menu
cada menu tiene unos props en este caso se puede cambiar favoritos con options 
 <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          TabBarLabel: 'Favoritos',
          
        }}
      />
      



      import {API_HOST} from '../utils/constants';

export async function getPokemonApi(){
try {
    const url = `${API_HOST}/pokemon?limit=20&o ffset=0`;
    const response = await fetch(url);
    const result = await response.json();
    return result; 
} catch (error) {
    trow error;
}
}

creamos una carpeta llamada utils donde metemos la ruta del endpoint de la pokeapi

creamos ahora una carpeta llamada api donde hacemos una funcion async que nos va a devolver los datos de la pokeapi

como es async va adentro de un try catch

se crea una variable llamada url donde le mandamos API_Host que es de donde viene el endpoint le ponemos al final de pokemon y le ponemos un {limit} de 20 por pagina y luego un {offset} para que empiece por el pokemon 0, si no ponemos esto trae todo y puede explotar la app o el telefono de las personas

hacemos un response que es lo que va a devolver el fetch de la url y hacemos el wait para resolver la peticon

ese response le hacemos un una variable result para resolver el response con un await y le ponemos response.json para que nos devuelva los datos en un json

y retornamos result

Creando un useState y useEffect 
al momento de crear un estado y meterlo el efecto se va a volver a ejecutar es decir ellos mandan sobre el effect 
creamos el effect
    useEffect (() => {


    }, [estado1,estado2]);

FlatList nos permite renderizar las listar de manera mas eficiente cuando son listar largas y dinamicas

propiedades adentro de FlatList 
data: le pasamos pokemons para pasarle toda la data de la pokeapi
numColumns: numero de columnas adentro de mi lista

showsHorizontalScrollIndicator:Cuando es verdadero, muestra un indicador de desplazamiento horizontal.

 keyExtractor={pokemon => String(pokemon.id)}
 al pasarle a data pokemons se le asigna el typo del padre 
 el parametro de keyExtractor en este caso pokemon toma esos valores por data mi id es tipo number por ende toca hacer una funcion que transforma este id en String despues del => 

renderItem={({item}) => <PokemonCard pokemon={item} />}
para renderizar nuestra card colocamos el parametro renderItem
el cual llamamos nuestro parametro item => llamamos nuestra card 
y le pasamos las propiedades 

La propiedad contentContainerStyle en un componente FlatList de React Native se utiliza para aplicar estilos al contenedor interno de la lista. El valor {styles.flatListContentContainer} se refiere a un objeto de estilos definido en tu archivo de estilos, que puede contener propiedades como padding, margin, alignItems, etc., para personalizar la apariencia del contenido dentro del FlatList.


onEndReached={loadMore}:
Esta propiedad define una función (loadMore en este caso) que se ejecuta cuando el usuario llega cerca del final de la lista. Es útil para cargar más datos, por ejemplo, para la implementación de paginación infinita.

onEndReachedThreshold={0.1}:
Este valor es un umbral que determina cuán cerca del final de la lista debe estar el usuario antes de que se dispare la función onEndReached. Un valor de 0.1 significa que loadMore se activará cuando el usuario haya llegado al 10% del final de la lista.
ListFooterComponent={<ActivityIndicator size="large" style={styles.spinner} />}:

ListFooterComponent se utiliza para renderizar un componente al final de la lista. En este caso, se está usando un ActivityIndicator con el tamaño "grande" y estilos personalizados (styles.spinner). Este indicador visual generalmente se muestra mientras se cargan más datos, proporcionando retroalimentación al usuario de que una operación de carga está en curso. ActivityIndicator es un loading manejado por react native directamente


*Como mostrar mas pokemones* 

creamos un estado const [nextUrl, setNextUrl] = useState(null);

lo ponemos abajo de nuestra respuesta para que cuando llegue al final de ese response siga con la siguiente pagina
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);

Aparte de eso metemos nexUrl adentro de getPokemonApi para traerlo de nuestro endpoint

vamos a nuestra API y llamamos ese endpoint en nuestro fetch
export async function getPokemonApi(endpointUrl: any) {
  console.log(endpointUrl);
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url);

    decimos que si endpointUrl existe haces el fetch a esta url y si no para a url directamente

*Como hacer para que cuando finalice la lista no renderice nada mas*

 onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }

en el onEndReached que seria la ultima pagina, si isNext tiene valor toma la siguiente pagino y si no llega al final

lo mismo con el ActivityIndicator si isNext tiene siguiente pokemon entonces se va a renderizar el spinner si no, no lanza el spinner


como usar el useContext

primero crear tu contexto que vas a usar
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export default () => useContext(AuthContext);

esto hace que todo lo que este adentro del contexto conecte en esta caso los estados de la navegacion y haga un posible render a todos sus hijos









