import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
    it('renders correctly', () => {
        const { getByText } = render(<App />);
        // This is a very basic test that just checks if the app renders
        // without crashing and contains some expected text.
        expect(getByText(/Open up App.tsx to start working on your app!/i)).toBeDefined();
    });
});