import React from 'react';
import './Card-style.css'

interface CardProps extends React.SVGProps<SVGSVGElement> {
    is_sale_active: boolean;
    period: string;
    price: number;
    full_price: number;
    is_best: boolean;
    text: string;
}

const Card = ({is_sale_active, period, price, full_price, is_best, text}: CardProps) => {
    const percent = Math.ceil((full_price - price) * 100 / full_price);
    return (
        <div className="card">
            <div className="header-row">
                <div className={is_sale_active ? "sale" : "hidden"}>-{percent}%</div>
                <div className={is_best ? 'hit-text' : 'hidden'}>хит!</div>
            </div>

            <div className="main-block">
                <div className="price_and_period">
                    <p>{period}</p>
                    <p>{price} ₽</p>
                    <p>{full_price}</p>
                </div>

                <p className="text">
                    {text}
                </p>

            </div>
        </div>
    )
        ;
}

export default Card;
