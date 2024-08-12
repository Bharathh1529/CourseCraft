    // AdminPannel.js
    import React, { useState } from 'react';
    import './AdminPannel.css';
    import { Pie } from 'react-chartjs-2';
    import 'chart.js/auto';
    import Sidebar from './Sidebar';

    const AdminPannel = () => {
        const [activeSection, setActiveSection] = useState('dashboard');

        const renderContent = () => {
            switch (activeSection) {
                case 'dashboard':
                    return (
                        <div className="dashboard">
                            <div className="stats">
                                <div className="stat-card">
                                    <h3>Student Satisfaction</h3>
                                    <p>85%</p>
                                </div>
                                <div className="stat-card">
                                    <h3>Courses Enrolled</h3>
                                    <p>120</p>
                                </div>
                                <div className="stat-card">
                                    <h3>Number of Streams</h3>
                                    <p>10</p>
                                </div>
                                <div className="stat-card">
                                    <h3>Students Enrolled</h3>
                                    <p>2000</p>
                                </div>
                            </div>
                            <div className="pie-chart">
                                <h3>Student Enrollment by Department</h3>
                                <Pie 
                                    data={{
                                        labels: ['Engineering', 'Arts & Science', 'Medical', 'Agriculture'],
                                        datasets: [{
                                            data: [10, 9, 6, 6],
                                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                                            borderColor: '#fff',
                                            borderWidth: 2,
                                        }]
                                    }}
                                    options={{
                                        responsive: true,
                                        maintainAspectRatio: false,
                                        plugins: {
                                            legend: {
                                                position: 'top',
                                            },
                                            tooltip: {
                                                callbacks: {
                                                    label: function(context) {
                                                        let label = context.label || '';
                                                        if (context.parsed !== null) {
                                                            label += ': ' + context.parsed + ' students';
                                                        }
                                                        return label;
                                                    }
                                                }
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    );
                case 'add-courses':
                    return <h2>Add Courses</h2>;
                case 'add-streams':
                    return <h2>Add Streams</h2>;
                case 'payment-bills':
                    return <h2>Payment and Bills</h2>;
                case 'logout':
                    return <h2>Logout</h2>;
                default:
                    return null;
            }
        };

        return (
            <div>
                <div className="admin-container">
                    <Sidebar setActiveSection={setActiveSection} />
                    <div className="main-content">
                        {renderContent()}
                    </div>
                </div>
            </div>
        );
    };

    export default AdminPannel;
