import { Link } from '@tanstack/react-router'
import { ToListPage } from '../components/ToListPage'
import { AboutDescription } from '../components/AboutDescription';
import { Footer } from '../components/Footer'

export default function About() {
    return (
        <div className="p-4">
            <ToListPage id="top"></ToListPage>
            <h1 className="text-2xl font-bold">このページについて</h1>
            <h2 className="text-lg font-bold">オープンソースライセンス</h2>
            <AboutDescription></AboutDescription>
            <Footer></Footer>
        </div>

    );
}