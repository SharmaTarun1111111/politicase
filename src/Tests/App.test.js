import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import App from "../App.js";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { render, screen } from '@testing-library/react'


test("App renders successfully", () => {
    render(<App/>);

    const element = screen.getByText(/Tarun/);
    expect(element).toBeInTheDocument();
})


test("Header renders successfully", () => {
    render(<Header/>);
})

test("Footer renders successfully", () => {
    render(<Footer/>);
})