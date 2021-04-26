/*import React from 'react';
import { Text, View,FlatList,StyleSheet,TouchableOpacity, Touchable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';
import { set } from 'react-native-reanimated';
import db from '../config';


/*export default class ReadStoryScreen extends React.Component{

 constructor(){
    super()
    this.state={
        BookName:'',
        BookAuthor:''
    }
 }

SearchBook = async ()=>{
db.collection("Books").add({
    'BookName': this.state.BookName
})
}

    render(){
        return(
        <View>
        <Text style={{backgroundColor:'#1bb1b7',
        textAlign:'center',
        justifyContent:'center',
        height:40,
        fontSize:30,
        color:'white',
        fontWeight:'bold'}}>STORY HUB</Text>

        <View>
        <TextInput style={styles.bar}  
     placeholder='Search Book'
     onChangeText={(text)=> {
     this.setState({
     BookName:text
     })
     }  
     }/>

<TouchableOpacity style={styles.searchbar}
onPress={()=>
{
  this.SearchBook();
}}>
  <Text>SEARCH</Text>
</TouchableOpacity>

        </View>

        </View>
        );
     }
 }


 const styles = StyleSheet.create({
    container : {
      flex:1,
      marginTop:20
    },
    searchbar:{
        backgroundColor:'#1bb1b7',
        width:100,
        height:30,
        fontSize:23,
        margin:10,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:15
    },
    bar:{
        height:40,
        width:400,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        margin:10,
        marginTop:10
    }
  })*/


 /* export default class ReadStoryScreen extends React.Component {
  
    constructor(){
      super()
      this.state={
          BookName:'',
          BookAuthor:'',
          BookName: '',
          AllBooks:[]
      }
   }

/*MoreBooks = async ()=>{
  var text = this.state.search.toUpperCase()
  var enteredText = text. split("")

  if(enteredText[0].toUpperCase()==='B'){
    const query = await db.collection("Books").where('BookName','==',text).get()
    query.docs.map((doc) =>
{
  this.setState({
    AllBooks:[this.state.AllBooks,doc.data()]
  })
})
  }
else if(enteredText[0].toUpperCase()==='S'){
const query = await db.collection("Books").where('BookName','==',text).get()
query.docs.map((doc) =>
{
  this.setState({
    AllBooks:[this.state.AllBooks,doc.data()]
  })
})
}
}*/

/*SearchBook = async(text)=>{
  var enteredText = text.split("")
  if(enteredText[0].toUpperCase()==='B'){
  const search = await db.collection("Books").where('BookName','==',text).get()
  search.docs.map((doc)=>{
    this.setstate({
      AllBooks:[this.state.AllBooks,doc.data()]
    })
  })
}
else if(enteredText[0].toUpperCase()==='S'){
  const transaction = await db.collection("Books").where('BookName','==',text).get()
  transaction.docs.map((doc)=>{
    this.setstate({
      AllBooks:[this.state.AllBooks,doc.data()]
    })
  })
}
}*/

/*componentDidMount = async ()=>{
  const query = await db.collection("Books").get()
  query.docs.map((doc) =>{
  this.setState({
    AllBooks: [ ]
  })

  })
  }*/

/*Books = ()=>{
  var booksRef = db.collection("Books");

  booksRef.doc("HP").set({
    Name:"Harry Potter",
    Author:"J. K. Rowling" 
  });
  booksRef.doc("IM").set({
    Name:"Invisible Man",
    Author:"Ralph Ellison"
  });
  booksRef.doc("BL").set({
    Name:"Beloved",
    Author:"Toni Morrison"
  });
}



    updateSearch = (BookName) => {
      this.setState({ BookName });
    };

    
    SearchBook = async ()=>{
    db.collection("Books").add({
        'BookName': this.state.BookName
    })
    }

    render() {
      const { BookName } = this.state;
  
      return (
          <View>
        <View>
        <Text style={{backgroundColor:'#1bb1b7',
        textAlign:'center',
        justifyContent:'center',
        height:40,
        fontSize:30,
        color:'white',
        fontWeight:'bold'}}>STORY HUB</Text>
        </View>
        <View style={{paddingTop:10}}>
        <SearchBar 
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={BookName}
        />
        </View>
        <View>
        <TouchableOpacity style={styles.searchbar}
onPress={()=>
{
  this.SearchBook(),
  this.Books()
}}>
  <Text>SEARCH</Text>
</TouchableOpacity>
        </View>
        </View>
      );
    }
  }
  

  const styles = StyleSheet.create({
    container : {
      flex:1,
      marginTop:20
    },
    searchbar:{
        backgroundColor:'#1bb1b7',
        width:100,
        height:30,
        fontSize:23,
        margin:10,
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:15
    },
    bar:{
        height:40,
        width:400,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        margin:10,
        marginTop:10
    }
  })*/

  import React from 'react';
import { Text, View,FlatList,StyleSheet,TouchableOpacity, Touchable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';
import { set } from 'react-native-reanimated';
import db from '../config';




export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      allStories:[],
      BookName:'',
          BookAuthor:'',
    }
  }
 
  updateSearch = (BookName) => {
    this.setState({ BookName });
  };


  SearchBook = async ()=>{
    db.collection("Books").add({
        'BookName': this.state.BookName
    })
    }

  retrieveStories=()=>{
    try {
      var allStories= []
      var stories = db.collection("Books")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
              // doc.data() is never undefined for query doc snapshots
              
              allStories.push(doc.data())
              console.log('this are the stories',allStories)
          })
          this.setState({allStories})
        })
    }
    catch (error) {
      console.log(error);
    }
  };

  componentDidMount(){
    this.retrieveStories()
  }

    render(){
        return(
            <View>

<View>

        <Text style={{backgroundColor:'#1bb1b7',
        textAlign:'center',
        justifyContent:'center',
        height:40,
        fontSize:30,
        color:'white',
        fontWeight:'bold'}}>STORY HUB</Text>
        </View>

        <View>
        <TextInput style={styles.bar}  
     placeholder='Search Book'
     onChangeText={(text)=> {
     this.setState({
     BookName:text
     })
     }  
     }
/>

<TouchableOpacity style={styles.searchbar}
onPress={()=>
{
  this.SearchBook();
}}>
  <Text>SEARCH</Text>
</TouchableOpacity>

        </View>

                 <FlatList
                    data={this.state.allStories}
                    renderItem={({ item }) => (
                      <View style={styles.itemContainer}>
                        <Text>Title: {item.title}</Text>
                    <Text>Author : {item.author}</Text>
                      </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },item: {
    backgroundColor: '#1bb1b7',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
   itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: '#1bb1b7',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  searchbar:{
    backgroundColor:'#1bb1b7',
    width:100,
    height:30,
    fontSize:23,
    margin:10,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    borderRadius:15
}
});