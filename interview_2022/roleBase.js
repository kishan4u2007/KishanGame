import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const roles = {
    ADMIN: ['dashboard', 'settings', 'users'],
    USER: ['dashboard'],
    GUEST: []
};

const user = { name: 'Jane Doe', role: 'USER' };

const ProtectedRoute = ({ allowedRoles, children }) => {
    return allowedRoles.includes(user.role) ? children : <Navigate to="/unauthorized" />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={
                    <ProtectedRoute allowedRoles={['ADMIN', 'USER']}>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="/settings" element={
                    <ProtectedRoute allowedRoles={['ADMIN']}>
                        <Settings />
                    </ProtectedRoute>
                } />
                <Route path="/unauthorized" element={<Unauthorized />} />
            </Routes>
        </Router>
    );
};

const Dashboard = () => <h1>Dashboard</h1>;
const Settings = () => <h1>Settings</h1>;
const Unauthorized = () => <h1>Unauthorized Access</h1>;

export default App;
