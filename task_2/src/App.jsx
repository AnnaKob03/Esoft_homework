import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image_1 from './components/image_1.jpg';
import CardName from "./components/CardName.jsx"
import CardCompetencies from "./components/CardCompetencies.jsx";
import CardContent from "./components/CardContent.jsx";
import CardDescription from "./components/CardDescription.jsx";

const myCompetencies = [
    "Знание SQL и работа с PostgreSQL",
    "Работа с библиотеками Python",
    "Методологии управления проектами",
    "Параллельное программирование"
]
const desiredCompetencies = [
    "Знание css, доведенное до автоматизма",
    "Знание и опыт работы с Django",
    "Знание и опыт работы с React",
    "Межличностное общение",
    "Управление конфликтами",
    "Технический английский",
    "Эффективное планирование",
    "Разработка на swift",
    "Испанский язык",
    "Итальянский язык"
];

function App() {
    return (
        <div className="App">
            <CardName
                image={image_1}
                title="Кобылкина Анна Андреевна"
            />
            <CardCompetencies title="Мои компетенции">
                {myCompetencies.map((competency, index) => (
                    <CardDescription key={index} title={competency} />
                ))}
            </CardCompetencies>
            <CardCompetencies title="Желаемые компетенции">
                {desiredCompetencies.map((competency, index) => (
                    <CardDescription key={index} title={competency} />
                ))}
            </CardCompetencies>
        </div>
    );
}

export default App;