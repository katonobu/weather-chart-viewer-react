import { ToListPage } from '../components/ToListPage'
import { Footer } from '../components/Footer'
import { ReferenceDescription } from '../components/ReferenceDescription';

export default function Reference() {
    return (
        <div className="p-4">
            <ToListPage id="top"></ToListPage>
            <ReferenceDescription></ReferenceDescription>
            <Footer></Footer>
        </div>
    );
}