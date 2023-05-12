import React from 'react'
import { useState, useEffect } from 'react';
import './payment.css'
import Chip from './chip.png'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import NFC from './NFC logo.png'

function Timer() {
    const [time, setTime] = useState(5 * 60); // 5 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timer);
                    return prevTime;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
}

function Payment() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [ExpMonth, setExpMonth] = useState('');
    const [ExpYear, setExpYear] = useState('');
    const [formattedCardNumber, setFormattedCardNumber] = useState('XXXX-XXXX-XXXX-XXXX');
    const [formattedCardName, setFormattedCardName] = useState('-NAME-');
    const [formattedExpMonth, setFormattedExpMonth] = useState('MM');
    const [formattedExpYear, setFormattedExpYear] = useState('YY');

    const handleCardNumberChange = (event) => {
        let value = event.target.value;
        // remove any non-digit characters from the input
        value = value.replace(/\D/g, '');
        // insert a space every 4 characters
        value = value.replace(/(\d{4})(?!$)/g, '$1-').trim();
        setCardNumber(value);
        setFormattedCardNumber(value);
    };
    const handleCardNameChange = (event) => {
        let value = event.target.value;
        // remove any non-digit characters from the input
        setCardName(value);
        setFormattedCardName(value);
    };
    const handleExpMonthChange = (event) => {
        let value = event.target.value;
        // remove any non-digit characters from the input
        setExpMonth(value);
        setFormattedExpMonth(value);
    };
    const handleExpYearChange = (event) => {
        let value = event.target.value;
        // remove any non-digit characters from the input
        setExpYear(value);
        setFormattedExpYear(value);
    };
    return (
        <div className='paymentwala'>
            <div className="formwala">
                <div className="formwalatop">
                    <span className='metotitlehoon'>.STUDIFYCoin<strong>Pay</strong>
                    </span>
                    <div className="timeleft">
                        <span>Time Left!</span>
                        <Timer />
                    </div>
                </div>
                <div className="cardNumber">
                    <div className="formkadetails">
                        <span className="mainheadingform">
                            CARD NUMBER
                        </span>
                        <span className="notmainheadingform">
                            Enter the 16 card number on the card
                        </span>
                    </div>
                    <input
                        className='humtoinputhai'
                        maxLength={'19'}
                        minLength={'19'}
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="Enter card number"
                    />
                </div>
                <div className="cardNameHolder">
                    <div className="formkadetails">
                        <span className="mainheadingform">
                            CARD HOLDER NAME
                        </span>
                        <span className="notmainheadingform">
                            Enter name of card holder name
                        </span>
                    </div>
                    <span className='spacedede'></span>
                    <input
                        className='humtoinputhai'
                        style={{ width: '80%' }}
                        maxLength={'20'}
                        minLength={'3'}
                        type="text"
                        placeholder="Enter card holder name"
                        value={cardName}
                        onChange={handleCardNameChange}
                    />
                </div>
                <div className="cardCVV">
                    <div className="formkadetails">
                        <span className="mainheadingform">
                            CARD CVV
                        </span>
                        <span className="notmainheadingform">
                            Enter 3 or 4 digit CVV on the card
                        </span>
                    </div>
                    <span className='spacedede'></span>
                    <input
                        className='humtoinputhai'
                        style={{ width: '80%' }}
                        maxLength={'3'}
                        minLength={'3'}
                        type="password"
                        placeholder="Enter CVV"
                    />
                </div>
                <div className="cardEXP">
                    <div className="formkadetails">
                        <span className="mainheadingform">
                            CARD EXPIRY
                        </span>
                        <span className="notmainheadingform">
                            Enter the expiry date on the card
                        </span>
                    </div>
                    <span className='spacedede'></span>
                    <input
                        className='humtoinputhai'
                        style={{ width: '20%' }}
                        type="number"
                        placeholder="MM"
                        min={'1'}
                        max={'12'}
                        value={ExpMonth}
                        onChange={handleExpMonthChange}
                    />
                    <strong> / </strong>
                    <input
                        className='humtoinputhai'
                        style={{ width: '20%' }}
                        type="number"
                        placeholder="YY"
                        min={'23'}
                        max={'30'}
                        value={ExpYear}
                        onChange={handleExpYearChange}
                    />
                </div>
                <button className="paywalahoonbhai">
                    PAY NOW
                </button>
            </div>
            <div className="billwala">
                <div className="billcreditcard">
                    <div className="chipwala">
                        <span>
                            <img src={"https://cdn-icons-png.flaticon.com/512/3877/3877368.png"} alt="CHIP" width={'25px'} style={{ padding: '0' }} />
                        </span>
                        <span>
                            <img id='NFC' src={NFC} alt="LOGO" width={'40px'} />
                        </span>
                    </div>
                    <div className="meranaambhi">
                        CREDIT CARD
                    </div>
                    <div className="creditcarddekhle">
                        <div className='cardinputkardo'>{formattedCardNumber}</div>
                        <div className='cardinputkardo'>{formattedCardName}</div>
                        <div className='cardinputkardo'>{formattedExpMonth} <strong> / </strong> {formattedExpYear}</div>
                    </div>
                    <div className="lowerpartcard">
                        <img src={"https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png"} alt="LOGO" width={'60px'} />
                        <img src={"https://www.freepnglogos.com/uploads/mastercard-png/mastercard-marcus-samuelsson-group-2.png"} alt="LOGO" width={'60px'} />
                    </div>
                </div>
                <div className="billuparpart">
                    <div className="billdetails">
                        <span className='bill1'>PLAN: </span>
                        <span className="bill2">PREMIUM</span>
                    </div>
                    <div className="billdetails">
                        <span className='bill1'>ORDER ID:</span>
                        <span className="bill2">239869</span>
                    </div>
                    <div className="billdetails">
                        <span className='bill1'>VALIDITY:</span>
                        <span className="bill2">12 MONTHS</span>
                    </div>
                    <div className="billdetails">
                        <span className='bill1'>VAT(20%):</span>
                        <span className="bill2">$10</span>
                    </div>
                </div>
                <div className="billnichepart">
                    <p>You have to Pay</p>
                    <div className="eklineprr">
                        <span><strong>90</strong>USD</span>
                        <ReceiptLongIcon />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Payment
