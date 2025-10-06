import React from "react";

function App() {
    return (
        <>
            <header>
                <div className="time-offer-text">
                    Успейте открыть пробную неделю
                </div>
                <div className="timer-row">
                    {/* star*/}
                    <div className="timer">
                        12:58
                    </div>
                    {/* star*/}
                </div>
            </header>

            <main>
                <h1>
                    Выбери подходящий для себя <span className="h1-tariff">тариф</span>
                </h1>

                <div className="main-container">
                    {/*man*/}

                    <form className="offer-section">
                        <div className="prices-container">
                            {/*price card in for  button??? */}
                        </div>
                        <div className="best-result">
                            {/*!*/}
                            <p className="best-result-text">Следуя плану на 3 месяца и более, люди получают в 2 раза
                                лучший результат, чем за 1 месяц</p>
                        </div>
                        <div className="confidence-policy">

                            Я согласен с офертой рекуррентных платежей и Политикой конфиденциальности

                        </div>
                        <button className="buy-btn"></button>
                        <p className="conditions">
                            Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для
                            получения пожизненного доступа к приложению. Пользователь соглашается, что данные
                            кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг
                            сервиса в случае желания пользователя.
                        </p>
                    </form>
                </div>

                <div className="content">
                    <p className="warranty-title">
                        гарантия возврата 30 дней
                    </p>
                    <p className="warranty-text">
                        Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели!
                        Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не
                        получишь видимых результатов.
                    </p>
                </div>


            </main>
        </>
    );
}

export default App;
