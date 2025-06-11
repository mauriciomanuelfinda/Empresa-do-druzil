import { Footer } from "@/components/footer";
import {Header} from "@/components/header";


export default function Layout({ children }: { children: React.ReactNode}) {
    return (

        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
