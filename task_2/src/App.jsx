import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image_1 from './components/image_1.jpg';
import CardName from "./components/CardName.jsx"
import CardCompetencies from "./components/CardCompetencies.jsx";
import CardContent from "./components/CardContent.jsx";
import CardDescription from "./components/CardDescription.jsx";


function App() {
    return (
        <div className="App">
            <CardName
                image={image_1}
                title="Кобылкина Анна Андреевна"
            />
            <CardCompetencies title="Мои компетенции">
                <CardDescription title="Знание SQL и работа с  PostgreSQ" />
                <CardDescription title="Работа с библиотеками Python" />
                <CardDescription title="Методологии управления проектами" description="Описание компетенции 3" />
                <CardDescription title="Параллельное программирование" description="Описание компетенции 4" />
            </CardCompetencies>

        </div>
    );
}

export default App;