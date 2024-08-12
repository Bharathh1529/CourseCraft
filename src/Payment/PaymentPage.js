import React, { useState } from 'react';
import './PaymentPage.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import UpiIcon from '@mui/icons-material/Payment'; 
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [agreedToPolicy, setAgreedToPolicy] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const { from, courseKey, email } = location.state || { from: '/CourseList', courseKey: '', email: '' };

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handlePolicyChange = (e) => {
        setAgreedToPolicy(e.target.checked);
    };

    const handlePaymentClick = () => {
        if (agreedToPolicy) {
            sessionStorage.setItem(courseKey, 'true'); // Use courseKey to set enrollment status
            navigate(from); 
        }
    };

    return (
        <div className="payment-container">
            <header className="payment-header">
                <h1>CourseCraft</h1>
            </header>
            <div className="payment-content">
                <div className="payment-methods">
                    <h2>Select Payment Method</h2>
                    <button
                        className={paymentMethod === 'creditCard' ? 'active' : ''}
                        onClick={() => handlePaymentMethodChange('creditCard')}
                    >
                        <CreditCardIcon /> Credit Card
                    </button>
                    <button
                        className={paymentMethod === 'debitCard' ? 'active' : ''}
                        onClick={() => handlePaymentMethodChange('debitCard')}
                    >
                        <PaymentIcon /> Debit Card
                    </button>
                    <button
                        className={paymentMethod === 'netBanking' ? 'active' : ''}
                        onClick={() => handlePaymentMethodChange('netBanking')}
                    >
                        <AccountBalanceIcon /> Net Banking
                    </button>
                    <button
                        className={paymentMethod === 'upi' ? 'active' : ''}
                        onClick={() => handlePaymentMethodChange('upi')}
                    >
                        <UpiIcon /> UPI
                    </button>
                </div>
                <div className="payment-details">
                    {paymentMethod === 'creditCard' && (
                        <div>
                            <h3>Credit Card Details</h3>
                            <form>
                                <div className="form-group">
                                    <label>Card Number:</label>
                                    <input type="text" placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="form-group">
                                    <label>Expiry Date:</label>
                                    <input type="text" placeholder="MM/YY" />
                                </div>
                                <div className="form-group">
                                    <label>CVV:</label>
                                    <input type="text" placeholder="123" />
                                </div>
                                <div className="form-group">
                                    <label>Cardholder Name:</label>
                                    <input type="text" placeholder="Name on card" />
                                </div>
                            </form>
                        </div>
                    )}
                    {paymentMethod === 'debitCard' && (
                        <div>
                            <h3>Debit Card Details</h3>
                            <form>
                                <div className="form-group">
                                    <label>Card Number:</label>
                                    <input type="text" placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="form-group">
                                    <label>Expiry Date:</label>
                                    <input type="text" placeholder="MM/YY" />
                                </div>
                                <div className="form-group">
                                    <label>CVV:</label>
                                    <input type="text" placeholder="123" />
                                </div>
                                <div className="form-group">
                                    <label>Cardholder Name:</label>
                                    <input type="text" placeholder="Name on card" />
                                </div>
                            </form>
                        </div>
                    )}
                    {paymentMethod === 'netBanking' && (
                        <div>
                            <h3>Net Banking</h3>
                            <form>
                                <div className="form-group">
                                    <label>Bank Name:</label>
                                    <input type="text" placeholder="Bank name" />
                                </div>
                                <div className="form-group">
                                    <label>Account Number:</label>
                                    <input type="text" placeholder="1234567890" />
                                </div>
                                <div className="form-group">
                                    <label>IFSC Code:</label>
                                    <input type="text" placeholder="IFSC0001234" />
                                </div>
                            </form>
                        </div>
                    )}
                    {paymentMethod === 'upi' && (
                        <div>
                            <h3>UPI</h3>
                            <form>
                                <div className="form-group">
                                    <label>UPI ID:</label>
                                    <input type="text" placeholder="example@upi" />
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div className="order-summary">
                    <h2>Order Details</h2>
                    <p>Email: {email}</p>
                    <p>Course: {courseKey}</p>
                    <p>Order #: 12345-67890</p>
                    <p>Order Amount: INR 10000.00</p>
                    <p>Convenience Fee: INR 0.00</p>
                    <p>Tax: INR 0.00</p>
                    <h3>Total Amount: INR 10000.00</h3>
                </div>
            </div>
            <footer className="payment-footer">
                <div className="privacy-policy">
                    <input
                        type="checkbox"
                        id="privacy-policy"
                        checked={agreedToPolicy}
                        onChange={handlePolicyChange}
                    />
                    <label htmlFor="privacy-policy">
                        I agree to the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </label>
                </div>
                <button onClick={handlePaymentClick} className="payment-button" disabled={!agreedToPolicy}>
                    Make Payment
                </button>
            </footer>
        </div>
    );
};

export default PaymentPage;
