import { Apresentacao } from './Apresentacao';
import './Capa.css';
import { Navbar } from './Navbar';
export const Capa = () => (
    <>
        <div class="head">
            <Navbar/>
            <Apresentacao/>
        </div>
    </>
);