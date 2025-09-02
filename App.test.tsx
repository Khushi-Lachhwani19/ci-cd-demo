import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

describe('App', () => {
    it('renders correctly', () => {
        const { getByText } = render(<App />);
        // Use exact string matching instead of regex
        expect(getByText('Open up App.tsx to start working on your app!')).toBeDefined();
    });
});