import React from 'react';
import "./style.css"

interface CardProps {
    id: string;
    is_selected: boolean;
    is_sale_active: boolean;
    period: string;
    price: number;
    full_price: number;
    is_best: boolean;
    text: string;
    onClick: (period: string) => void;
}

const Card = ({id, is_selected, is_sale_active, period, price, full_price, is_best, text, onClick}: CardProps) => {
    const percent = Math.ceil((full_price - price) * 100 / full_price);

    return (
        <div
            onClick={() => onClick(period)}
            className={`card glow
                relative flex flex-col cursor-pointer p-4 gap-0 
                ${is_best ? 'bg-[#313637] rounded-[34px] border-2 border-[#484D4E] w-[748px]' : 'bg-[#313637] rounded-[40px] border-2 border-[#484D4E] w-20/65'}
                ${is_selected ? 'border-2 border-[#FDB056]' : ''}
                hover:animate-card-blink 
            `}
        >
            <div className={`flex justify-between font-medium text-lg ${is_sale_active?'relative -top-1 right-4':'absolute top-3 right-8'}`}>

                    <div
                        className={is_sale_active ? 'sale bg-[#FD5656] text-2xl text-white px-2 py-1 rounded-b-lg relative -top-3.5 -right-7.5':'text-2xl  px-2 py-1 relative -top-3.5 -right-4.5 invisible'}>
                        -{percent}%
                    </div>

                {is_best && <div className="text-[#FDB056]">хит!</div>}
            </div>

            <div className={`card-block flex ${is_best ? 'gap-12 justify-center best' : 'flex-col'} mb-5`}>
                <div className="flex flex-col items-center justify-center">
                    <p className="period text-white font-medium text-2xl my-2">{period}</p>
                    <div className="flex flex-col items-end">
                        <p className={`price text-5xl font-semibold ${is_best ? 'text-[#FDB056]' : 'text-white'}`}>
                            {is_sale_active ? price : full_price} ₽
                        </p>
                        {is_sale_active && (
                            <p className="middle-text text-[#919191] text-2xl font-normal line-through">{full_price} ₽</p>
                        )}
                    </div>
                </div>
                {is_best && <p className="small-text best-text text-white text-base flex max-w-[328px] items-center px-2">{text}</p>}
                {!is_best && <p className="small-text text-white text-base my-3 px-2">{text}</p>}
            </div>
        </div>
    );
};

export default Card;
