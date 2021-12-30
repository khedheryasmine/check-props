import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  const name = 'khedher'
  const occupation = '****'
  const propsFunction = () => {
    alert('welcome ${name}to workshop props')
  }
  const getAge=(age)=> {
    console.log(age)
  }
  const getData = (info)=> {
    console.log(info)
  }

  return (
    <div>
      <Header getData={getData}studentName={name} job={occupation} alertFct={propsFunction}>
        
        </Header>
      <Footer getAge={getAge} /> 
    </div>
  );
}

export default App;
