import H from './components/H';
import List from './components/List';
import { Skills, Languages, Education, Contacts, Projects, Experience } from './constants/information';
import './styles/styles.scss';
import img from './assets/photo.jpg';
import Text from './components/Text';

function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="photo">
          <img src={img} alt="" />
        </div>
        <div className="block tt">
          <div className="t">
            <H fz={26} color="white">
              Education
            </H>
          </div>
          {Education.headers.map((e, i) => (
            <List key={i} elements={Education.data[i]} h={e} textstyle="white" isDecorated={true} fz={22} />
          ))}
        </div>

        <div className="block  tt">
          <div className="t">
            <H fz={26} color="white">
              Languages
            </H>
          </div>
          {Languages.headers.map((e, i) => (
            <List key={i} elements={Languages.data[i]} h={e} textstyle="white" isDecorated={true} fz={22} />
          ))}
        </div>

        <div className="block skills">
          <div className="t">
            <H fz={26} color="white">
              SKILLS & EXPERTISE
            </H>
          </div>
          {Skills.headers.map((e, i) => (
            <List key={i} elements={Skills.data[i]} h={e} textstyle="white" fz={22} />
          ))}
        </div>

        <div className="contacts">
          <List elements={Contacts.data[0]} h={Contacts.headers[0]} textstyle="white" isDecorated />
        </div>
      </div>
      <main className="main">
        <header className="header">
          <h1 className="name">USAVA NASTASSIA</h1>
          <h2 className="spec">Project manager</h2>
        </header>
        <div className="information">
          <div className="block exp">
            <div className="t">
              <H fz={26}>work experience</H>
            </div>
            {Experience.headers.map((e, i) => (
              <>
                <span className="date">{Experience.date[i]}</span>
                <List key={i} elements={Experience.data[i]} h={e} textstyle="black" fz={22} />
              </>
            ))}
          </div>

          <div className="block projects">
            <div className="t">
              <H fz={26}>Projects</H>
            </div>
            <ul className="projectUl">
              {Projects.headers.map((e, i) => (
                <div className="ttt">
                  <a href={Projects.refs[i]}>
                    <H>{e}</H>
                  </a>
                  <img src={Projects.imgs[i]} alt="" className="prImg" />
                  <li className="outterLi">
                    <h3>Technologies</h3>
                    {Projects.techs[i].map((e) => (
                      <li className="innerLi">
                        <Text>{e}</Text>
                      </li>
                    ))}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
