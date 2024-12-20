import H from './components/H';
import List from './components/List';
import { Experience, About, Skills, Languages, Education, Contacts, Projects } from './constants/information';
import './styles/styles.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="photo">
          <img src="https://photobooth.cdn.sports.ru/preset/article/7/ef/ae07477224cc2962b0d4b6c53fa55.jpeg" alt="" />
        </div>
        <List elements={Experience.data[0]} h={Experience.headers[0]} textstyle="white" />
        <List elements={About.data[0]} h={About.headers[0]} textstyle="white" />
        <div className="contacts">
          <List elements={Contacts.data[0]} h={Contacts.headers[0]} textstyle="white" isDecorated />
        </div>
      </div>
      <main className="main">
        <header className="header">
          <h1 className="name">Усова Анастасия</h1>
          <h2 className="spec">Project manager</h2>
        </header>
        <div className="information">
          <div className="block tt">
            <div className="t">
              <H fz={26}>Образование</H>
            </div>
            {Education.headers.map((e, i) => (
              <List key={i} elements={Education.data[i]} h={e} textstyle="black" isDecorated={true} fz={22} />
            ))}
          </div>
          <div className="block  tt">
            <div className="t">
              <H fz={26}>Языки</H>
            </div>
            {Languages.headers.map((e, i) => (
              <List key={i} elements={Languages.data[i]} h={e} textstyle="black" isDecorated={true} fz={22} />
            ))}
          </div>

          <div className="block skills">
            <div className="t">
              <H fz={26}>Навыки</H>
            </div>
            {Skills.headers.map((e, i) => (
              <List key={i} elements={Skills.data[i]} h={e} textstyle="black" fz={22} />
            ))}
          </div>

          <div className="block projects">
            {Projects.headers.map((e, i) => (
              <List key={i} elements={Projects.data[i]} h={e} textstyle="black" fz={22} a={'1'} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
