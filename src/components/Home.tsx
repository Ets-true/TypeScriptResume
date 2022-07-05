import React from 'react'
import tw, { styled } from 'twin.macro';
// import styled from 'styled-components'



const ResumeRow = styled.div`
  display: flex;
`
const RowLeft = styled.div`
  width: 30%;
  height:400px;
  background-color: rgba(128, 128, 128,0.4);
  text-align:right;
  font-size: 32px;
  padding-right: 40px;
  padding-top: 20px;
  border: 2px solid white;
`
const RowRight = styled.div`
  width: 70%;
  height:300px;
  text-align:left;
  font-size: 24px;
  padding-left: 40px;
  padding-top: 25px;
`


export default function Home() {
  
  return (
    <>
      <ResumeRow>
        <RowLeft>
          Опыт работы
        </RowLeft>
        <RowRight>
            <strong>Web-разработчик, ООО «Никтел»</strong> <br /> <br />
            Основные обязанности: <br />
            • Разработка сайта компании и облачных решений <br />
            • Построение клиент-серверных архитектур <br />
        </RowRight>
      </ResumeRow>
      <ResumeRow>
        <RowLeft>
          Образование
        </RowLeft>
        <RowRight>
            <strong>Лицей информационных технологий №1533</strong> <br /> <br />
            С 2016 по 2019 <br />
            Направление: Прикладная информатика <br /> <br />
            <strong>Российский технологический университет МИРЭА</strong> <br /> <br />
            С 2019, 3 курс <br />
            Институт: Информационных технологий <br />
            Направление: Промышленная информатика <br />
        </RowRight>
      </ResumeRow>
      <ResumeRow>
        <RowLeft>
          Навыки
        </RowLeft>
        <RowRight>
            Основы Интернета вещей и M2M <br/> <br />
            • Клиент-серверные архитектуры (JS/Python) <br/>
            • Разработка систем реального времени <br/>
            • СУБД MySQL и PostgreSQL <br/>
            • Программирование микроконтроллеров C/C++ <br/>
        </RowRight>
      </ResumeRow>
    </>
  )
}