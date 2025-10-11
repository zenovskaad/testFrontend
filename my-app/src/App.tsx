import React, {useEffect, useState} from "react";
import Star from "./images/Star.tsx";
import BestResult from "./images/BestResult.tsx";
import Man from "./images/Man.tsx";
import Card from "./Card.tsx";
import "./style.css"

function App() {
    const [timeLeft, setTimeLeft] = useState(120);
    const [isSaleActive, setIsSaleActive] = useState(true);
    const [tariffs, setTariffs] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [showError, setShowError] = useState(false);
    const [selectTariffPeriod, setSelectedTariffPeriod] = useState();

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsSaleActive(false)
            return
        }
        ;
        const timerId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    useEffect(() => {
        fetch("https://t-core.fit-hub.pro/Test/GetTariffs")
            .then((res) => res.ok ? res.json() : Promise.reject("Ошибка загрузки"))
            .then((data) => {
                const sorted = [...data].sort((a, b) => b.is_best - a.is_best);
                setTariffs(sorted);
                setSelectedTariffPeriod(sorted[0]?.period);
            })
            .catch(console.error);
    }, []);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    const handleBuyClick = (e) => {
        e.preventDefault();
        if (!isChecked) setShowError(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#232829]">
            <header className="bg-[#1D5B43] w-full flex flex-col items-center py-4 text-2xl font-semibold">
                <div className="text-white text-center">Успейте открыть пробную неделю</div>
                <div className={`flex items-center gap-2 mt-2 text-4xl font-bold  ${
                    timeLeft > 30 ? "text-[#FFBB00]" : timeLeft > 0 ? "text-[#FD5656] red-blink" : "text-white"
                }`}>
                    <Star className="w-4 h-4"/>
                    <div>{timeLeft > 0 ? formatTime(timeLeft) : "00:00"}</div>
                    <Star className="w-4 h-4"/>
                </div>
            </header>

            <main className="flex flex-col  max-w-6xl mx-auto mt-10 p-10">
                <h1 className="text-4xl font-bold mb-17 text-left text-white">
                    Выбери подходящий для себя <span className="text-[#FDB056]">тариф</span>
                </h1>

                <div className="main-container flex gap-12 mb-10">
                    <div className="man-container">
                        <Man/>
                    </div>

                    <form className="flex flex-col gap-3">
                        <div className="flex flex-wrap  gap-y-4 justify-between w-full">
                            {tariffs.length > 0 ? tariffs.map((t) => (
                                <Card
                                    key={t.id}
                                    id={t.id}
                                    is_selected={t.period === selectTariffPeriod}
                                    is_sale_active={isSaleActive}
                                    text={t.text}
                                    price={t.price}
                                    period={t.period}
                                    full_price={t.full_price}
                                    is_best={t.is_best}
                                    onClick={() => setSelectedTariffPeriod(t.period)}
                                />
                            )) : <p className="text-xl text-white">Загрузка тарифов...</p>}
                        </div>

                        <div className="new-width flex items-center gap-5 bg-[#2D3233] pl-8 p-5 rounded-2xl w-[500px]">
                            <BestResult/>
                            <p className="small-text text-base text-white font-normal">
                                Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1
                                месяц
                            </p>
                        </div>

                        <label className={"new-width flex items-center gap-5 mt-5 w-[650px] text-sm cursor-pointer"}>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isChecked}
                                onChange={(e) => {
                                    setIsChecked(e.target.checked);
                                    setShowError(false);
                                }}
                            />
                            <span className={`w-8 h-8 border rounded-sm flex-shrink-0 flex items-center justify-center cursor-pointer
                ${showError && !isChecked ? "bg-[#FD5656] border-[#FD5656]" : "border-[#CDCDCD]"}
                ${isChecked ? "after:block after:w-3 after:h-6 pb-2 after:border-b-2 after:border-r-2 after:border-[#FDB056] after:rotate-45" : ""}
              `}></span>
                            <p className="small-text  text-base text-[#CDCDCD] font-normal">
                                Я согласен с <a href="#" className="underline  hover:text-[#FDB056]">офертой
                                рекуррентных платежей</a> и <a href="#" className="underline hover:text-[#FDB056]">Политикой
                                конфиденциальности</a>
                            </p>
                        </label>

                        <button
                            className="middle-text new-width btn w-88 h-16   cursor-pointer bg-[#FDB056] text-xl text-[#191E1F] font-bold rounded-2xl mt-3  transition-all duration-300 btn-blink"
                            onClick={handleBuyClick}
                        >
                            Купить
                        </button>

                        <p className="small-grey-text new-width text-[#9B9B9B]  font-normal text-sm w-[750px] mt-2">
                            Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для
                            получения пожизненного доступа к приложению. Пользователь соглашается, что данные
                            кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг
                            сервиса в случае желания пользователя.
                        </p>
                    </form>
                </div>

                <div className=" new-width border border-[#484D4E] rounded-2xl px-8 py-4 mb-10 w-full text-left">
                    <p className="small-text text-[#81FE95] border border-[#81FE95] rounded-full py-4 px-8 text-2xl font-medium text-center mb-4 w-[400px] ">
                        гарантия возврата 30 дней
                    </p>
                    <p className="small-text text-[#DCDCDC] text-xl font-normal">
                        Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели!
                        Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не
                        получишь видимых результатов.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default App;
